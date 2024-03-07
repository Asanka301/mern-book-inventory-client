import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

function BestSellerBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://mern-book-inventory-server.onrender.com/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 6)));
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Best Selling Books" />
    </div>
  );
}

export default BestSellerBooks;
