import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../redux/cartSlice";
import { addToCartAsync, getCartAsync } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedMessage, setAddedMessage] = useState("");
  const userInfo = useSelector((state) => state.user.userInfo);
  const [isLogin, setIsLogin] = useState(false);
  // console.log(product);
  // console.log(cartItems);

  useEffect(() => {
    dispatch(getCartAsync());
  }, [dispatch]);

  // check id the the user is there or not
  const token = localStorage.getItem("userToken");
  useEffect(() => {
    if (token) {
      setIsLogin(true);
    }
  }, [token]);

  // Check if the item is already in the cart
  const isInCart = cartItems?.some((item) => item.product._id === product._id);

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

  // showing small description.
  const TruncateDescription = ({ description }) => {
    const truncated = description.split(" ").slice(0, 10).join(" ") + "...";
    return <span>{truncated}</span>;
  };
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
          <p className="text-sm text-[#4e443e]">
            {" "}
            <TruncateDescription description={product.description} />
          </p>
          <div className="mt-3 flex items-center">
            <span className="font-bold text-xl text-[#4e443e]">
              {product.price}
            </span>
            &nbsp;
            <span className="text-sm font-semibold">$</span>
          </div>
        </div>
        {!userInfo?.isAdmin && isLogin ? (
          <div className="p-1 border-t border-b text-xs text-gray-700">
            <button className="w-full" onClick={handleAddToCart}>
              <span className="flex cursor-pointer justify-center items-center p-2 rounded-md w-full text-sm tracking-wide bg-[#c1a49e] text-[#262220] transition-all duration-500 hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#262220]">
                {isInCart ? "Added to Cart" : "Add to Cart"}
              </span>
            </button>
            <span className="flex items-center justify-center">
              {addedMessage && <p className="added-message">{addedMessage}</p>}
            </span>
          </div>
        ) : (
          <></>
        )}
        <div className="p-4 flex items-center justify-between text-base text-yellow-400">
          {"★".repeat(fullStars)}
          {halfStar ? "☆" : ""}
          {"☆".repeat(emptyStars)}
          <span className="ml-2 text-sm text-gray-600">
            {product.warrantyInformation}
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
