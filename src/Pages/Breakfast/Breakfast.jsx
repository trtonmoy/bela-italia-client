import React from "react";

const Breakfast = ({ food }) => {
  const { img } = food;
  return (
    <div className="p-2">
      <img
        className="w-full rounded-md h-56 m-0 "
        src={img}
        alt="breakfast food image"
      />
    </div>
  );
};

export default Breakfast;
