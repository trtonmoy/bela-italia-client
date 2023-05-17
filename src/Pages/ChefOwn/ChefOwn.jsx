import React from "react";

const ChefOwn = ({chef}) => {

    const { id, chef_img, years_of_exp, likes, name } = chef;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={chef_img}
          alt="Chef-Image"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {name} </h2>
        <p> {years_of_exp} </p>
        <p> {likes} </p>
        <p> {id} </p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ChefOwn;
