import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { VITE_API_ENDPOINT } = import.meta.env;
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

  const navigate = useNavigate();

  // Handle input changes in the form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add a new product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${VITE_API_ENDPOINT}/admin/add-product`,
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
      navigate("/");
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  return (
    <>
      <form onSubmit={handleAddProduct}>
        <div className=" relative  md:top-20 top-10   bg-transparent py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 w-3/4 xl:w-1/2 md:w-1/2 sm:w-3/4 mx-auto  ">
            <div className="absolute inset-0 bg-gradient-to-r from-[#e2c8c3] to-[#c1a49e] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10">
              <div className=" mx-auto">
                {/*  */}
                <div className="flex justify-end">
                  <Link to={"/"}>
                    <button className="text-gray-700 hover:text-red-500">
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
                  </Link>
                </div>
                {/*  */}
                <div>
                  <h1 className="text-2xl font-semibold">Add a New Product</h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        autoComplete="off"
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="Product Name"
                        onChange={handleChange}
                        required
                        id="name"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Name
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        type="number"
                        name="price"
                        value={formData.price}
                        placeholder="Price"
                        onChange={handleChange}
                        required
                        id="price"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      />
                      <label
                        htmlFor="price"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Price
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        name="description"
                        value={formData.description}
                        placeholder="Description"
                        onChange={handleChange}
                        required
                        id="description"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      />
                      <label
                        htmlFor="description"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Description
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        type="text"
                        name="image"
                        value={formData.image}
                        placeholder="image url"
                        onChange={handleChange}
                        required
                        id="image"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      />
                      <label
                        htmlFor="image"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Image URL
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        type="number"
                        name="stockQuantity"
                        value={formData.stockQuantity}
                        placeholder="stock Quantity"
                        onChange={handleChange}
                        required
                        id="stockQuantity"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      />
                      <label
                        htmlFor="stockQuantity"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Stock Quantity
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        type="text"
                        name="availabilityStatus"
                        value={formData.availabilityStatus}
                        placeholder="In Stock, Low Stock"
                        onChange={handleChange}
                        required
                        id="availabilityStatus"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      />
                      <label
                        htmlFor="availabilityStatus"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Availability Status
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        type="text"
                        name="warrantyInformation"
                        value={formData.warrantyInformation}
                        placeholder="1 year warranty"
                        onChange={handleChange}
                        required
                        id="warrantyInformation"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      />
                      <label
                        htmlFor="warrantyInformation"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Warranty Information
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        type="number"
                        name="rating"
                        value={formData.rating}
                        placeholder="Rating"
                        onChange={handleChange}
                        required
                        id="rating"
                        min="1"
                        max="5"
                        step="1"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      />
                      <label
                        htmlFor="rating"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Rating
                      </label>
                    </div>
                    <div className="relative">
                      <button
                        type="submit"
                        className="mt-2 md:mt-5 p-3 px-5 font-semibold rounded-md w-full text-sm tracking-wide bg-[#c1a49e] text-[#262220] transition-all duration-500 hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#262220]"
                      >
                        Add Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
