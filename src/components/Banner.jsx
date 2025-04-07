import React from "react";
import bannerImage from "../assets/images/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="flex flex-col gap-10 items-start ml-15">
          <h1 className="text-5xl font-bold text-start">
            Books to freshen up your bookshelf
          </h1>
          <div>
            <button className="btn bg-green-500">View The List</button>
          </div>
        </div>
        <img src={bannerImage} className="max-w-sm rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

export default Banner;
