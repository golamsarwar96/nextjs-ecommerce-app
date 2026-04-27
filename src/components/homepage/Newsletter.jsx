"use client";
import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log("Subscribed with email:", email);
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <div className="text-white text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-10 mt-16">
      <h1 className="text-4xl font-bold mt-7 mb-4">
        Stay Updated with Our Latest Apps
      </h1>
      <p className="text-lg mb-8">
        Subscribe to our newsletter and be the first to know about new releases,
        updates, and exclusive offers.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-white text-[#632EE3] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
