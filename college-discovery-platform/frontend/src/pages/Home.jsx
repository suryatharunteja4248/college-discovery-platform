import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import API from "../api/collegeApi";
import Navbar from "../components/Navbar";
import CollegeCard from "../components/CollegeCard";

const Home = () => {
  const [colleges, setColleges] = useState([]);
  const [compareCount, setCompareCount] =
    useState(0);

  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] =
    useState("");
  const [ratingFilter, setRatingFilter] =
    useState("");

  const fetchColleges = async () => {
    try {
      const response = await API.get("/colleges", {
        params: {
          search,
          state: stateFilter,
          minRating: ratingFilter,
        },
      });

      setColleges(response.data.data);
    } catch (error) {
      console.error(
        "Failed to fetch colleges",
        error
      );
    }
  };

  useEffect(() => {
    fetchColleges();

    const compare =
      JSON.parse(localStorage.getItem("compare")) ||
      [];

    setCompareCount(compare.length);
  }, [search, stateFilter, ratingFilter]);

  useEffect(() => {
    const interval = setInterval(() => {
      const compare =
        JSON.parse(
          localStorage.getItem("compare")
        ) || [];

      setCompareCount(compare.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            College Discovery Platform
          </h1>

          <p className="text-gray-500 mt-2">
            Discover, compare, and shortlist
            colleges
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search colleges..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="border rounded-lg px-4 py-3 outline-none"
          />

          <select
            value={stateFilter}
            onChange={(e) =>
              setStateFilter(e.target.value)
            }
            className="border rounded-lg px-4 py-3 outline-none"
          >
            <option value="">All States</option>

            <option value="Telangana">
              Telangana
            </option>

            <option value="Tamil Nadu">
              Tamil Nadu
            </option>

            <option value="Rajasthan">
              Rajasthan
            </option>
          </select>

          <select
            value={ratingFilter}
            onChange={(e) =>
              setRatingFilter(e.target.value)
            }
            className="border rounded-lg px-4 py-3 outline-none"
          >
            <option value="">
              All Ratings
            </option>

            <option value="4">4+</option>

            <option value="4.5">
              4.5+
            </option>
          </select>
        </div>

        {/* Compare Bar */}
        {compareCount > 0 && (
          <div className="bg-blue-600 text-white rounded-2xl p-4 mb-6 flex items-center justify-between">
            <p>
              {compareCount} college
              {compareCount > 1
                ? "s"
                : ""}{" "}
              selected for comparison
            </p>

            <Link
              to="/compare"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold"
            >
              Compare Now
            </Link>
          </div>
        )}

        {/* Colleges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {colleges.map((college) => (
            <CollegeCard
              key={college.id}
              college={college}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;