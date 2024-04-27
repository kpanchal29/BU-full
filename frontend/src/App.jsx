import { useState } from 'react'
import HomeMain from './Pages/HomeMain'
import { Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermsAndConditions from './Pages/TermsAndConditions'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CartProvider } from 'react-use-cart'
import CheckoutForm from './Pages/CheckoutForm'
import Payment from './Pages/Payment'




function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CartProvider>

    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<HomeMain/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/aboutUs" element={<AboutUs/>}/>
      <Route path="/contactUs" element={<ContactUs/>}/>
      <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
      <Route path="/t&c" element={<TermsAndConditions/>}/>
      <Route path="/checkout" element={<CheckoutForm/>}/>
      <Route path="/payment" element={<Payment/>}/>
     

      
    </Routes>
    </CartProvider>

    </>
  )
}

export default App
