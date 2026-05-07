import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CollegeCard = ({ college }) => {
  const [saved, setSaved] = useState(false);
  const [selectedCompare, setSelectedCompare] =
    useState(false);

  useEffect(() => {
    const bookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];

    setSaved(
      bookmarks.some((item) => item.id === college.id)
    );

    const compare =
      JSON.parse(localStorage.getItem("compare")) || [];

    setSelectedCompare(
      compare.some((item) => item.id === college.id)
    );
  }, [college.id]);

  const handleBookmark = (e) => {
    e.preventDefault();

    let bookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];

    if (saved) {
      bookmarks = bookmarks.filter(
        (item) => item.id !== college.id
      );
    } else {
      bookmarks.push(college);
    }

    localStorage.setItem(
      "bookmarks",
      JSON.stringify(bookmarks)
    );

    setSaved(!saved);
  };

  const handleCompare = (e) => {
    e.preventDefault();

    let compare =
      JSON.parse(localStorage.getItem("compare")) || [];

    if (selectedCompare) {
      compare = compare.filter(
        (item) => item.id !== college.id
      );
    } else {
      if (compare.length >= 3) {
        alert("Maximum 3 colleges allowed");
        return;
      }

      compare.push(college);
    }

    localStorage.setItem(
      "compare",
      JSON.stringify(compare)
    );

    setSelectedCompare(!selectedCompare);
  };

  return (
    <Link to={`/college/${college.slug}`}>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden border hover:shadow-xl transition duration-300">
        <img
          src={college.imageUrl}
          alt={college.name}
          className="w-full h-48 object-cover"
        />

        <div className="p-5">
          <div className="flex justify-end gap-2 mb-4">
            <button
              onClick={handleBookmark}
              className="text-sm px-3 py-1 rounded-full border hover:bg-gray-100"
            >
              {saved ? "★ Saved" : "☆ Save"}
            </button>

            <button
              onClick={handleCompare}
              className={`text-sm px-3 py-1 rounded-full border ${
                selectedCompare
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {selectedCompare
                ? "Selected"
                : "Compare"}
            </button>
          </div>

          <h2 className="text-2xl font-bold text-gray-800">
            {college.name}
          </h2>

          <p className="text-gray-500 mt-1">
            {college.city}, {college.state}
          </p>

          <div className="mt-4 space-y-2">
            <p className="text-sm">
              ⭐ Rating:
              <span className="font-semibold ml-2">
                {college.rating}
              </span>
            </p>

            <p className="text-sm">
              💰 Fees:
              <span className="font-semibold ml-2">
                ₹{college.fees?.toLocaleString()}
              </span>
            </p>

            <p className="text-sm">
              🏆 Ranking:
              <span className="font-semibold ml-2">
                #{college.ranking}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollegeCard;