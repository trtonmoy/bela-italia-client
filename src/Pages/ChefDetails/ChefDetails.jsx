import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ChefOwn from "../ChefOwn/ChefOwn";
import ChefRecipes from "../ChefRecipes/ChefRecipes";

const ChefDetails = () => {
  const chef = useLoaderData();
  // console.log(chef);

  return (
    <section className="lg:flex lg:justify-evenly lg:items-center">
      <div>
        <ChefOwn chef={chef}></ChefOwn>
      </div>

      <div>
        <ChefRecipes chef={chef}></ChefRecipes>
      </div>
    </section>
  );
};

export default ChefDetails;
