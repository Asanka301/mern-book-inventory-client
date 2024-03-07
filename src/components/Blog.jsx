import React from "react";
import FavBookImg from "../assets/favoritebook.jpg";

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Reading",
    content:
      "Book coaches one’s imagination to think big. A constant fuel is required by our mind to develop knowledge and enrich our perspective, here the importance of reading comes into play. Reading is not just a leisure activity but can also be beneficial when it comes to clearing some of the globally recognized competitive examinations.",
    author: "John Doe",
    date: "March 12, 2024",
  },
  {
    id: 2,
    title: "Concept of Reading",
    content:
      "Our brain needs to be stimulated to function properly and foster ideas. One of the easiest ways to sharpen your mind is through reading with concentration. Almost all notable personalities read every day as they recognize that knowledge is the key to success. Therefore, it is time to mark their advice if you desire to be closer to your dream.",
    date: "April 5, 2024",
  },
  {
    id: 2,
    title: "5 Must-Read Books for Summer",
    content:
      "While going through an article, you might have come across some words which confuse you or certain words that you hardly even recognize. Finding out their meaning and regularly reading can be the best solution for you to enhance your vocabulary and expand your knowledge. ",
    author: "Jane Smith",
    date: "April 5, 2024",
  },
  // Add more blog post objects as needed
];

function Blog() {
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={FavBookImg}
              alt="Favorite Book"
              className="h-60 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-2">{post.content}</p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">{post.author}</p>
                <p className="text-sm text-gray-600">{post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
