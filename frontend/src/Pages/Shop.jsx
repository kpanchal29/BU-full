import React from 'react'
import Header from '../containers/Header'
import Home from '../containers/Home'
import TopProducts from '../containers/TopProducts'
import Footer from '../containers/Footer'
import FooterBotton from '../containers/FooterBotton'
import Card from '../components/Card'
import InsideShop from '../Insidepages/InsideShop'
import  bannerImage2 from "../assets/bannerImage2.webp";

const Shop = () => {
  return (
    <div>
        <Header/>
        <Home
        title={"Shop"}
        description={"Discover the beauty within with Bea You, Be Beautiful You. It means you can wear the less makeup and let skin shine through."}
        bannerImg={bannerImage2}
        />
        <InsideShop/>
        <Footer/>
        <FooterBotton/>
    </div>
  )
}

export default Shop