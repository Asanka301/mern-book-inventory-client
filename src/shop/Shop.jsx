import React, { useEffect, useState } from "react";

function Shop() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://mern-book-inventory-server.onrender.com/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // Function to slice description for 20 words
  const sliceDescription = (description) => {
    const words = description.split(" ");
    return words.slice(0, 20).join(" ");
  };

  return (
    <div className="mt-28 px-4  lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-8">
        All Books are Here
      </h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={book.imageURL}
              alt={book.bookTitle}
              className="h-72 w-full object-cover"
            />
            <div className="p-6">
              <h5 className="text-xl font-bold mb-2">{book.bookTitle}</h5>
              <p className="text-gray-700">
                {sliceDescription(book.bookDescription)}...
              </p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
