
'use client'
import Link from 'next/link';
import '../styles/home.css'

import gsap from 'gsap';
import { Footer, Navbar } from '../components';
import { useRef, useState } from 'react';
import PartyBanner from './PartyBanner';
const Hero2 = () => {
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


  const throttled = (delay, fn) => {
    let lastCall = 0;
    return function (...args) {
      const now = (new Date).getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...args);
    }
  }
  
  


  
  const mouseMoveHandler2 = (e) => {
    const movableElements =   document.querySelectorAll('.movable');
  
    movableElements.forEach(
      (movableElement) => {
        const  shiftValue = movableElement.getAttribute('data-value');
        const moveX = (e.clientX * (shiftValue)) / 250;
        const moveY = (e.clientY * (shiftValue)) / 250;
        
        
        gsap.to(movableElement, {x: moveX, y: moveY, duration: 1})
  
      }
    );
  };
  
  const tHandler = throttled(200, mouseMoveHandler2);


  return(

  <section className="hero_container_1  min-h-screen flex flex-col justify-between overflow-hidden"  >
   
    <Navbar selectItem='home' />
    <div>
    <div className='flex flex-col '>
    <div className='  header_container flex justify-center'>
    
      <div className='flex flex-col md:flex-row items-center md:justify-center md: p-4 md:w-[90%]'>
        <div className="flex flex-col self-end">
          <div className=''>
          <div className='flex justify-center '>
          
        <img data-value="-30"   onMouseMove={(e)=>tHandler(e)} className=' w-[90%] movable element' src='/main_logo_2.png'/>
       
        </div>
        </div>
        </div>
        <div className='svg_hero movable element svg_1'  data-value="-10">
        <img   src="/triangle_home.svg" />
        </div>
        <div className='svg_hero movable element svg_2' data-value="-10">

        <img src="/star_right_home.svg" />
        </div>
        <div className='svg_hero movable element svg_3' data-value="-40">
        <img src="/sparkle_right_home.svg" />
        </div>
        <div className='svg_hero movable element svg_4' data-value="-40">
        <img   src="/sparkle_left_home.svg" />
        </div>
        <div className='svg_hero movable element svg_5 wave_svg' data-value="13">
        <img src="/wave_home.svg" />
        </div>
        <div className='svg_hero movable element svg_6'  data-value="40">
        <img  src="/star_left_home.svg" />
        </div>
        <div className='svg_hero movable element svg_7' data-value="-10">
        <img   src="/hi_home.svg" />
        </div>



       
      </div>
    </div>
  
    </div>
    </div>
   
                <div className='flex items-center text-white '>
                   
<Link href='/' className='w-1/2  bg-white bg-opacity-25  text_change text-center p-3 cursor-pointer'>
Pinkfish Music & Art Festival 
</Link>


<Link href="PinkFishLive" className='w-1/2  text-center text_change bg-[#F33288] p-3 cursor-pointer'>
Pinkfish Live 
</Link>

    </div>
  </section>
);
  }
export default Hero2;
