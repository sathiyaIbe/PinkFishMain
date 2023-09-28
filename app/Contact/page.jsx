/* eslint-disable */
'use client'
import '../../styles/contact.css';
import {  motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer, textContainer, textVariant, textVariant2 } from "../../utils/motion";
import { Footer, Navbar } from '../../components';
const Contact = () => (
  <div className="contact_main_container  min-h-screen  text-white   ">
    <Navbar selectItem="contact"/>
     <div className='flex flex-col gap-6  pb-11 pt-6 header_container_aboutus border-b-[1px] border-white w-full '>
              
              <motion.h1
               variants={textVariant2}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
              
              className='about_us_main_header'>join the party</motion.h1>
          </div>
    <div className="  flex flex-col md:flex-row bg-white pb-6 pt-11 ">
      <div className="md:basis-2/5  flex justify-center">
        <div className='w-[50%]'>
        <h1 className="contact_header">Contact Information</h1>
        
        <div className="flex flex-col gap-6 mt-6 hidden md:block">
<div className='flex gap-2 mb-4'>
        <img className="w-6" src='/email_contact.svg' />
<p className="contact_text ">info@pinkfishfestival.com</p>
</div>
<div className='flex gap-2 mb-4'>
        <img className="w-6" src='/ig_contact.svg' />
<p className="contact_text underline">Instagram</p>
</div>
<div className='flex gap-2 mb-4'>
        <img className="w-6" src='/yt_contact.svg' />
<p className="contact_text underline">Youtube</p>
</div>
<div className='flex gap-2 mb-4'>
        <img className="w-6" src='/fb_contact.svg' />
<p className="contact_text underline">Facebook</p>
</div>
<div className='flex gap-2'>
        <img className="w-6" src='/tt_contact.svg' />
<p className="contact_text underline">Tiktok </p>
</div>
        </div>
        </div>
      </div>

      <div className="md:basis-3/5 mt-11 md:mt-0 ">
        <form className="flex flex-col w-[75%] gap-8">
          <div className='flex gap-6'>
          <div className="flex flex-col w-[50%] ">
            <label className="contact_label">First Name</label>
            <input className="contact_input" type="text" />
          </div>
          <div className="flex flex-col w-[50%]">
            <label className="contact_label">Last Name</label>
            <input className="contact_input" type="text" />
          </div>
          </div>
          <div className='flex gap-6'>
          <div className="flex flex-col w-[50%] ">
            <label className="contact_label">Email</label>
            <input className="contact_input" type="text" />
          </div>
          <div className="flex flex-col w-[50%]">
            <label className="contact_label">Phone Number</label>
            <input className="contact_input" type="text" />
          </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="contact_label">Select Subject?</label>
           
<div class="flex">
    <div class="flex items-center mr-4">
        <input id="inline-checked-radio" checked type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-[#F33288] bg-[#f8cbdf]"/>
        <label for="inline-checked-radio" class="ml-2 text-[12px] font-[Sofia] font-[400] text-[#F33288] ">General Inquiry</label>
    </div>
    <div class="flex items-center mr-4">
        <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-[#F33288] bg-[#f8cbdf]"/>
        <label for="inline-2-radio" class="ml-2 text-[12px] font-[Sofia] font-[400] text-[#F33288] ">Career</label>
    </div>
    <div class="flex items-center mr-4">
        <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-[#F33288] bg-[#f8cbdf] "/>
        <div className='flex gap-1'>
        <label for="inline-2-radio" class="ml-2 text-[12px] font-[Sofia] font-[400] text-[#F33288] mt-4  ">Other: </label>
        <div className='w-[380px]'>
        <input className="contact_input mb-3   w-[100%]" type="text" />
        </div>
        </div>
    </div>
   
</div>
{/* <div className='flex'>
<input type="radio" id="html" checked name="fav_language" value="HTML"/>
  <label for="html">HTML</label>
  <input type="radio" id="css" name="fav_language" value="CSS"/>
  <label for="css">CSS</label>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
  <label for="javascript">JavaScript</label>
</div> */}
          </div>
          <div className="flex flex-col gap-2">
            <label className="contact_label">Message</label>
            <input className="contact_input"  type="text" />
          </div>
          <div className='contact_submit'>
          <button className="flex " type="submit">Send Message
            <svg className="mt-2 ml-1 " width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.29806 5.73623L5.20055 1.63873L6.28069 0.558594L12.2222 6.50012L6.28069 12.4416L5.20055 11.3615L9.29806 7.26401H0V5.73623H9.29806Z" fill="white" />
            </svg>
          </button>
          </div>
        </form>
      </div>
      <div className='flex justify-center'>
      <div className="flex flex-col  gap-1  items-center md:hidden">
      <div className='flex gap-3'>
<img src='/email_contact.svg' />
<p className="contact_text mt-3">info@pinkfishfestival.com</p>
</div>
<h1 className="contact_sub_header mt-3 mb-3">Socials</h1>
<p className="contact_text text-center">Instagram</p>
<p className="contact_text text-center">Youtube</p>
<p className="contact_text text-center">Facebook</p>
</div>
</div>
    </div>
    <div className='pt-6'>
    <Footer />
    </div>
  </div>
);

export default Contact;
