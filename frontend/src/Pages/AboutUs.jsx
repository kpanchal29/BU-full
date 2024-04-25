import React from 'react'
import Header from '../containers/Header'
import Home from '../containers/Home'
import InsideAboutUs from '../Insidepages/InsideAboutUs'
import Footer from '../containers/Footer'
import FooterBotton from '../containers/FooterBotton'
import WhyChooswUS from '../containers/WhyChooswUS'
import bannerImage2 from '../assets/bannerImage2.webp'

const AboutUs = () => {
  return (
    <div>
        <Header/>
        <Home
        title={"About Us"}
        description={"Discover the beauty within with Bea You, Be Beautiful You. It means you can wear the less makeup and let skin shine through."}
        Ebutton={"Explore"}
        Ecss={"rounded-full text-white py-3 px-5 text-lg font-bold outline opacity-75"}
        bannerImg={bannerImage2}
        />
        <InsideAboutUs
        title="Welcome at Bea You!"
        description="Bea You, where beauty meets innovation!Our passion is to enhance your natural radiance and empower you to embrace your unique beauty. As a leading name in the beauty industry, we take pride in offering a curated selection of premium skincare and beauty products that cater to your individual needs."
        description1="We meticulously source ingredients from around the globe, selecting only the finest botanicals, antioxidants, and cutting-edge formulations to create products that deliver visible results. Our products are cruelty-free, environmentally conscious, and free from harmful additives, ensuring that you can indulge in self-care with a clear conscience."
        description2="We are dedicated to promoting confidence and self-love, inspiring you to embrace your unique features and express your individual style. Join us on a journey of beauty discovery, where each product is designed to enhance your natural glow and bring out the best version of you."
        description3="Thank you for choosing Bea You as your trusted partner in beauty - where every product tells a story of radiance, confidence, and self-love."
        />
        <WhyChooswUS/>
        <Footer/>
        <FooterBotton/>
    </div>
  )
}

export default AboutUs