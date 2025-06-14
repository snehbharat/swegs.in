import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const userInfo = useSelector((state) => state.user.userInfo);
  // console.log(userInfo);

  const navigate = useNavigate();
  // console.log(cartItems);

  const token = localStorage.getItem("userToken");
  useEffect(() => {
    if (token) {
      setIsLogin(true);
    }
  }, [token]);

  const handleLogout = () => {
    if (isLogin) {
      localStorage.removeItem("userToken");
      setIsLogin(false);
      navigate("/login");
    }
  };

  return (
    <>
      <div className="flex flex-wrap">
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-[#262220] text-white w-[100vw]">
            <div className="px-5 xl:px-12 py-6 flex w-full justify-between items-center">
              <Link
                className="text-3xl font-bold font-heading text-[#f7f1f0]"
                to="/"
              >
                ShoppyGlobe
              </Link>
              <img
                className="hidden md:block absolute -top-2 xl:left-[45%] left-[40%]"
                src="/images/logoMain.png"
                alt="mainlogo"
              />
              <div className=" flex items-center">
                {/* Nav Links */}
                <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                  <li>
                    <Link
                      className="hover:text-gray-200 text-[#f7f1f0] flex"
                      to="/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 mr-1 w-6 hover:text-gray-200"
                        fill="none"
                        viewBox="0 0 26 26"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 9l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"
                        />
                      </svg>
                      Home
                    </Link>
                  </li>
                </ul>

                {/* Header Icons */}
                {isLogin ? (
                  <div className="hidden md:flex items-center space-x-5">
                    <Link to={"/product-form"}>
                      <div className="flex justify-center items-center space-x-3 cursor-pointer hover:scale-110 transition duration-700 ease-in-out">
                        <div className="w-8 h-8 bg-transparent border-2 border-[#c1a49e] flex items-center justify-center rounded-full overflow-hidden">
                          <p className="text-[#f1dad5] font-serif font-extrabold">
                            +
                          </p>
                        </div>
                      </div>
                    </Link>
                    <div
                      onClick={() => setOpen(!open)}
                      className={`relative  border-b-4 border-transparent  ${
                        open
                          ? "border-indigo-700 transform transition duration-300"
                          : ""
                      }`}
                    >
                      <div className="flex justify-center items-center space-x-3 cursor-pointer hover:scale-110 transition duration-700 ease-in-out">
                        <div className="w-8 h-8 bg-[#c1a49e] flex items-center justify-center rounded-full overflow-hidden">
                          <p className="text-[#f7f1f0] font-serif">
                            {userInfo?.userName[0].toUpperCase()}
                          </p>
                        </div>
                      </div>

                      {open && (
                        <div className="absolute right-0 w-60 px-5 py-3 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent mt-5">
                          <ul className="space-y-3 dark:text-white">
                            <li className="font-serif font-thin flex flex-col items-center justify-center">
                              <div className="w-8 h-8 bg-[#c1a49e] flex items-center justify-center rounded-full overflow-hidden">
                                <p className="text-[#f7f1f0]">
                                  {userInfo?.userName[0].toUpperCase()}
                                </p>
                              </div>
                              <p className="mt-1">{userInfo.userName}</p>
                              <p className="mt-1">{userInfo.email}</p>
                            </li>
                            <hr className="dark:border-gray-700" />
                            <li className="font-medium">
                              <div
                                onClick={handleLogout}
                                className="flex cursor-pointer items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600"
                              >
                                <div className="mr-3 cursor-pointer text-red-600">
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
                                      strokeWidth={2}
                                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                    />
                                  </svg>
                                </div>
                                Logout
                              </div>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => setOpen(!open)}
                    className={`relative hidden md:flex border-b-4 border-transparent  ${
                      open
                        ? "border-indigo-700 transform transition duration-300"
                        : ""
                    }`}
                  >
                    <div className="flex justify-center items-center space-x-3 cursor-pointer hover:scale-110 transition duration-700 ease-in-out">
                      <div className="w-7 h-7 flex items-center justify-center rounded-full overflow-hidden">
                        <img
                          className="rounded-full"
                          src="https://th.bing.com/th/id/OIP.qw42y3S9KyR2Wn9JVAWArgHaHa?rs=1&pid=ImgDetMain"
                          alt="noProfileImg"
                        />
                      </div>
                    </div>

                    {open && (
                      <div className="absolute mt-10 right-0 w-60 px-5 py-3 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent">
                        <ul className="space-y-3 dark:text-white">
                          <li className="font-serif font-thin flex flex-col items-center justify-center">
                            <div className="w-7 h-7 flex items-center justify-center rounded-full overflow-hidden">
                              <img
                                className="rounded-full"
                                src="https://th.bing.com/th/id/OIP.qw42y3S9KyR2Wn9JVAWArgHaHa?rs=1&pid=ImgDetMain"
                                alt="noProfileImg"
                              />
                            </div>
                            <p className="mt-1 font-thin text-gray-400">
                              Login to see the details
                            </p>
                          </li>
                          <hr className="dark:border-gray-700" />
                          <li className="font-medium">
                            <Link to={"/login"} className="cursor-pointer">
                              <div className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-green-600">
                                <div
                                  onClick={handleLogout}
                                  className="mr-3 cursor-pointer text-green-600"
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
                                      strokeWidth={2}
                                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                    />
                                  </svg>
                                </div>
                                Login
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            {/* Responsive navbar */}
            <Link
              className="navbar-burger self-center text-[#f7f1f0] mr-6 md:hidden"
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"
                />
              </svg>
            </Link>
            {isLogin ? (
              <>
                <Link to={"/product-form"}>
                  <div className="md:hidden flex mr-4 text-[#f7f1f0]  items-center mt-6 cursor-pointer hover:scale-110 transition duration-700 ease-in-out">
                    <div className="w-8 h-8 bg-transparent border-2 border-[#c1a49e] flex items-center justify-center rounded-full overflow-hidden">
                      <p className="text-[#f1dad5] font-serif">+</p>
                    </div>
                  </div>
                </Link>
                <div
                  onClick={() => setOpen(!open)}
                  className={`relative border-b-4 border-transparent md:hidden flex mr-6  items-center  ${
                    open
                      ? "border-indigo-700 transform transition duration-300"
                      : ""
                  }`}
                >
                  <div className="flex justify-center items-center space-x-3 cursor-pointer hover:scale-110 transition duration-700 ease-in-out">
                    <div className="w-8 h-8 bg-[#c1a49e] flex items-center justify-center rounded-full overflow-hidden">
                      <p className="text-[#f7f1f0]">{userInfo?.userName[0]}</p>
                    </div>
                  </div>

                  {open && (
                    <div className="absolute top-16 right-0 w-60 px-5 py-3 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent">
                      <ul className="space-y-3 dark:text-white">
                        <li className="font-serif font-thin flex flex-col items-center justify-center">
                          <div className="w-8 h-8 bg-[#c1a49e] flex items-center justify-center rounded-full overflow-hidden">
                            <p className="text-[#f7f1f0]">
                              {userInfo?.userName[0].toUpperCase()}
                            </p>
                          </div>
                          <p className="mt-1">{userInfo.userName}</p>
                          <p className="mt-1">{userInfo.email}</p>
                        </li>
                        <hr className="dark:border-gray-700" />
                        <li className="font-medium">
                          <div
                            onClick={handleLogout}
                            className="flex cursor-pointer items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600"
                          >
                            <div className="mr-3 cursor-pointer text-red-600">
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
                                  strokeWidth={2}
                                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                              </svg>
                            </div>
                            Logout
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div
                onClick={() => setOpen(!open)}
                className={`relative border-b-4 border-transparent md:hidden flex mr-6  items-center  ${
                  open
                    ? "border-indigo-700 transform transition duration-300"
                    : ""
                }`}
              >
                <div className="flex justify-center items-center space-x-3 cursor-pointer hover:scale-110 transition duration-700 ease-in-out">
                  <div className="w-7 h-7 flex items-center justify-center rounded-full overflow-hidden">
                    <img
                      className="rounded-full"
                      src="https://th.bing.com/th/id/OIP.qw42y3S9KyR2Wn9JVAWArgHaHa?rs=1&pid=ImgDetMain"
                      alt="noProfileImg"
                    />
                  </div>
                </div>

                {open && (
                  <div className="absolute top-16 right-0 w-60 px-5 py-3 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent">
                    <ul className="space-y-3 dark:text-white">
                      <li className="font-serif font-thin flex flex-col items-center justify-center">
                        <div className="w-7 h-7 flex items-center justify-center rounded-full overflow-hidden">
                          <img
                            className="rounded-full"
                            src="https://th.bing.com/th/id/OIP.qw42y3S9KyR2Wn9JVAWArgHaHa?rs=1&pid=ImgDetMain"
                            alt="noProfileImg"
                          />
                        </div>
                        <p className="mt-1 font-thin text-gray-400">
                          Login to see the details
                        </p>
                      </li>
                      <hr className="dark:border-gray-700" />
                      <li className="font-medium">
                        <Link to={"/login"} className="cursor-pointer">
                          <div className="flex items-center cursor-pointer transform transition-colors duration-200 border-r-4 border-transparent hover:border-green-600">
                            <div
                              onClick={handleLogout}
                              className="mr-3 cursor-pointer text-green-600"
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
                                  strokeWidth={2}
                                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                              </svg>
                            </div>
                            Login
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </nav>
        </section>
      </div>
    </>
  );
};

export default Header;
