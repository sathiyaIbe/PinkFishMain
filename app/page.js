/* eslint-disable */
'use client'
import { useEffect, useRef } from 'react';
import { Footer, NewNavbar } from '../components';
import {  Hero,World } from '../sections';
import '../styles/contact.css';
import {CldImage} from "next-cloudinary";

const Page = () => {
  let popupOverlayRef=useRef(null)
let popupContainerRef=useRef(null)
let popupOverlayRefMob=useRef(null)
let popupContainerRefMob=useRef(null)
useEffect(()=>{
openPopup()
},[])

function openPopup() {
  popupOverlayRef.current.style.display = "flex";
  popupOverlayRefMob.current.style.display = "flex";

  setTimeout(() => {
    popupContainerRef.current.style.opacity = "1";
    popupContainerRefMob.current.style.opacity = "1";
    popupContainerRefMob.current.style.transform = "scale(1)";
    popupContainerRef.current.style.transform = "scale(1)";
  }, 0.1);
}
function closePopup() {
  popupContainerRef.current.style.opacity = "0";
  popupContainerRefMob.current.style.opacity = "0";
  popupContainerRef.current.style.transform = "scale(0.8)";
  popupContainerRefMob.current.style.transform = "scale(0.8)";

  setTimeout(() => {
    popupOverlayRef.current.style.display = "none";
    popupOverlayRefMob.current.style.display = "none";
  }, 1000);
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
    <div ref={popupContainerRef}  class="popup-container_main flex flex-col">
      <div class="popup-card_main self-center w-[80%] flex mt-6">
       <a href='/music&artsfestival'> <img  src='popup_desktop_new.png' className='' alt='img'/></a>
       {/* <img onClick={()=>{closePopup()}} id="close-popup_main" src='close_icon.svg' alt="close" /> */}
       <img onClick={()=>{closePopup()}} className='w-[30px] h-[30px] p-2 bg-[#F33288] rounded cursor-pointer'  src='close.png' alt="close" />

       {/* <button }  className='' id="close-popup_mai" ><img src='close_icon.svg' alt="close" /> </button> */}
      </div>
      {/* <div class="popup-card_main_mob md:hidden mt-6">
    
    <Link href='/countdown.html'> <img  src='/popup_mob.jpg' className=' object-none' alt='img'/></Link>

    <button onClick={()=>{closePopup()}} id="close-popup_main" >X</button>
   </div> */}
    </div>
  </div>
  </div>

  <div className=' md:hidden'>
 <div ref={popupOverlayRefMob} class="popup-overlay ">
    <div ref={popupContainerRefMob}  class="popup-container_main w-[90%] flex flex-col gap-3">
     <div className='flex justify-end  '>
    {/* <button onClick={()=>{closePopup()}}  className='' id="close-popup_main" >X </button> */}
    
    <img onClick={()=>{closePopup()}} className='w-[40px] p-3 bg-[#F33288] rounded cursor-pointer'  src='close.png' alt="close" />
    
    </div>
      <div class="popup-card_main  ">
    
       <a href='/music&artsfestival'> <img  src='popup_mob_new.png' className='object-cover' alt='img'/></a>

      </div>
     
    </div>
  </div>
  </div>
  </div>
);
  }
export default Page;
