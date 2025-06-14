import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { clearCartAsync, getCartAsync } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartProducts = cartItems;

  useEffect(() => {
    dispatch(getCartAsync());
  }, [dispatch]);

  const calculateTotal = () => {
    return cartProducts
      .reduce((total, item) => total + item?.product?.price * item?.quantity, 0)
      .toFixed(2);
  };

  const handleClearCart = () => {
    dispatch(clearCartAsync());
  };
  return (
    <>
      <div>
        {cartItems?.length === 0 ? (
          <div className=" flex  justify-center relative top-[150px]">
            <div className="flex items-center justify-center  bg-gray-100">
              <div className="text-center p-6 rounded-xl shadow-lg bg-[#e9e4e3] max-w-xs">
                <h1 className="text-3xl font-semibold text-[#4d433f] animate__animated animate__fadeInUp mb-4">
                  Your Cart is Empty
                </h1>
                <p className="text-xl text-[#5e4f49] mb-6">
                  Looks like you haven't added anything to your cart yet.
                </p>
                <Link to={"/"}>
                  <button className="px-6 py-2 bg-[#b48484] text-white hover:text-[#4d433f] rounded-lg hover:bg-[#e9e4e3] hover:border-solid hover:border-[1px] hover:border-[#262220] transition ease-in-out duration-300 transform hover:scale-105 focus:outline-none">
                    Start Shopping
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
              <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-[#3a3430]">
                Shopping Cart
              </h2>
              {cartProducts?.map((item) => (
                <CartItem key={item._id} product={item} />
              ))}
              <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
                <h5 className="text-[#3a3430] font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
                  Subtotal
                </h5>
                <div className="flex items-center justify-between gap-5 ">
                  <button
                    onClick={handleClearCart}
                    className="rounded-full py-2.5 px-3 bg-[#ece6e5] text-[#a58b86] font-semibold text-xs text-center whitespace-nowrap transition-all duration-500 hover:bg-[#dfd8d6]"
                  >
                    Clear Cart
                  </button>
                  <h6 className="font-manrope font-bold text-3xl lead-10 text-[#554a44]">
                    ${calculateTotal()}
                  </h6>
                </div>
              </div>
              <div className="max-lg:max-w-lg max-lg:mx-auto">
                <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
                  Shipping taxes, and discounts calculated at checkout
                </p>

                {cartItems.length > 0 && (
                  <div>
                    <Link to={"/checkout"}>
                      <button className="rounded-full py-4 px-6 bg-[#c1a49e] text-[#262220] font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-[#f7f1f0] hover:border-solid hover:border-[1px] hover:border-[#262220] ">
                        Checkout
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Cart;
