import React from "react";
import image1 from "../assets/image1.jpeg"



const Crazydeals = () => {
  return (
    <div className=" bg-magic2 px-3 py-28 sm:px-24 flex gap-10 flex-col  overflow-x-hidden">
      <div>
        <h1 className="font-semibold text-5xl flex justify-center">
          Crazy Deals
        </h1>
      </div>
      <div className="md:flex gap-16 ">
        <p className="flex text-center text-xl">
          <span>
            <img
              className="overflow-hidden rounded-2xl"
              src="https://beayou.thespecialcharacter.com/_next/image?url=https%3A%2F%2Fbeayou.s3.ap-south-1.amazonaws.com%2F10-off-1707412648873.webp&w=1200&q=75"
              alt=""
              height={320}
              width={320}
            />
            Flat 10%
          </span>
        </p>
        <p className="flex text-center text-xl ">
          <span>
            <img
              className="overflow-hidden rounded-2xl"
              src={image1}
              alt=""
              height={400}
              width={400}
            />
            Flat 20%
          </span>
        </p>
      </div>
    </div>
  );
};

export default Crazydeals;
