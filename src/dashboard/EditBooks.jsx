import React, { useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";

const EditBooks = () => {
  const { id } = useParams();
  const {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPDFURL,
  } = useLoaderData();

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
    const category = selectCategory;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };

    // fetch("http://localhost:5000/upload-book", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(bookObj),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     alert("Book Success");
    //     form.reset();
    //   });

    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateBookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book update Success");
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Edit A Book</h2>

      <form
        onSubmit={handleBookSubmit}
        className="flex lg:w-[1020px] flex-col flex-wrap gap-4"
      >
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <label
                htmlFor="bookTitle"
                className="text-sm font-medium text-gray-700"
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
              defaultValue={bookTitle}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <label
                htmlFor="authorName"
                className="text-sm font-medium text-gray-700"
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
              defaultValue={authorName}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <label
                htmlFor="imageURL"
                className="text-sm font-medium text-gray-700"
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
              defaultValue={imageURL}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <label
                htmlFor="inputState"
                className="text-sm font-medium text-gray-700"
              >
                Book Category
              </label>
            </div>
            <select
              id="inputState"
              name="categoryName"
              className="border border-gray-300 rounded-md p-2 w-full"
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
          <div className="mb-2 block">
            <label
              htmlFor="bookDescription"
              className="text-sm font-medium text-gray-700"
            >
              Book Description
            </label>
          </div>
          <textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Your Book Description..."
            required
            defaultValue={bookDescription}
            className="border border-gray-300 rounded-md p-2 w-full"
            rows={4}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <label
              htmlFor="bookPDFURL"
              className="text-sm font-medium text-gray-700"
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
            defaultValue={bookPDFURL}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="mt-5 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Edit Book
        </button>
      </form>
    </div>
  );
};

export default EditBooks;
