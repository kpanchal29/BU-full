import React from "react";
import { Link } from "react-router-dom";
import  bannerImage2 from "../assets/bannerImage2.webp";

function Home({ title, description, Sbutton, Ebutton, Scss, Ecss, bannerImg}) {
  return (
    <div className="bg-magic  text-white grid md:grid-cols-main grid-rows-none gap-5 sm:items-center justify-center grid-cols-1 px-3 py-28 sm:px-24 w-screen">
      <div>
        <div className="flex flex-col">
          <h1 className=" font-bold sm:text-5xl text-3xl mb-8">{title}</h1>
          <p className="font-bold text-lg opacity-80 mb-8">{description}</p>
        </div>
        <div className="sm:flex">
          <button className={Scss}>
            <Link to="/shop"> {Sbutton}</Link>
          </button>
          <button className={Ecss}>
          <Link to="/aboutUs">{Ebutton}</Link>
          </button>
        </div>
      </div>
      <div className="">
        <img 
        src={bannerImg}
        />
      </div>
    </div>
  );
}

export default Home;
