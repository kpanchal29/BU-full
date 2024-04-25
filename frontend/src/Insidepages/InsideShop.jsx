import React from 'react'
import Card from '../components/Card'
import products from "../components/products";

const InsideShop = () => {
  return (
    <div className="bg-magic2 grid grid-cols-1 lg:grid-cols-4 px-3 py-28 sm:px-24 items-center gap-7 w-screen">
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
  )
}

export default InsideShop