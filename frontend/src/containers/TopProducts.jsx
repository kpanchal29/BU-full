import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import products from "../components/products";

function TopProducts() {
  return (
    <div className=" bg-magic2 grid grid-cols-1 lg:grid-cols-main2 px-3 py-28 sm:px-24 items-center gap-2 w-screen">
      <div className="flex flex-wrap flex-col gap-4 col-span-1">
        <h2 className="font-bold text-2xl mb-2">It's a SKIN-VESTMENT</h2>
        <p className="text-gray mb-6 font-normal ">
          At 'Bea You,' our mission transcends conventional beauty standards.
          Our goal is to foster a community where every skin journey is
          celebrated, recognizing that beauty is diverse and personal. 'Bea You'
          is not just a skincare brand, it's a commitment to authenticity,
          self-love, and the belief that everyone deserves to feel confident in
          their unique skin.
        </p>
        <button className=" outline bg-black text-white rounded-full sm:py-2 sm:px-4 px-4 py-1.5  ">
          <Link to="/shop">Explore</Link>
        </button>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
        {products.productData.map((item, index) => {
          return (
            <Card
              imgsrc={item.imgsrc}
              title={item.title}
              offprice={item.offprice}
              price={item.price}
              discount={item.discount}
              item={item}
              key={index}
            />
          );
        })}
       
      </div>
    </div>
  );
}

export default TopProducts;
