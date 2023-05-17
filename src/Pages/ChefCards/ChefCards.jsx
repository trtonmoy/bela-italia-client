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
        <h2 className="card-title"> {name} </h2>
        <p> Likes: {likes} </p>
        <p> Recipes: {numbers_of_rec} </p>
        <p> Experience: {years_of_exp} </p>
        <p> ID: {id} </p>
        <div className="card-actions justify-end">
          <Link to={`/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCards;
