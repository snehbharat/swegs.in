import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const AdminProductCard = ({ product }) => {
  const { VITE_API_ENDPOINT } = import.meta.env;
  const [isOpen, setIsOpen] = useState(false);
  const userInfo = useSelector((state) => state.user.userInfo);
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    stockQuantity: "",
    availabilityStatus: "",
    warrantyInformation: "",
    rating: "",
  });
  // console.log(product);

  // check id the the user is there or not
  const token = localStorage.getItem("userToken");
  useEffect(() => {
    if (token) {
      setIsLogin(true);
    }
  }, [token]);

  // Edit an existing product //
  // Handle input changes in the form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleEditProduct = (product) => {
    setFormData({
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      stockQuantity: product.stockQuantity,
      availabilityStatus: product.availabilityStatus,
      warrantyInformation: product.warrantyInformation,
      rating: product.rating,
    });
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${VITE_API_ENDPOINT}/admin/update-product/${product._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );

      setFormData({
        name: "",
        price: "",
        description: "",
        image: "",
        stockQuantity: "",
        availabilityStatus: "",
        warrantyInformation: "",
        rating: "",
      });
      setIsOpen(false);
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  // Delete a product
  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`${VITE_API_ENDPOINT}/admin/delete-product/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  // for rating stars //
  const totalStars = 5;
  const fullStars = Math.floor(product.rating); // Full stars
  const halfStar = product.rating % 1 >= 0.5; // Half star if rating has decimal part
  const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0); // Empty stars

  return (
    <>
      <div className="w-full  mb-4 sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition duration-700 ease-in-out">
        <Link
          to={`/product/${product._id}`}
          className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition duration-700 ease-in-out "
        >
          <div className="relative pb-48 overflow-hidden">
            <img
              className="absolute inset-0 h-full w-full object-contain"
              src={product.image}
              alt={product.name}
            />
          </div>
        </Link>
        <div className="p-4">
          <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
            {product.availabilityStatus}
          </span>
          <Link to={`/product/${product._id}`}>
            <h2 className="mt-2 mb-2 text-[#4e443e] font-bold">
              {product.name}
            </h2>
          </Link>
          <p className="text-sm text-[#4e443e]">{product.description}</p>
          <div className="mt-3 flex items-center">
            <span className="font-bold text-xl text-[#4e443e]">
              {product.price}
            </span>
            &nbsp;
            <span className="text-sm font-semibold">$</span>
          </div>
        </div>
        <div className="p-4 flex items-center justify-between text-base text-yellow-400">
          {"★".repeat(fullStars)}
          {halfStar ? "☆" : ""}
          {"☆".repeat(emptyStars)}
          <span className="ml-2 text-sm text-gray-600">
            {product.warrantyInformation}
          </span>
        </div>
        {/*  */}
        <div className="flex justify-center items-center">
          {/* Edit Product Modal */}
          {isOpen && (
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white w-3/4 xl:w-1/2 sm:w-3/4 p-6 rounded shadow-md">
                  <div className="flex justify-end">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-700 hover:text-red-500"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <h2 className="text-2xl font-bold mb-4 text-[#352f2b]">
                    Edit Product
                  </h2>

                  <form onSubmit={handleUpdateProduct}>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="price"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="description"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="image"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Image URL
                      </label>
                      <input
                        type="text"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="stockQuantity"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        StockQuantity
                      </label>
                      <input
                        type="number"
                        id="stockQuantity"
                        name="stockQuantity"
                        value={formData.stockQuantity}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="availabilityStatus"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        AvailabilityStatus
                      </label>
                      <input
                        type="text"
                        id="availabilityStatus"
                        name="availabilityStatus"
                        value={formData.availabilityStatus}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="warrantyInformation"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        WarrantyInformation
                      </label>
                      <input
                        type="text"
                        id="warrantyInformation"
                        name="warrantyInformation"
                        value={formData.warrantyInformation}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="rating"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Rating
                      </label>
                      <input
                        type="number"
                        id="rating"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-2 md:mt-5 p-3 px-5 font-semibold rounded-md w-full text-sm tracking-wide bg-[#c1a49e] text-[#262220] transition-all duration-500 hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#262220]"
                    >
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
        {/*  */}
        {userInfo?.isAdmin && isLogin ? (
          <div className="p-1 border-t border-b text-xs text-gray-700">
            <div className="flex justify-evenly">
              <button
                onClick={() => {
                  setIsOpen(true);
                  handleEditProduct(product);
                }}
                className="w-2/5"
              >
                <span className="flex cursor-pointer justify-center items-center p-2 rounded-md w-full text-sm tracking-wide bg-green-400 text-[#262220] transition-all duration-500 hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-green-400 hover:text-green-500">
                  Edit Item
                </span>
              </button>
              <button
                className="w-2/5"
                onClick={() => handleDeleteProduct(product._id)}
              >
                <span className="flex cursor-pointer justify-center items-center p-2 rounded-md w-full text-sm tracking-wide bg-red-400 text-[#262220] transition-all duration-500 hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-red-400 hover:text-red-500">
                  Delete Item
                </span>
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default AdminProductCard;
