
'use client'
import Link from 'next/link';
import '../styles/home.css'

import gsap from 'gsap';
import { Footer, Navbar } from '../components';
import { useRef, useState } from 'react';
import PartyBanner from './PartyBanner';
const Hero = () => {
  let firstRef=useRef(null)
  let secondRef=useRef(null)
  let thirdRef=useRef(null)
  let fourRef=useRef(null)
  let fiveRef=useRef(null)
  let sixRef=useRef(null)
  let sevenRef=useRef(null)
  const [moveDistance, setMoveDistance]=useState(0)

  function backTo(a){
    gsap.to(a, {
      x: 0,
      y: 0,
      duration:2,
    });
  };
  
  function mouseMoveFunc(e,a,c) {
    console.log(e.pageX)
    let oldx=0

     {
      const depth = 10;
      const moveX = (e.pageX  / 2) / depth;
      const moveY = (e.pageY  / 2) / depth;
      
      if (e.pageX < c) {
        console.log("left")
      
   } else if (e.pageX > oldx) {
      console.log("right")
   }
      gsap.to(a, {
        x: 30,
        y: -50,
        direction:"right",
        // onComplete:backTo
        type:'elastic',
      
      });
    };
  }
  return(

  <section className="hero_container min-h-screen flex flex-col justify-between overflow-hidden"  >
   
    <Navbar selectItem='home' />
    <div>
    <div className='flex flex-col '>
    <div className='  header_container flex justify-center'>
    
      <div className='flex flex-col md:flex-row items-center md:justify-center md: p-4 md:w-[90%]'>
        <div className="flex flex-col self-end">
          <div className=''>
          <div className='flex justify-center '>
          
        <img className=' w-[90%]' src='/main_logo.png'/>
       
        </div>
        </div>
        </div>
        <div className='' onMouseOut={()=>backTo(firstRef)}  onMouseMove={(e)=>mouseMoveFunc(e,firstRef,208)}>
        <img ref={el=>firstRef=el} className='svg_hero svg_1' src="/triangle_home.svg" />
        </div>
        <div className='' onMouseOut={()=>backTo(secondRef)}  onMouseMove={(e)=>mouseMoveFunc(e,secondRef)}>

        <img ref={el=>secondRef=el} className='svg_hero svg_2' src="/star_right_home.svg" />
        </div>
        <div className='' onMouseOut={()=>backTo(thirdRef)}  onMouseMove={(e)=>mouseMoveFunc(e,thirdRef)}>
        <img ref={el=>thirdRef=el} className='svg_hero svg_3' src="/sparkle_right_home.svg" />
        </div>
        <div className='' onMouseOut={()=>backTo(fourRef)}  onMouseMove={(e)=>mouseMoveFunc(e,fourRef)}>
        <img ref={el=>fourRef=el} className='svg_hero svg_4' src="/sparkle_left_home.svg" />
        </div>
        <div className='' onMouseOut={()=>backTo(fiveRef)}  onMouseMove={(e)=>mouseMoveFunc(e,fiveRef)}>
        <img ref={el=>fiveRef=el} className='svg_hero svg_5' src="/wave_home.svg" />
        </div>
        <div className='' onMouseOut={()=>backTo(sixRef)}  onMouseMove={(e)=>mouseMoveFunc(e,sixRef)}>
        <img ref={el=>sixRef=el} className='svg_hero svg_6' src="/star_left_home.svg" />
        </div>
        <div className='' onMouseOut={()=>backTo(sevenRef)}  onMouseMove={(e)=>mouseMoveFunc(e,sevenRef)}>
        <img ref={el=>sevenRef=el} className='svg_hero svg_7' src="/hi_home.svg" />
        </div>



       
      </div>
    </div>
  
    </div>
    </div>
    {/* <div className='bg-[#FF0086] flex flex-col  '>
                <PartyBanner  />
                <div className='mt-11 mb-0  flex self-center gap-6'  href="/Events-Individual">
                  <img src='/fb_icon.svg'/>
                  <img src='/yt_icon.svg'/>
                  <img src='/ig_icon.svg'/>
                  <img src='/tt_icon.svg'/>
                </div>
                <Footer />
              </div>     */}
                <div className='flex items-center text-white '>
<div className='w-1/2 bg-[#F33288] text_change text-center p-3 cursor-pointer'>
Pinkfish Music & Art Festival 
</div>
<div className='w-1/2 text-center text_change bg-white bg-opacity-25 p-3 cursor-pointer'>
Pinkfish Live 
</div>
    </div>
  </section>
);
  }
export default Hero;
