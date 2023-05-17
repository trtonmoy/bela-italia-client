import React, { useEffect } from "react";

const Dinner = ({ food }) => {
  return (
    <div className="p-2">
      <img
        className="w-full rounded-md h-56 m-0 "
        src={food.img}
        alt="favorite foods image"
      />
    </div>
  );
};

export default Dinner;
