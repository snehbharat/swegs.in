import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound";
import ProductReview from "./components/ProductReview";
import UserRegister from "./components/Authentication/UserRegister";
import UserLogin from "./components/Authentication/UserLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminHeader from "./components/admin/AdminHeader";
import { useSelector } from "react-redux";
import AddProduct from "./components/admin/AddProduct";

// For performance Optimization //
const Header = lazy(() => import("./components/Header"));
const ProductList = lazy(() => import("./components/ProductList"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./components/Checkout"));

const PrivateRoute = ({ children }) => {
  // Get user from Redux store
  const userInfo = useSelector((state) => state.user.userInfo);
  return userInfo && !userInfo.isAdmin ? children : <Navigate to="/" />; // Redirect to login if not logged in
};

function App() {
  const userInfo = useSelector((state) => state.user.userInfo);
  console.log(userInfo);
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          {userInfo?.isAdmin ? <AdminHeader /> : <Header />}

          <Routes>
            <Route path="/register" element={<UserRegister />} />
            <Route path="/login" element={<UserLogin />} />
            {userInfo?.isAdmin ? (
              <Route path="/" element={<AdminDashboard />} />
            ) : (
              <Route path="/" element={<ProductList />} />
            )}
            {userInfo?.isAdmin ? (
              <Route path="/product-form" element={<AddProduct />} />
            ) : (
              <></>
            )}

            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route
              path="/product/review/:productId"
              element={<ProductReview />}
            />

            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <PrivateRoute>
                  <Checkout />
                </PrivateRoute>
              }
            />
            {/* <Route path="/checkout" element={<Checkout />} /> */}
            <Route element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
