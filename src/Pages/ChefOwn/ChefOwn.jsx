import React from "react";

const ChefOwn = ({ chef }) => {
  const { bio, numbers_of_rec, chef_img, years_of_exp, likes, name } = chef;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={chef_img} alt="Chef-Image" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {name} </h2>
        <p> Bio : {bio} </p>
        <p> Likes : {likes} </p>
        <p> Number of recipes : {numbers_of_rec} </p>
        <p> Experience : {years_of_exp} </p>
        
      </div>
    </div>
  );
};

export default ChefOwn;
