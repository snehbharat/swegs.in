import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import AdminProductCard from "./AdminProductCard";

const AdminDashboard = () => {
  const { products, error } = useFetch();
  const [search, setSearch] = useState("");
  // console.log(products);

  const filteredProducts = products.filter(
    (product) =>
      product.name && product.name.toLowerCase().includes(search.toLowerCase())
  );
  // console.log(filteredProducts);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className=" md:top-24 relative top-0">
      <div className="mx-auto  max-w-7xl sm:px-6 lg:px-8">
        <div className="relative mt-20 isolate overflow-hidden px-6 pb-20 text-center sm:px-16 sm:shadow-sm">
          <p className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-[#262220] sm:text-4xl">
            Didn't find product you were looking for?
          </p>
          <form action="/search">
            <label
              className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
              htmlFor="search-bar"
            >
              <input
                id="search-bar"
                placeholder="Search products"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                name="q"
                className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
              />
            </label>
          </form>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.7"
            ></circle>
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#262220" />
                <stop offset={1} stopColor="#262220" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-5">
          {filteredProducts.length === 0 ? (
            <p>No products found</p>
          ) : (
            filteredProducts.map((product) => (
              <AdminProductCard key={product._id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
