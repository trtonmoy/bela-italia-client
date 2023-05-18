import React from "react";

const ChefOwn = ({ chef }) => {
  const { bio, numbers_of_rec, chef_img, years_of_exp, likes, name } = chef;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={chef_img} alt="Chef-Image" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-2xl font-bold text-purple-800"> {name} </h2>
        <p className="text-lg text-blue-500 font-semibold "> Bio : {bio} </p>
        <p className="text-lg font-semibold text-slate-500 ">
          {" "}
          Likes : {likes}{" "}
        </p>
        <p className="text-lg font-medium text-slate-500">
          {" "}
          Number of recipes : {numbers_of_rec}{" "}
        </p>
        <p className="text-xl font-medium text-slate-500">
          {" "}
          Experience : {years_of_exp}{" "}
        </p>
      </div>
    </div>
  );
};

export default ChefOwn;
