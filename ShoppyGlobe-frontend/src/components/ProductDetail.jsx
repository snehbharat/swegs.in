import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAsync } from "../redux/cartSlice";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetail = () => {
  const { VITE_API_ENDPOINT } = import.meta.env;
  console.log(VITE_API_ENDPOINT);

  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const { productId } = useParams();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const [isLogin, setIsLogin] = useState(false);
  // console.log(userInfo);

  // console.log(product);

  // check id the the user is there or not
  const token = localStorage.getItem("userToken");
  useEffect(() => {
    if (token) {
      setIsLogin(true);
    }
  }, [token]);

  useEffect(() => {
    axios
      .get(`${VITE_API_ENDPOINT}/products/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((err) => setError(err.message));
  }, []);
  // console.log(product);

  // for item already in the cart //
  const cartItems = useSelector((state) => state.cart.items);
  const [addedMessage, setAddedMessage] = useState("");
  // console.log(cartItems);

  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Loading...</div>;

  // Check if the item is already in the cart
  const isInCart = cartItems.some((item) => item.product._id === product._id);

  const handleAddToCart = () => {
    if (isInCart) {
      setAddedMessage("This item is already in your cart!");
      setTimeout(() => {
        setAddedMessage("");
      }, 2000); // Hide the message after 2 seconds
    } else {
      dispatch(addToCartAsync(product));
    }
  };

  // for rating stars //
  const totalStars = 5;
  const fullStars = Math.floor(product.rating); // Full stars
  const halfStar = product.rating % 1 >= 0.5; // Half star if rating has decimal part
  const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0); // Empty stars

  return (
    <>
      <section className="container mx-auto mt-3 p-10 md:py-20 px-0 md:p-10 md:px-0">
        <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
          <img
            className="xl:max-w-3xl"
            src={product.image}
            alt={product.name}
          />
          <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
            <div className="flex justify-between font-bold text-sm">
              <Link to={`/product/review/${product._id}`}>
                <p className="hover:text-[#c1a49e] underline hover:underline">
                  Product Review
                </p>
              </Link>
              <div className=" text-lg text-yellow-500">
                {"★".repeat(fullStars)}
                {halfStar ? "☆" : ""}
                {"☆".repeat(emptyStars)}
              </div>
            </div>
            <h2 className="text-3xl font-semibold mt-4 md:mt-10">
              {product.name}
            </h2>
            <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
              {product.description}
            </p>
            {!userInfo?.isAdmin && isLogin ? (
              <>
                <button
                  onClick={handleAddToCart}
                  className="mt-2 md:mt-5 p-3 px-5 rounded-md w-full text-sm tracking-wide bg-[#c1a49e] text-[#262220] transition-all duration-500 hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#262220]"
                >
                  {isInCart ? "Added to Cart" : "Add to Cart"}
                </button>
                <span className="flex items-center  justify-center">
                  {addedMessage && <p className="text-sm">{addedMessage}</p>}
                </span>
              </>
            ) : (
              <></>
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export default ProductDetail;
