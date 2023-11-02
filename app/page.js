/* eslint-disable */
'use client'
import { useEffect, useRef } from 'react';
import { Footer, NewNavbar } from '../components';
import { Gallery, Hero,World } from '../sections';
import '../styles/contact.css';
import Link from 'next/link';

const Page = () => {
  let popupOverlayRef=useRef(null)
let popupContainerRef=useRef(null)
useEffect(()=>{
openPopup()
},[])

function openPopup() {
  popupOverlayRef.current.style.display = "flex";
  setTimeout(() => {
    popupContainerRef.current.style.opacity = "1";
    popupContainerRef.current.style.transform = "scale(1)";
  }, 100);
}
function closePopup() {
  popupContainerRef.current.style.opacity = "0";
  popupContainerRef.current.style.transform = "scale(0.8)";
  setTimeout(() => {
    popupOverlayRef.current.style.display = "none";
  }, 300);
}

  return(
  <div className="bg-black min-h-[100vh]">
     
    <NewNavbar />
    <Hero />
     {/* <Gallery/> */}
     <img className=' md:block hidden right-[0] top-[70%]  fixed  ' src='/fish.png' />
 <World/>
 <Footer />
 <div className='hidden md:block'>
 <div ref={popupOverlayRef} class="popup-overlay ">
    <div ref={popupContainerRef}  class="popup-container_main">
      <div class="popup-card_main mt-6">
    
       <Link href='/countdown.html'> <img  src='/popup_desktop.jpg' className='hidden md:block' alt='img'/></Link>

       <button onClick={()=>{closePopup()}}  className='hidden md:block' id="close-popup_main" >X </button>
      </div>
      {/* <div class="popup-card_main_mob md:hidden mt-6">
    
    <Link href='/countdown.html'> <img  src='/popup_mob.jpg' className=' object-none' alt='img'/></Link>

    <button onClick={()=>{closePopup()}} id="close-popup_main" >X</button>
   </div> */}
    </div>
  </div>
  </div>
  </div>
);
  }
export default Page;
