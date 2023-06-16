import React from "react";
const ShoesItem = ({ title, subtext, img }) => {
  console.log(title);
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={img} alt={title} className="" />
      <h3 className="mt-2">{title}</h3>
      <p className="text-gray-600">{subtext}</p>
    </div>
  );
};

export default ShoesItem;
