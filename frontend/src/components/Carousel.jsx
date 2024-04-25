import React from 'react'
import Mycard from './Mycard'

const Carousel = () => {
  return (
    <div className='flex bg-magic2 px-3 py-28 sm:px-24 flex-col gap-4 items-center justify-center w-screen'>
      <div><p className="text-3xl">Testimonials</p></div>
      {/* <button className=''><p>&lt;</p></button>
      <button><p>&gt;</p></button> */}

      <div className='flex gap-4 relative'>
        <Mycard
        description ='"Bea You products transformed my skincare routine! The results are incredible, and I feel more confident than ever. The luxurious textures and natural ingredients make every application a pampering experience. Thank you, Bea You, for bringing out the best in my beauty routine!"'
        name = "Nishita"
        occupation = "Customer"

        />
        <Mycard
        description = '"Absolutely obsessed with Bea You cosmetics! The attention to detail and quality is unmatched. My skin has never looked and felt better. The packaging is not only stunning but also eco-friendly. Bea You has truly elevated my beauty regimen. Highly recommended!"'
        name = "Ritesh Nehwal"
        occupation = "Customer"

        />
        <Mycard
        description = '"Bea You s range is a game-changer! The vibrant colors and long-lasting formulas exceeded my expectations. My makeup routine has never been this fun and flawless. Bea You understands beauty in every shade. A must-have for anyone who wants to express their true self through makeup!"'
        name = "Shakshi Sharma"
        occupation = "Executive Manager"

        />

      </div>
    </div>
  )
}

export default Carousel