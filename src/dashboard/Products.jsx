import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";

function Products() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://mern-book-inventory-server.onrender.com/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-20 px-4 lg:px24">
      <h2 className="text-3xl font-bold text-center">All Listings</h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grod-cols-1 bg-white">
        {books.map((book) => (
          <Card className="" key={book._id}>
            <img src={book.imageURL} alt="" className="h-126" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{book.bookTitle}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button className="bg-blue-700 font-semibold text-white py-2 rounded">
              Buy Now
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Products;
