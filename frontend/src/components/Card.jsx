import React from 'react';
import Add from '@mui/icons-material/Add';
import CartDrawer from '../components/CartDrawer';
import { useCart } from 'react-use-cart';


const Card = (props) => {
  const { addItem } = useCart();
  // const { addToCart } = CartDrawer();

  // const handleAddToCart = () => {
  //   addToCart({ name: title, price: offprice });
  // };

  return (
    <div>
      <div className="">
        <div className="absolute top-2 right-2 z-10"></div>
        <a className="h-full w-full block mb-4 ">
          <img className=" overflow-hidden rounded-2xl " src={props.imgsrc} alt="" />
        </a>
      </div>
      <div className="flex justify-center items-center flex-col gap-2 font-bold relative">
        <h3>{props.title}</h3>
        <p className="text-m22 text-2xl flex gap-2">₹{props.price}</p>
        <p className="flex gap-2">
          <span className="line-through">{props.symbol}{props.offprice}</span>
          <span className=" font-semibold">{props.discount}</span>
        </p>
      </div>
      <div className="flex items-center justify-center mt-2 relative">
        <button
          className=" bg-black rounded-full text-white px-2 py-1.5 opacity-90 hover:-translate-y-2 hover:transition"
          onClick={() => addItem(props.item)}
        >
          <Add />
        </button>
      </div>
    </div>
  );
};

export default Card;