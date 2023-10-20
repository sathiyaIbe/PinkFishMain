/* eslint-disable */
'use client'
import '../../styles/contact.css';
import {  motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer, textContainer, textVariant, textVariant2 } from "../../utils/motion";
import { useState } from 'react';
import { scrollTop } from '../../components/jsfile';
import { Footer, NewNavbar } from '../../components';


const Gallery = () => {
  const [toogle,setToogle]=useState(true)
  return (
    <>
    <NewNavbar />
    <div className="bg-black min-h-screen flex flex-col gap-11  text-white   ">
    
    <div className='flex flex-col gap-6 pt-11 '>
      <h1 className='contact_text_header  self-center'>festival oasis</h1>
      <h1 className='contact_sub_text text-center w-[60%] self-center'>Catch a glimpse of yourself and other LAVAs in stills at Pinkfish events!</h1>
    </div>

    <div className= ' flex gap-3 self-center'>
      <button className={toogle?'pink_btn':"gallery_btn" } onClick={()=>{setToogle(true)}}><img src='/gallery_logo_1.png'/> </button>
      <button className={toogle?'gallery_btn':"pink_btn" } onClick={()=>{setToogle(false)}}><img src='/gallery_logo_2.png'/> </button>

    </div>
    {toogle?
    <div className='self-center flex flex-col  gap-4 md:w-fit w-[80%]'>
      <div className='flex gap-4'>
        <div className='image_11'>
        <img src='Gallery/new_gallery_1.png' alt='gallery'/>
        </div>
        <div className='image_11'>
        <img src='Gallery/new_gallery_2.png' alt='gallery'/>
        </div>
       
      </div>
      <div className='flex gap-4'>
      <div className='image_11'>
        <img src='Gallery/new_gallery_3.png' alt='gallery'/>
        </div>
        <div className='image_11'>
        <img src='Gallery/new_gallery_4.png' alt='gallery'/>
        </div>

      </div>
      <div className='image_11'>
        <img src='Gallery/new_gallery_5.png' alt='gallery'/>
        </div>
      <div className='flex gap-4'>
      <div className='image_11'>
        <img src='Gallery/new_gallery_6.png' alt='gallery'/>
        </div>
        <div className='image_11'>
        <img src='Gallery/new_gallery_7.png' alt='gallery'/>
        </div>

      </div>
      <div className='flex gap-4'>
      <div className='image_11'>
        <img src='Gallery/new_gallery_8.png' alt='gallery'/>
        </div>
        <div className='image_11'>
        <img src='Gallery/new_gallery_08.png' alt='gallery'/>
        </div>

      </div>
      <div className='flex  gap-4'>
      <div className='image_11'>
        <img src='Gallery/new_gallery_9.png' alt='gallery'/>
        </div>
       

      <div className='flex flex-col gap-4'>
      <div className='image_11'>
        <img src='Gallery/new_gallery_10.png' alt='gallery'/>
        </div>
        <div className='image_11'>
        <img src='Gallery/new_gallery_11.png' alt='gallery'/>
        </div>
        </div>
      </div>
    </div>:
    <div className='self-center flex flex-col gap-4 md:w-fit w-[80%]'>
    <div className='flex gap-4'>
    <div className='image_11'>
        <img src='Gallery/new_gallery_12.png' alt='gallery'/>
        </div>
        <div className='image_11'>
        <img src='Gallery/new_gallery_13.png' alt='gallery'/>
        </div>

    </div>
    <div className='flex gap-4'>
    <div className='image_11'>
        <img src='Gallery/new_gallery_14.png' alt='gallery'/>
        </div>
        <div className='image_11'>
        <img src='Gallery/new_gallery_15.png' alt='gallery'/>
        </div>

    </div>
    <div className='image_11'>
        <img src='Gallery/new_gallery_16.png' alt='gallery'/>
        </div>
    <div className='flex gap-4'>
    <div className='image_11'>
        <img src='Gallery/new_gallery_17.png' alt='gallery'/>
        </div>
        <div className='image_11'>
        <img src='Gallery/new_gallery_18.png' alt='gallery'/>
        </div>

    </div>
    <div className='flex gap-4'>
    <div className='image_11'>
        <img src='Gallery/new_gallery_19.png' alt='gallery'/>
        </div>
        <div className='image_11'>
        <img src='Gallery/new_gallery_20.png' alt='gallery'/>
        </div>

    </div>
    <div className='flex  gap-4'>
    <div className='image_11'>
        <img src='Gallery/new_gallery_21.png' alt='gallery'/>
        </div>

    <div className='flex flex-col gap-4'>
    <div className='image_11'>
        <img src='Gallery/new_gallery_22.png' alt='gallery'/>
        </div>
        <div className='image_11'>
        <img src='Gallery/new_gallery_23.png' alt='gallery'/>
        </div>
      </div>
    </div>
  </div>
}
<div className='hidden md:block'>
  <img className='galler_svg_1' src='Gallery/svg_1.svg'/>
  <img className='galler_svg_2' src='Gallery/svg_5.svg'/>
  <img className='galler_svg_3' src='Gallery/svg_4.svg'/>
  <img className='galler_svg_4' src='Gallery/svg_3.svg'/>
  <img className='galler_svg_5' src='Gallery/svg_2.svg'/>
  <img className='galler_svg_6' src='Gallery/svg_6.svg'/>
</div>
<div className='flex justify-center'>
        <button onClick={()=>{scrollTop()}} className='top_btn flex  self-center mt-11 mb-11 '>
      back to top 
     <img className='mt-0 md:mt-1 ml-2' src='/uparrow.png'/>

      </button>
      </div>
</div>
<Footer />
<img className=' md:block hidden right-[0] top-[70%]  fixed  ' src='/fish.png' />
</>
  )
}

export default Gallery