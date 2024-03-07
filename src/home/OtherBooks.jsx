import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

export default function OtherBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://mern-book-inventory-server.onrender.com/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Other Books" />
    </div>
  );
}
