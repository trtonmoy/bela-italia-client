import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefRecipes = ({ recipes }) => {
  const { item_name, ingredients, cooking_process, ratings } = recipes;
  const [isDisabled, setDisabled] = useState(false);

  const notify = () => {
    toast.success(
      "Congratulazioni..!! You have added this food as your favorite dish!!!",
      {
        position: toast.POSITION.TOP_CENTER,
        className: "text-xl font-bold",
      }
    );
    setDisabled(true);
  };

  return (
    <section className="p-6 border border-red-500 rounded">
      <h3 className="text-xl mb-8 font-bold text-purple-500">
        {" "}
        Dish Name : {item_name}{" "}
      </h3>
      <div>
        <h3 className="text-xl my-4 font-bold text-amber-700">Ingredients: </h3>
        <ul>
          {ingredients.map((item, idx) => (
            <li className="text-lg text-slate-400 font-medium" key={idx}>
              {" "}
              - {item}{" "}
            </li>
          ))}
        </ul>
      </div>
      <h5 className="py-4 text-lg font-medium text-indigo-400">
        {" "}
        <span className="bg-lime-200 rounded p-2">Cooking Process</span> :{" "}
        {cooking_process}{" "}
      </h5>
      <h6 className=" mb-4 font-bold text-xl text-red-500 p-2 rounded">
        {" "}
        Rating : {ratings}{" "}
      </h6>
      <div className="my-btn">
        <button disabled={isDisabled} onClick={notify}>
          Add To Favorite
        </button>
        <ToastContainer></ToastContainer>
      </div>
    </section>
  );
};

export default ChefRecipes;
