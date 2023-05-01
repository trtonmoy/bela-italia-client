import React from "react";

const Footer = () => {
  return (
    <section className="px-20 py-16 bg-purple-950 relative">
      <section className="text-white gap-2 grid grid-cols-1 lg:grid-cols-5 lg:mb-8">
        <div>
          <h2 className="font-extrabold tracking-wide text-xl pb-1">
            Elite Employment
          </h2>
          <p className="font-semibold text-lg pb-1">About Us</p>
          <p className="font-semibold text-lg pb-1">Latest News</p>
          <p className="font-semibold text-lg pb-1">Work</p>
          <img
            className="w-40 h-20 text-white"
            src="https://cdn.pixabay.com/photo/2021/02/08/15/44/social-media-5995266_1280.png"
            alt="Social Icon"
          />
        </div>
        <div>
          <h2 className="font-bold tracking-wide text-xl pb-1">Company</h2>
          <p className="font-semibold text-lg pb-1">About Us</p>
          <p className="font-semibold text-lg pb-1">Latest News</p>
          <p className="font-semibold text-lg pb-1">Work</p>
          <img
            className="w-40 h-20 text-white"
            src="https://cdn.pixabay.com/photo/2021/02/08/15/44/social-media-5995266_1280.png"
            alt="Social Icon"
          />
        </div>
        <div>
          <h2 className="font-bold tracking-wide text-xl pb-1">Support</h2>
          <p className="font-semibold text-lg pb-1">About Us</p>
          <p className="font-semibold text-lg pb-1">Latest News</p>
          <p className="font-semibold text-lg pb-1">Work</p>
          <img
            className="w-40 h-20 text-white"
            src="https://cdn.pixabay.com/photo/2021/02/08/15/44/social-media-5995266_1280.png"
            alt="Social Icon"
          />
        </div>
        <div>
          <h2 className="font-bold tracking-wide text-xl pb-1">Product</h2>
          <p className="font-semibold text-lg pb-1">About Us</p>
          <p className="font-semibold text-lg pb-1">Latest News</p>
          <p className="font-semibold text-lg pb-1">Work</p>
          <img
            className="w-40 h-20 text-white"
            src="https://cdn.pixabay.com/photo/2021/02/08/15/44/social-media-5995266_1280.png"
            alt="Social Icon"
          />
        </div>
        <div>
          <h2 className="font-bold tracking-wide text-xl pb-1">Contact</h2>
          <p className="font-semibold text-lg pb-1">About Us</p>
          <p className="font-semibold text-lg pb-1">Latest News</p>
          <p className="font-semibold text-lg pb-1">Work</p>
          <img
            className="w-40 h-20 text-white"
            src="https://cdn.pixabay.com/photo/2021/02/08/15/44/social-media-5995266_1280.png"
            alt="Social Icon"
          />
        </div>
      </section>
      <hr />
      <div className="lg:flex lg:justify-between items-center mt-12 mb-16 text-white">
        <p className="font-semibold font-mono text-lg pb-1">
          @2023 Elite Employment. All Rights Reserved
        </p>
        <p className="font-semibold font-serif text-lg pb-1">
          Powered by Elite Employment
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-slate-950 opacity-30"></div>
    </section>
  );
};

export default Footer;
