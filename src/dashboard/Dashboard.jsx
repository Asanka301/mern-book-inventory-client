import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Dashboard = () => {
  const [allBooks, setAllBooks] = useState([]);
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);
  console.log(allBooks);
  useEffect(() => {
    if (barChartRef.current) {
      barChartRef.current.destroy(); // Destroy existing bar chart instance
    }

    if (allBooks.length > 0) {
      // Initialize Bar Chart
      const barCtx = document.getElementById("bar-chart").getContext("2d");
      const categories = allBooks.map((book) => book.category);
      const uniqueCategories = Array.from(new Set(categories));
      const bookCountByCategory = uniqueCategories.map(
        (category) =>
          allBooks.filter((book) => book.category === category).length
      );

      const barChart = new Chart(barCtx, {
        type: "bar",
        data: {
          labels: uniqueCategories,
          datasets: [
            {
              label: "Number of Books",
              data: bookCountByCategory,
              backgroundColor: "rgba(54, 162, 235, 0.5)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1,
              },
            },
          },
        },
      });

      barChartRef.current = barChart; // Save bar chart instance to ref
    }
  }, [allBooks]);

  useEffect(() => {
    if (pieChartRef.current) {
      pieChartRef.current.destroy(); // Destroy existing pie chart instance
    }

    if (allBooks.length > 0) {
      // Initialize Pie Chart
      const pieCtx = document.getElementById("pie-chart").getContext("2d");
      const categories = allBooks.map((book) => book.category);
      const uniqueCategories = Array.from(new Set(categories));
      const bookCountByCategory = uniqueCategories.map(
        (category) =>
          allBooks.filter((book) => book.category === category).length
      );

      const pieChart = new Chart(pieCtx, {
        type: "pie",
        data: {
          labels: uniqueCategories,
          datasets: [
            {
              label: "Number of Books",
              data: bookCountByCategory,
              backgroundColor: [
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
                "rgba(75, 192, 192, 0.5)",
                "rgba(153, 102, 255, 0.5)",
                "rgba(255, 159, 64, 0.5)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
      });

      pieChartRef.current = pieChart; // Save pie chart instance to ref
    }
  }, [allBooks]);

  return (
    <div className="px-4 my-12 lg:w-[720px]">
      <h2 className="mb-8 text-3xl font-bold">Book Store Dashboard</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          maxWidth: "800px",
          margin: "20px auto",
        }}
      >
        <div
          style={{
            maxWidth: "400px",
            maxHeight: "400px",
            border: "1px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <canvas id="bar-chart"></canvas>
        </div>
        <div
          style={{
            maxWidth: "400px",
            maxHeight: "400px",
            border: "1px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <canvas id="pie-chart"></canvas>
        </div>
      </div>

      <table className="mx-auto mt-12">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Author</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {allBooks.map((book, index) => (
            <tr key={book._id}>
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{book.bookTitle}</td>
              <td className="px-4 py-2">{book.authorName}</td>
              <td className="px-4 py-2">{book.category}</td>
              <td className="px-4 py-2">9.9$</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
