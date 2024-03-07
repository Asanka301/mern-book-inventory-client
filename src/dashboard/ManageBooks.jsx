import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ManageBooks() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book deleted successfully");
        // Assuming you want to update the book list after deletion
        setAllBooks(allBooks.filter((book) => book._id !== id));
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>
      <div className="lg:w-[1020px]">
        <table className="w-full bg-white border border-gray-200 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                No
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Book name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Author Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Prices
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Edit or Manage
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {allBooks.map((book, index) => (
              <tr key={book._id} className="bg-white">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {book.bookTitle}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {book.authorName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {book.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  $9
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <Link
                    to={`/admin/dashboard/edit-books/${book._id}`}
                    className="font-medium text-blue-600 hover:underline mr-5"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-red-600 px-4 py-1 font-semibold text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageBooks;
