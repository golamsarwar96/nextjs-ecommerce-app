import React from "react";

const Testimonial = () => {
  return (
    <div className=" text-white text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-10">
      <h1 className="text-4xl font-bold mt-7">
        Trusted By Millions, Built For You.
      </h1>

      <div className="p-7 md:mt-6 mt-4 flex flex-col md:flex-row gap-16 md:gap-24 justify-center items-center">
        <div className="space-y-3">
          <p>Total Downloads</p>
          <h1 className="text-5xl font-extrabold">29.6M</h1>
          <p>21% More Than Last Month</p>
        </div>
        <div className="space-y-3">
          <p>Total Reviews</p>
          <h1 className="text-5xl font-extrabold">906K</h1>
          <p>46% more than last month</p>
        </div>
        <div className="space-y-3">
          <p>Active Apps</p>
          <h1 className="text-5xl font-extrabold">132+</h1>
          <p>31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
