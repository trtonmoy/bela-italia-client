import React from "react";
import { useRouteError, Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import photo from "../../../public/killer-404-page-taco-bell-5f3d61ae30a8a.png";

const Error = () => {
  const { error, status } = useRouteError();

  return (
    <section className="relative">
      <div className="lg:flex lg:justify-center lg:items-center mt-6">
        <img src={photo} alt="" />
      </div>
      <span className="absolute right-[27%] bottom-24">
        <Link
          to="/"
          className="bg-purple-800 px-40 py-5 rounded text-white font-bold text-xl hover:bg-purple-700"
        >
          Back to Homepage
        </Link>
      </span>
    </section>
  );
};

export default Error;
