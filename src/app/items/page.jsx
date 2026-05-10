"use client";
import NavBar from "@/components/homepage/NavBar";
import Footer from "@/components/homepage/Footer";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import appsData from "@/data/apps.json";

const Items = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    // Since data is static, we can set it directly
    setApps(appsData);
  }, []);

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            All Apps
          </h1>
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
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>⭐ {app.ratingAvg}</span>
                    <span>{app.downloads.toLocaleString()} downloads</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {app.size} MB
                    </span>
                    <Link
                      href={`/items/${app.id}`}
                      className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow duration-200"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Items;
