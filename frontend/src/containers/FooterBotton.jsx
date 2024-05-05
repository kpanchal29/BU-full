import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Link } from 'react-router-dom';

const FooterBotton = () => {
  return (
    <div className="px-3 pb-28 sm:px-24 flex flex-col gap-4 overflow-x-hidden">
        <h2 className="text-m22 text-4xl font-semibold">Bea You.</h2>
        <div className="sm:flex gap-6 flex-wrap"> 
            <div className=" font-semibold text-m33">
                <p>Discover the beauty within with Bea You, Be Beautiful You. It means you can wear the less makeup and let skin shine through.</p>
                <div className="flex gap-3"> 
                    <FacebookOutlinedIcon color='#6A6A6A' fontSize='large'/>
                </div>
            </div>
            <div className="flex gap-16 font-semibold text-m33 text-2xl flex-wrap">
                <p className="hover:opacity-70">
                <Link to="/shop">Shop</Link>
                </p>
                <p className="hover:opacity-70">
                <Link to="/contactus">Support</Link>
                </p>
                <p className="hover:opacity-70">
                <Link to="/aboutus">About us</Link>
                </p>
                <p className="hover:opacity-70">
                <Link to="/privacypolicy">Privacy policy</Link></p>
                <p className="hover:opacity-70">
                <Link to="/contactus">Contact us</Link>
                </p>
                <p className="hover:opacity-70">
                <Link to="/t&c">Terms & Conditions</Link>
                </p>

            </div>
        </div>
        
    </div>
  )
}

export default FooterBotton