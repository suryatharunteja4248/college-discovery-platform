import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import CollegeCard from "../components/CollegeCard";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("bookmarks")) || [];

    setBookmarks(saved);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">
          Saved Colleges
        </h1>

        {bookmarks.length === 0 ? (
          <p>No saved colleges yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookmarks.map((college) => (
              <CollegeCard
                key={college.id}
                college={college}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;