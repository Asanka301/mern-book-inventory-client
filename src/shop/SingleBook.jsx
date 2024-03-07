import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

function SingleBook() {
  const { bookTitle, imageURL, bookDescription, authorName, bookPDFURL } =
    useLoaderData();

  return (
    <div className="mt-28 px-4 lg:px-24">
      <div className="flex flex-col lg:flex-row lg:items-start">
        <div className="lg:w-1/2 lg:pr-8">
          <img
            src={imageURL}
            alt={bookTitle}
            className="rounded-lg shadow-lg h-auto w-full mb-8 lg:max-w-lg mx-auto"
          />
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pl-8">
          <h2 className="text-3xl font-bold mb-4">{bookTitle}</h2>
          <div className="text-amber-500 mb-2 flex gap-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <h3 className="text-xl font-semibold mb-2">By {authorName}</h3>
          <p className="text-gray-700 mb-4">{bookDescription}</p>
          <a
            href={bookPDFURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Buy Here
          </a>
        </div>
      </div>
    </div>
  );
}

export default SingleBook;
