/* eslint-disable */
'use client'
import '../../styles/contact.css';
import {  motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer, textContainer, textVariant, textVariant2 } from "../../utils/motion";
import { Footer, NewNavbar } from '../../components';
import { useRef, useState } from 'react';
import { createTransport } from 'nodemailer';
const Contact = () => {
let popupOverlayRef=useRef(null)
let popupContainerRef=useRef(null)
let closePopupButtonRef=useRef(null)


//   const popupOverlay = document.querySelector(".popup-overlay");
// const popupContainer = document.querySelector(".popup-container");
// const closePopupButton = document.getElementById("close-popup");

function openPopup(e) {
  e.preventDefault()
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

function formSubmit(e){
e.preventDefault()
// Email.send({
//   Host : "smtp.gmail.com",
//   Username : "sathiyaibe@gmail.com",
//   Password : "Password07@#",
//   To : 'sathiyibe@gmail.com',
//   From : "sathiyasanka0107@gmail.com",
//   Subject : "This is the subject",
//   Body : "And this is the body"
// }).then(
//   message => alert(message)
// );
openPopup()
}

// Automatically open the popup when the page loads
//window.addEventListener("load", openPopup);

// closePopupButton.addEventListener("click", closePopup);

  return(
    <>
    <NewNavbar />
  <div className="contact_main_container min-h-screen  text-white   ">
     {/* <div className='flex flex-col gap-6  pb-11 pt-6 header_container_aboutus border-b-[1px] border-white w-full '>
              
              <motion.h1
               variants={textVariant2}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
              
              className='about_us_main_header'>join the party</motion.h1>
          </div> */}
          <div className='hidden md:block'>
          <div className='flex flex-col gap-6 pt-11 pb-24 '>
            <h1 className='contact_text_header self-center'>contact us</h1>
            <h1 className='contact_sub_text self-center'>Get in touch with us now for any inquiries and issues! Sit tight as we get back to you.</h1>
          </div>
          </div>
          <div className='flex flex-col'>
    <div className="  flex flex-col md:flex-row bg-contact pb-6 pt-11 md:w-[70%] w-[100%]  self-center">
      <div className="md:basis-2/5  flex justify-center ">
        <div className='md:w-[60%] w-[80%] gap-3 flex flex-col justify-center'>
        <h1 className="contact_header hidden md:block">reach out to us</h1>
        <h1 className='contact_text_header_mob md:hidden '>contact us</h1>
            <h1 className='contact_sub_text_mob self-center md:hidden'>Get in touch with us now for any inquiries and issues! Sit tight as we get back to you.</h1>
        
        <div className="flex flex-row  md:gap-3 gap-4 mt-6 ">

       
<a   href='mailto:info@pinkfishfestival.com'> 
<img className=" md:w-8  " src='/email_contact.svg' /></a>



<a href='https://www.instagram.com/pinkfishfestival/' target="_blank" className='flex gap-2 items-center'>
        <img className="md:w-6 " src='/ig_contact.svg' />

</a>


<a href='https://www.youtube.com/@Pinkfishfestival' target="_blank" className='flex gap-2 items-center'>

        <img className="md:w-6 w-8" src='/yt_contact.svg' />

</a>


<a href='https://www.facebook.com/pinkfishfestival/' target="_blank" className='flex gap-2 items-center'>

        <img className="md:w-6 w-8" src='/fb_contact.svg' />

</a>


<a href=' https://www.tiktok.com/@pinkfishfestival' target="_blank" className='flex gap-2 items-center'>
        <img className="md:w-6 w-8" src='/tt_contact.svg' />

</a>

        </div>
        </div>
      </div>

      <div className="flex flex-col w-[90%]  md:w-[100%] mt-11 md:mt-0 ">
        <form onSubmit={(e)=> formSubmit(e)} className="flex flex-col  self-center   gap-8">
          <div className='flex md:flex-row  flex-col gap-6'>
          <div className="flex flex-col md:w-[50%] ">
            <label className="contact_label">First Name</label>
            <input className="contact_input" type="text" />
          </div>
          <div className="flex flex-col md:w-[50%]">
            <label className="contact_label">Last Name</label>
            <input className="contact_input" type="text" />
          </div>
          </div>
          <div className='flex md:flex-row flex-col gap-6'>
          <div className="flex flex-col md:w-[50%] ">
            <label className="contact_label">Email</label>
            <input className="contact_input" type="text" />
          </div>
          <div className="flex flex-col md:w-[50%]">
            <label className="contact_label">Phone Number</label>
            <input className="contact_input" type="text" />
          </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="contact_label">Select Subject?</label>
           
<div class="flex md:flex-row flex-col gap-3">
    <div class="flex items-center  ">
        <input id="inline-checked-radio"  type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-[#F33288] bg-[#f8cbdf]"/>
        <label for="inline-checked-radio" class="ml-2  text-[12px] font-[Sofia] font-[400] text-[#F33288] ">General Inquiry</label>
    </div>
    <div class="flex items-center  ">
        <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-[#F33288] bg-[#f8cbdf]"/>
        <label for="inline-2-radio" class="ml-2 text-[12px] font-[Sofia] font-[400] text-[#F33288] ">Career</label>
    </div>
    <div class="flex items-center  ">
        <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-[#F33288] bg-[#f8cbdf]"/>
        <label for="inline-2-radio" class="ml-2 text-[12px] font-[Sofia] font-[400] text-[#F33288] ">Other</label>
        <input className="contact_input mb-3 w-full  md:hidden " type="text" />

    </div>
    <input className="contact_input mb-3 w-full hidden md:block " type="text" />
    </div>
    </div>
          <div className="flex flex-col gap-2">
            <label className="contact_label">Message</label>
            <input className="contact_input"  type="text" />
          </div>
          <div className='contact_submit items-center'>
          <button className="flex " type="submit">Send Message
            {/* <svg className="mt-2 ml-1 " width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.29806 5.73623L5.20055 1.63873L6.28069 0.558594L12.2222 6.50012L6.28069 12.4416L5.20055 11.3615L9.29806 7.26401H0V5.73623H9.29806Z" fill="white" />
            </svg> */}
          </button>
          </div>
        </form>
      </div>
      
    </div>
    </div>
    <div ref={popupOverlayRef} class="popup-overlay">
    <div ref={popupContainerRef}  class="popup-container">
      <div class="popup-card mt-6">
       
        <p className='thanks_text mb-6'>Thank you for reaching out. We will contact you soon</p>
        <button id="close-popup" onClick={()=>closePopup()}>Close</button>
      </div>
    </div>
  </div>
   
  </div>
  <img className=' md:block hidden right-[0] top-[70%]  fixed  ' src='/fish.png' />
  <Footer />
  </>
);
          }
export default Contact;
