import React, { useState } from "react";

function UploadBook() {
  const bookCategories = [
    "Fiction",
    "Non-fiction",
    "Science Fiction",
    "Fantasy",
    "Mystery",
    "Thriller",
    "Horror",
    "Romance",
    "Historical Fiction",
    "Biography",
    "Autobiography",
    "Self-help",
    "Cookbooks",
    "Travel",
    "Science",
    "History",
    "Philosophy",
    "Religion",
    "Art",
    "Poetry",
    "Drama",
    "Comics",
    "Graphic Novels",
    "Children's",
    "Young Adult",
    "Reference",
    "Education",
    "Business",
    "Finance",
  ];

  const [selectCategory, setSelectCategory] = useState(bookCategories[0]);

  const changeChangeSelectionValue = (event) => {
    setSelectCategory(event.target.value);
  };

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };
    console.log(bookObj);

    fetch("https://mern-book-inventory-server.onrender.com/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book Success");
        form.reset();
      });
  };

  return (
    <div className="px-4 my-12 ">
      <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>

      <form
        onSubmit={handleBookSubmit}
        className="flex lg:w-[1020px] flex-col flex-wrap gap-4"
      >
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2">
              <label
                htmlFor="bookTitle"
                className="block text-sm font-medium text-gray-700"
              >
                Book Title
              </label>
            </div>
            <input
              id="bookTitle"
              name="bookTitle"
              placeholder="Book name"
              required
              type="text"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2">
              <label
                htmlFor="authorName"
                className="block text-sm font-medium text-gray-700"
              >
                Author Name
              </label>
            </div>
            <input
              id="authorName"
              name="authorName"
              placeholder="Author Name"
              required
              type="text"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2">
              <label
                htmlFor="imageURL"
                className="block text-sm font-medium text-gray-700"
              >
                Image URL
              </label>
            </div>
            <input
              id="imageURL"
              name="imageURL"
              placeholder="Book Image URL"
              required
              type="text"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2">
              <label
                htmlFor="inputState"
                className="block text-sm font-medium text-gray-700"
              >
                Book Category
              </label>
            </div>
            <select
              id="inputState"
              name="categoryName"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={selectCategory}
              onChange={changeChangeSelectionValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <div className="mb-2">
            <label
              htmlFor="bookDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Book Description
            </label>
          </div>
          <textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Your Book Description..."
            required
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            rows={6}
          />
        </div>

        <div>
          <div className="mb-2">
            <label
              htmlFor="bookPDFURL"
              className="block text-sm font-medium text-gray-700"
            >
              Book PDF URL
            </label>
          </div>
          <input
            id="bookPDFURL"
            name="bookPDFURL"
            type="text"
            placeholder="Book PDF URL"
            required
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="mt-5  block items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Upload Book
        </button>
      </form>
    </div>
  );
}

export default UploadBook;
