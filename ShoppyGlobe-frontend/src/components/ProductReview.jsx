import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ProductReview = () => {
  const { productId } = useParams();
  console.log(productId);

  //finding product
  const { products, error } = useFetch();
  const product = products.find((p) => p._id.toString() === productId);

  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Loading...</div>;
  const oneDigitRating = Math.floor(product.rating);

  return (
    <div>
      <section className="block md:flex md:items-center py-8 bg-[#161413] min-h-screen md:py-24">
        {product.reviews.length > 0 ? (
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="flex  items-center gap-2">
              <Link to={`/product/${productId}`}>
                <svg
                  className="h-7 w-7 cursor-pointer text-gray-300 text-center  hover:bg-gray-700 hover:rounded-full"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <h2 className="text-2xl font-semibold text-white">Reviews</h2>
              <div className="mt-2 flex items-center gap-2 sm:mt-0">
                <div className="flex items-center gap-0.5">
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                </div>
                <p className="text-sm font-medium leading-none text-gray-400">
                  ({product.rating})
                </p>
                <p className="text-sm font-medium leading-none  underline text-white">
                  {" "}
                  645 Reviews{" "}
                </p>
              </div>
            </div>
            <div className="my-6   gap-8 sm:flex sm:items-start md:my-8">
              <div className="shrink-0 space-y-4">
                <p className="text-2xl font-semibold leading-none text-white">
                  {product.rating} out of 5
                </p>
              </div>
              <div className="mt-6  min-w-0 flex-1 space-y-3 sm:mt-0">
                <div className="flex items-center gap-2">
                  <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-white">
                    5
                  </p>
                  <svg
                    className="h-4 w-4 shrink-0 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <div className="h-1.5 w-80 rounded-full bg-gray-700">
                    <div
                      className="h-1.5 rounded-full bg-yellow-300"
                      style={
                        oneDigitRating == 5
                          ? { width: `${product.rating * 20}%` }
                          : { width: "20%" }
                      }
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-white">
                    4
                  </p>
                  <svg
                    className="h-4 w-4 shrink-0 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <div className="h-1.5 w-80 rounded-full bg-gray-700">
                    <div
                      className="h-1.5 rounded-full bg-yellow-300"
                      style={
                        oneDigitRating == 4
                          ? { width: `${product.rating * 20}%` }
                          : { width: "30%" }
                      }
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-white">
                    3
                  </p>
                  <svg
                    className="h-4 w-4 shrink-0 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <div className="h-1.5 w-80 rounded-full bg-gray-700">
                    <div
                      className="h-1.5 rounded-full bg-yellow-300"
                      style={
                        oneDigitRating == 3
                          ? { width: `${product.rating * 20}%` }
                          : { width: "40%" }
                      }
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-white">
                    2
                  </p>
                  <svg
                    className="h-4 w-4 shrink-0 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <div className="h-1.5 w-80 rounded-full bg-gray-700">
                    <div
                      className="h-1.5 rounded-full bg-yellow-300"
                      style={
                        oneDigitRating == 2
                          ? { width: `${product.rating * 20}%` }
                          : { width: "10%" }
                      }
                    />
                  </div>
                </div>
                <div className="flex  items-center gap-2">
                  <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-white">
                    1
                  </p>
                  <svg
                    className="h-4 w-4 shrink-0 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <div className="h-1.5 w-80 rounded-full bg-gray-700">
                    <div
                      className="h-1.5 rounded-full bg-yellow-300"
                      style={{ width: "0%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {product.reviews.map((r) => {
              const totalStars = 5;
              const fullStars = Math.floor(r.rating); // Full stars
              const halfStar = r.rating % 1 >= 0.5; // Half star if rating has decimal part
              const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0); // Empty stars
              return (
                <div
                  key={r.reviewerName}
                  className="mt-6 divide-y divide-gray-700"
                >
                  <div className="gap-3 pb-6 sm:flex sm:items-start">
                    <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
                      <div className=" text-sm text-yellow-400">
                        {"★".repeat(fullStars)}
                        {halfStar ? "☆" : ""}
                        {"☆".repeat(emptyStars)}
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-base font-semibold text-white">
                          {r.reviewerName}
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-1">
                        <svg
                          className="h-5 w-5 text-blue-600"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-sm font-medium text-white">
                          Verified purchase
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
                      <p className="text-base font-normal text-gray-400">
                        {r.comment}
                      </p>
                      <div className="flex items-center gap-4">
                        <p className="text-sm font-medium text-gray-400">
                          Was it helpful to you?
                        </p>
                        <div className="flex items-center">
                          <input
                            id="reviews-radio-1"
                            type="radio"
                            defaultValue=""
                            name="reviews-radio"
                            className="h-4 w-4  border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-primary-600"
                          />
                          <label
                            htmlFor="reviews-radio-1"
                            className="ms-2 text-sm font-medium text-gray-300"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="reviews-radio-2"
                            type="radio"
                            defaultValue=""
                            name="reviews-radio"
                            className="h-4 w-4 border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-primary-600"
                          />
                          <label
                            htmlFor="reviews-radio-2"
                            className="ms-2 text-sm font-medium text-gray-300"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="mt-6 text-center">
              <button
                type="button"
                className="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 transition-all duration-500 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                View more reviews
              </button>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="flex  items-center gap-2">
              <Link to={`/product/${productId}`}>
                <svg
                  className="h-7 w-7 cursor-pointer text-gray-300 text-center  hover:bg-gray-700 hover:rounded-full"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <h2 className="text-2xl font-semibold text-white">Reviews</h2>
              <div className="mt-2 flex items-center gap-2 sm:mt-0">
                <div className="flex items-center gap-0.5">
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                </div>
                <p className="text-sm font-medium leading-none text-gray-400">
                  ({product.rating})
                </p>
                <p className="text-sm font-medium leading-none  underline text-white">
                  {" "}
                  {product.reviews.length} Reviews{" "}
                </p>
              </div>
            </div>
            <div className="my-6   gap-8 sm:flex sm:items-start md:my-8">
              <div className="shrink-0 space-y-4">
                <p className="text-2xl font-semibold leading-none text-white">
                  {product.rating} out of 5
                </p>
              </div>
              <div className="mt-6  min-w-0 flex-1 space-y-3 sm:mt-0">
                <div className="flex items-center gap-2">
                  <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-white">
                    5
                  </p>
                  <svg
                    className="h-4 w-4 shrink-0 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <div className="h-1.5 w-80 rounded-full bg-gray-700">
                    <div
                      className="h-1.5 rounded-full bg-yellow-300"
                      style={
                        oneDigitRating == 5
                          ? { width: "100%" }
                          : { width: "0%" }
                      }
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-white">
                    4
                  </p>
                  <svg
                    className="h-4 w-4 shrink-0 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <div className="h-1.5 w-80 rounded-full bg-gray-700">
                    <div
                      className="h-1.5 rounded-full bg-yellow-300"
                      style={
                        oneDigitRating == 4
                          ? { width: "100%" }
                          : { width: "0%" }
                      }
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-white">
                    3
                  </p>
                  <svg
                    className="h-4 w-4 shrink-0 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <div className="h-1.5 w-80 rounded-full bg-gray-700">
                    <div
                      className="h-1.5 rounded-full bg-yellow-300"
                      style={
                        oneDigitRating == 3
                          ? { width: "100%" }
                          : { width: "0%" }
                      }
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-white">
                    2
                  </p>
                  <svg
                    className="h-4 w-4 shrink-0 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <div className="h-1.5 w-80 rounded-full bg-gray-700">
                    <div
                      className="h-1.5 rounded-full bg-yellow-300"
                      style={
                        oneDigitRating == 2
                          ? { width: "100%" }
                          : { width: "0%" }
                      }
                    />
                  </div>
                </div>
                <div className="flex  items-center gap-2">
                  <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-white">
                    1
                  </p>
                  <svg
                    className="h-4 w-4 shrink-0 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <div className="h-1.5 w-80 rounded-full bg-gray-700">
                    <div
                      className="h-1.5 rounded-full bg-yellow-300"
                      style={
                        oneDigitRating == 1
                          ? { width: "100%" }
                          : { width: "0%" }
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {product.reviews.length > 0 ? (
          <div className=" hidden xl:block">
            <img
              className="h-96 relative right-56"
              src={product.image}
              alt="product-Img"
            />
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default ProductReview;
