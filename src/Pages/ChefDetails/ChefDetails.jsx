import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ChefOwn from "../ChefOwn/ChefOwn";
import ChefRecipes from "../ChefRecipes/ChefRecipes";

const ChefDetails = () => {
  const chef = useLoaderData();

  const { details } = chef;
  console.log(chef, details);
  // console.log(chef.details);

  return (
    <section className="lg:flex lg:justify-evenly gap-6 lg:items-center">
      <div>
        <ChefOwn chef={chef}></ChefOwn>
      </div>

      <div className="lg:grid lg:grid-cols-2 gap-5 my-8">
        {details.map((item, id) => (
          <ChefRecipes key={item.id} recipes={item}></ChefRecipes>
        ))}
      </div>
    </section>
  );
};

export default ChefDetails;
