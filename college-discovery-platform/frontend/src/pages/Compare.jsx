import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

const Compare = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    const compare =
      JSON.parse(localStorage.getItem("compare")) || [];

    setColleges(compare);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">
          Compare Colleges
        </h1>

        {colleges.length === 0 ? (
          <p>No colleges selected for comparison.</p>
        ) : (
          <div className="overflow-x-auto bg-white rounded-2xl shadow">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left">
                    Attribute
                  </th>

                  {colleges.map((college) => (
                    <th
                      key={college.id}
                      className="p-4 text-left"
                    >
                      {college.name}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-4 font-semibold">
                    Rating
                  </td>

                  {colleges.map((college) => (
                    <td
                      key={college.id}
                      className="p-4"
                    >
                      ⭐ {college.rating}
                    </td>
                  ))}
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-semibold">
                    Fees
                  </td>

                  {colleges.map((college) => (
                    <td
                      key={college.id}
                      className="p-4"
                    >
                      ₹
                      {college.fees?.toLocaleString()}
                    </td>
                  ))}
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-semibold">
                    Ranking
                  </td>

                  {colleges.map((college) => (
                    <td
                      key={college.id}
                      className="p-4"
                    >
                      #{college.ranking}
                    </td>
                  ))}
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-semibold">
                    Avg Package
                  </td>

                  {colleges.map((college) => (
                    <td
                      key={college.id}
                      className="p-4"
                    >
                      ₹
                      {college.avgPackage?.toLocaleString()}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Compare;