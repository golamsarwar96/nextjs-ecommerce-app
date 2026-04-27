"use client";

import React, { useEffect, useState } from "react";

const Feature = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/apps.json")
      .then((response) => response.json())
      .then((data) => setApps(data))
      .catch((error) => console.error("Error fetching apps:", error));
  }, []);

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Featured Apps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {app.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  by {app.companyName}
                </p>
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {app.description.split("\n\n")[0]}{" "}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>⭐ {app.ratingAvg}</span>
                  <span>{app.downloads.toLocaleString()} downloads</span>
                </div>
                <div className="mt-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {app.size} MB
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
