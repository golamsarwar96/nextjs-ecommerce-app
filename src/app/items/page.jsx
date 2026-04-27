"use client";

import NavBar from "@/components/homepage/NavBar";
import Footer from "@/components/homepage/Footer";
import React, { useEffect, useState } from "react";

const Items = () => {
  const [apps, setApps] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("/apps.json")
      .then((response) => response.json())
      .then((data) => setApps(data))
      .catch((error) => console.error("Error fetching apps:", error));
  }, []);

  const openModal = (app) => {
    setSelectedApp(app);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedApp(null);
  };

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
                    <button
                      onClick={() => openModal(app)}
                      className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow duration-200"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && selectedApp && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedApp.title}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={selectedApp.image}
                      alt={selectedApp.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        Company
                      </h4>
                      <p className="text-gray-600">{selectedApp.companyName}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        Rating
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">⭐</span>
                        <span className="text-xl font-bold">
                          {selectedApp.ratingAvg}
                        </span>
                        <span className="text-gray-600">
                          ({selectedApp.reviews.toLocaleString()} reviews)
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        Downloads
                      </h4>
                      <p className="text-gray-600">
                        {selectedApp.downloads.toLocaleString()}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        Size
                      </h4>
                      <p className="text-gray-600">{selectedApp.size} MB</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Description
                  </h4>
                  <div className="text-gray-700 whitespace-pre-line">
                    {selectedApp.description}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Rating Breakdown
                  </h4>
                  <div className="grid grid-cols-5 gap-4">
                    {selectedApp.ratings.map((rating) => (
                      <div key={rating.name} className="text-center">
                        <div className="text-sm font-medium text-gray-900">
                          {rating.name}
                        </div>
                        <div className="text-lg font-bold text-[#632EE3]">
                          {rating.count}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={closeModal}
                    className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Items;
