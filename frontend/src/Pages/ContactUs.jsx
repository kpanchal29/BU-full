import React from 'react'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import FooterBotton from '../containers/FooterBotton'
import Home from '../containers/Home'
import InsideContactUs from '../Insidepages/InsideContactUs'
import bannerImage2 from '../assets/bannerImage2.webp'
const ContactUs = () => {
  return (
    <div>
        <Header/>
        <Home
        title="Contact Us"
        description="Discover the beauty within with Bea You, Be Beautiful You. It means you can wear the less makeup and let skin shine through."
        Ebutton={"Explore"}
        Ecss={"rounded-full text-white py-3 px-5 text-lg font-bold outline opacity-75 "}
        bannerImg={bannerImage2}
        />
        <InsideContactUs/>
        <Footer/>
        <FooterBotton/>
    </div>
  )
}

export default ContactUs