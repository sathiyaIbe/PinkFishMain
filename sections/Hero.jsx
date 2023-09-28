
'use client'
import Link from 'next/link';
import '../styles/home.css'
import gsap from 'gsap';
import { Navbar } from '../components';
import { useRef } from 'react';
const Hero = () => {
  let firstRef=useRef(null)
  let secondRef=useRef(null)
  let thirdRef=useRef(null)
  let fourRef=useRef(null)
  let fiveRef=useRef(null)
  let sixRef=useRef(null)
  let sevenRef=useRef(null)

  function backTo(a){
    gsap.to(a, {
      x: 0,
      y: 0,
    });
  };
  function mouseMoveFunc(e,a) {
    console.log(e)
    

     {
      const depth = 10;
      const moveX = (e.pageX  / 2) / depth;
      const moveY = (e.pageY  / 2) / depth;
      
  
      gsap.to(a, {
        x: moveX* 2,
        y: moveY * 2,
        // onComplete:backTo
      });
    };
  }
  return(

  <section className="hero_container  "  >
    <Navbar selectItem='home' />
      <img src='/HEROIMG_Mob.png' className='md:hidden mt-0 mb-12' />
    <div className='  header_container flex justify-center'>
    
      <div className='flex flex-col md:flex-row items-center md:justify-center md: p-4 md:w-[90%]'>
        <div className="self-center">
        <img className='mt-24' src='/main_logo.png'/>
        <div className='' onMouseOut={()=>backTo(firstRef)}  onMouseMove={(e)=>mouseMoveFunc(e,firstRef)}>
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
  </section>
);
  }
export default Hero;
