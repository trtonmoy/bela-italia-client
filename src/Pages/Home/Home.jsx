import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefCards from "../ChefCards/ChefCards";

const Home = () => {
  const data = useLoaderData();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
      {data.map((item) => (
        <ChefCards key={item.id} props={item}></ChefCards>
      ))}
    </div>
  );
};

export default Home;
