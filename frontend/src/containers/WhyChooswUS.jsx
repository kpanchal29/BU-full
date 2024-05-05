import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import DescCards from '../components/DescCards';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SportsVolleyballOutlinedIcon from '@mui/icons-material/SportsVolleyballOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';

function WhyChooswUS() {
  return (
    <div className="grid sm:grid-cols-2 gap-16 bg-magic2 px-3 py-28 sm:px-24 grid-cols-1 overflow-x-hidden">
        <div className="col-span-1">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold mb-2">We take skincare seriously</h1>
                <p className="opacity-70 mb-2">As said "Glowing skin is always in". So we believe in empowering individuals to embrace their authentic selves through skincare that goes beyond the surface. We strive to create products that cater to individual needs, embracing the beauty of differences. Join us in the journey to discover, enhance, and truly 'Bea You'.</p>
            </div>
            <div className="grid sm:grid-cols-2 mt-6 gap-3  grid-cols-1">
               <DescCards
                icon={<LocalShippingOutlinedIcon/>}
                title="Premium Quality Ingredients" 
                description="At Bea You, we prioritize the use of premium and carefully curated ingredients in our beauty products. Our formulations are crafted with the finest botanical extracts, antioxidants, and cutting-edge skincare..."              
               />
               <DescCards
                icon={<ShoppingBagOutlinedIcon/>}
                title="For Every Skin Type" 
                description="We understand that each person's skin is unique. That's why our product range is designed to cater to various skin types, tones, and concerns. Whether you have sensitive skin, oily complexion, or specific skincare needs, our solutions is to address your individual bea..."              
               />
               <DescCards
                icon={<SportsVolleyballOutlinedIcon/>}
                title="Cruelty-Free and Environmentally Conscious" 
                description="We are committed to ethical beauty practices. All our products are cruelty-free, meaning they are not tested on animals. Additionally, we prioritize environmentally conscious packaging and sustainable practices to..."              
               />
               <DescCards
                icon={<RepeatOutlinedIcon />}
                title="Visible and Lasting Results" 
                description="Our products are formulated with a focus on delivering visible and long-lasting results. Whether you're seeking radiant skin, reduced signs of aging, or a flawless complexion, our beauty products are designed to meet..."              
               />

            </div>
        </div>
        <div className="flex items-center justify-center px-10 py-0">
            <img className=" rounded-2xl overflow-hidden" src="https://beayou.thespecialcharacter.com/_next/image?url=%2Fimages%2FwhyChooseUsImg.jpg&w=2048&q=75" alt="" />

        </div>

    </div>
  )
}

export default WhyChooswUS