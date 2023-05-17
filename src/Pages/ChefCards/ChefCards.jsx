import React from "react";
import { Link } from "react-router-dom";

const ChefCards = ({ props }) => {
  // console.log(props);
  const { id, name, chef_img, years_of_exp, numbers_of_rec, likes } = props;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={chef_img} alt="Chef-Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-blue-700 font-bold text-2xl ">
          {" "}
          {name}{" "}
        </h2>
        <p className="text-lg text-blue-500 font-semibold"> Likes: {likes} </p>
        <p className="text-xl font-medium text-amber-500">
          {" "}
          Recipes: {numbers_of_rec}{" "}
        </p>
        <p className="text-xl font-medium text-blue-400">
          {" "}
          Experience: {years_of_exp}{" "}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/${id}`}>
            <button className="btn btn-primary">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCards;
