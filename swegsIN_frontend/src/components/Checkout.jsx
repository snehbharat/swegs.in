import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCartAsync, clearCartAsync } from "../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  const [shippingDetails, setShippingDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCartAsync(id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({
      ...shippingDetails,
      [name]: value,
    });
  };

  const handleSubmitOrder = () => {
    if (
      !shippingDetails.firstName ||
      !shippingDetails.lastName ||
      !shippingDetails.email ||
      !shippingDetails.phoneNumber ||
      !shippingDetails.address ||
      !shippingDetails.city ||
      !shippingDetails.state ||
      !shippingDetails.zipCode
    ) {
      setMessage("Please fill out all fields.");
      setTimeout(() => {
        setMessage("");
      }, 2000); // Hide the message after 2 seconds
      return;
    }

    setMessage("Your order has been submitted successfully!");
    dispatch(clearCartAsync());
    navigate("/"); // Redirect to home after order
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.product.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <div className="font-[sans-serif] bg-[#e9e4e3]">
        <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
          <div className="bg-gray-100 sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
            <div className="relative h-full">
              <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
                <div className="">
                  {cartItems.length === 0 ? (
                    navigate("/")
                  ) : (
                    <div>
                      {cartItems.map((item) => (
                        <div
                          key={item.product._id}
                          className="flex items-start gap-4 mb-4"
                        >
                          <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-200 rounded-md">
                            <img
                              src={item.product.image}
                              className="w-full object-contain"
                            />
                          </div>
                          <div className="w-full">
                            <h3 className="text-sm underline lg:text-base text-gray-800">
                              {item.product.name}
                            </h3>
                            <ul className="text-xs text-gray-800 space-y-1 mt-3">
                              <li className="flex flex-wrap gap-4">
                                Price{" "}
                                <span className="ml-auto">
                                  ${item.product.price}
                                </span>
                              </li>
                              <li className="flex flex-wrap gap-4">
                                Quantity{" "}
                                <span className="ml-auto">{item.quantity}</span>
                              </li>
                              <li className="flex flex-wrap gap-4">
                                Total Price{" "}
                                <span className="ml-auto">
                                  ${item.product.price * item.quantity}
                                </span>
                              </li>
                              <li className="flex flex-wrap gap-4">
                                <button
                                  className="rounded-full relative right-1 py-[1px] px-2.5 bg-[#ece6e5] text-[#a58b86] font-semibold text-xs text-center whitespace-nowrap transition-all duration-500 hover:bg-[#dfd8d6]"
                                  onClick={() =>
                                    handleRemoveFromCart(item.product._id)
                                  }
                                >
                                  remove
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="md:absolute md:left-0 md:bottom-0 bg-gray-200 w-full p-4">
                <h4 className="flex flex-wrap gap-4 text-sm lg:text-base text-gray-800">
                  Total <span className="ml-auto">${calculateTotal()}</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="max-w-4xl  w-full h-max rounded-md px-4 py-8 sticky top-40">
            <h2 className="text-2xl font-bold text-[#473f3b]">
              Complete your order
            </h2>
            <form className="mt-8">
              <div>
                <h3 className="text-sm lg:text-base text-[#473f3b] mb-4">
                  Personal Details
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={shippingDetails.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={shippingDetails.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={shippingDetails.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name="phoneNumber"
                      value={shippingDetails.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Phone No."
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-sm lg:text-base text-[#473f3b] mb-4">
                  Shipping Address
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="address"
                      value={shippingDetails.address}
                      onChange={handleInputChange}
                      placeholder="Address Line"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="city"
                      value={shippingDetails.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="state"
                      value={shippingDetails.state}
                      onChange={handleInputChange}
                      placeholder="State"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="zipCode"
                      value={shippingDetails.zipCode}
                      onChange={handleInputChange}
                      placeholder="Zip Code"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                </div>
                <div className="flex gap-4 max-md:flex-col mt-8">
                  <Link to={"/cart"}>
                    <button
                      type="button"
                      className="rounded-md px-4 py-2.5 w-full text-sm tracking-wide bg-transparent transition-all duration-500 hover:bg-[#c1a49e] hover:border-transparent hover:text-white border border-[#473f3b] text-[#473f3b] max-md:order-1"
                    >
                      Cancel
                    </button>
                  </Link>
                  <button
                    type="button"
                    onClick={handleSubmitOrder}
                    className="rounded-md px-4 py-2.5 w-full text-sm tracking-wide bg-[#c1a49e] text-[#262220] transition-all duration-500 hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#262220]"
                  >
                    Place Order
                  </button>
                </div>
                <div className=" flex  justify-center">
                  {message && (
                    <p className=" mt-2  text-[#3a3430]">{message}</p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
