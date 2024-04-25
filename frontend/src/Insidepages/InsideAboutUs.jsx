import React from "react";

const InsideAboutUs = ({title, description, description1, description2, description3}) => {
  return (
    <div className="bg-magic2 px-3 py-28 sm:px-24 flex flex-col gap-5 font-semibold">
      <h1 className="text-4xl">{title}</h1>
      <p className=" opacity-60">
       {description}
      </p>
      <p className=" opacity-60">
       {description1}
      </p>
      <p className=" opacity-60">
       {description2}
      </p>
      <p className=" opacity-60">
        {description3}
      </p>
    </div>
  );
};

export default InsideAboutUs;
