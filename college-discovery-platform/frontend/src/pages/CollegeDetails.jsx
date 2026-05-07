import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import API from "../api/collegeApi";

const CollegeDetails = () => {
  const { slug } = useParams();

  const [college, setCollege] = useState(null);

  const fetchCollege = async () => {
    try {
      const response = await API.get(`/colleges/${slug}`);

      setCollege(response.data.data);
    } catch (error) {
      console.error("Failed to fetch college", error);
    }
  };

  useEffect(() => {
    fetchCollege();
  }, [slug]);

  if (!college) {
    return (
      <div className="p-10 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src={college.imageUrl}
            alt={college.name}
            className="w-full h-80 object-cover"
          />

          <div className="p-8">
            <h1 className="text-4xl font-bold">
              {college.name}
            </h1>

            <p className="text-gray-500 mt-2">
              {college.city}, {college.state}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div>
                <p className="text-gray-500 text-sm">
                  Rating
                </p>

                <h3 className="text-2xl font-bold">
                  ⭐ {college.rating}
                </h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Fees
                </p>

                <h3 className="text-2xl font-bold">
                  ₹{college.fees?.toLocaleString()}
                </h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Ranking
                </p>

                <h3 className="text-2xl font-bold">
                  #{college.ranking}
                </h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Avg Package
                </p>

                <h3 className="text-2xl font-bold">
                  ₹
                  {college.avgPackage?.toLocaleString()}
                </h3>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">
                About
              </h2>

              <p className="text-gray-700 leading-7">
                {college.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;