import React from 'react'
import Home from '../containers/Home'
import Header from '../containers/Header'
import TopProducts from '../containers/TopProducts'
import WhyChooswUS from '../containers/WhyChooswUS'
import Crazydeals from '../containers/Crazydeals'
import Footer from '../containers/Footer'
import FooterBotton from '../containers/FooterBotton'
import bannerImage2 from '../assets/bannerImage2.webp'

const HomeMain = () => {
  return (
    <div>
    <Header/>
    <Home
    title={"Nourish the Glow"}
    description={"Discover the beauty within with Bea You, Be Beautiful You. It means you can wear the less makeup and let skin shine through."}
    Sbutton={"Shop now"}
    Ebutton={"Explore"}
    Scss={"bg-yellow-500 rounded-full text-black py-3 px-5 text-lg font-bold mr-4 group-empty:hidden"}
    Ecss={"rounded-full text-white py-3 px-5 text-lg font-bold outline opacity-75 "}
    bannerImg={bannerImage2}
    />
    <TopProducts/>
    <WhyChooswUS/>
    <Crazydeals/>
    <Footer/>
    <FooterBotton/>
    </div>
  )
}

export default HomeMain