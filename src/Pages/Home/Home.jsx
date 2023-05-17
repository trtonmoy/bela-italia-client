import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefCards from "../ChefCards/ChefCards";
import Breakfast from "../Breakfast/Breakfast";
import Dinner from "../Dinner/Dinner";
import map from "../../../public/Screenshot (100).png";

const Home = () => {
  const [breakfast, setBreakfast] = useState([]);
  const [dinner, setDinner] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/breakfast")
      .then((res) => res.json())
      .then((data) => setBreakfast(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/dinner")
      .then((res) => res.json())
      .then((data) => setDinner(data));
  }, []);

  const data = useLoaderData();
  // console.log(data);
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-8">
        {data.map((item) => (
          <ChefCards key={item.id} props={item}></ChefCards>
        ))}
      </div>

      {/* Breakfast Items */}
      <h1 className="text-3xl text-red-600 font-bold text-center pt-4 tracking-wide">
        Breakfast Items of Bella Italia
      </h1>
      <div className="lg:grid lg:grid-cols-3 gap-4 my-8">
        {breakfast.map((item) => (
          <Breakfast key={item.id} food={item}></Breakfast>
        ))}
      </div>

      {/* Dinner Items */}
      <h1 className="text-3xl text-red-600 font-bold text-center pt-4 tracking-wide">
        Most favorite Dishes of Bella Italia
      </h1>
      <div className="lg:grid lg:grid-cols-3 gap-4 my-8">
        {dinner.map((item) => (
          <Dinner key={item.id} food={item}></Dinner>
        ))}
      </div>

      <h1 className="text-3xl text-red-600 font-bold text-center pt-4 tracking-wide">
        Branches of Bella Italia
      </h1>
      <div className="my-8 lg:relative">
        <div>
          <img src={map} alt="" />
        </div>
        <div className="lg:absolute right-14 bottom-6 p-20 bg-blue-500 lg:grid lg:grid-cols-4 gap-5">
          <div className="p-4 bg-white rounded">
            <h2 className="text-red-600 my-2 font-bold text-2xl tracking-wide">
              Branch - 1
            </h2>
            <p className="text-blue-500 my-2 font-semibold text-xl ">
              Location : Latina{" "}
            </p>
            <p className="text-lime-600 my-2 font-medium text-lg">
              Opening Time : 10:00 AM
            </p>
            <p className="text-red-600 my-2 font-medium text-lg">
              Closing Time : 10:00 PM
            </p>
          </div>
          <div className="p-4 bg-white rounded">
            <h2 className="text-red-600 my-2 font-bold text-2xl tracking-wide">
              Branch - 1
            </h2>
            <p className="text-blue-500 my-2 font-semibold text-xl ">
              Location : Bari{" "}
            </p>
            <p className="text-lime-600 font-medium text-lg">
              Opening Time : 10:00 AM
            </p>
            <p className="text-red-600 my-2 font-medium text-lg">
              Closing Time : 10:00 PM
            </p>
          </div>
          <div className="p-4 bg-white rounded">
            <h2 className="text-red-600 my-2 font-bold text-2xl tracking-wide">
              Branch - 1
            </h2>
            <p className="text-blue-500 my-2 font-semibold text-xl ">
              Location : Terni{" "}
            </p>
            <p className="text-lime-600 my-2 font-medium text-lg">
              Opening Time : 10:00 AM
            </p>
            <p className="text-red-600 my-2 font-medium text-lg">
              Closing Time : 10:00 PM
            </p>
          </div>
          <div className="p-4 bg-white rounded">
            <h2 className="text-red-600 my-2 font-bold text-2xl tracking-wide">
              Branch - 1
            </h2>
            <p className="text-blue-500 my-2 font-semibold text-xl ">
              Location : Florence{" "}
            </p>
            <p className="text-lime-600 my-2 font-medium text-lg">
              Opening Time : 10:00 AM
            </p>
            <p className="text-red-600 my-2 font-medium text-lg">
              Closing Time : 10:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
