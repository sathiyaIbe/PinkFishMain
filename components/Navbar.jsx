/* eslint-disable */
'use client'
import Link from 'next/link';
import { useState } from 'react';
import { useNavigate} from "react-router-dom";
import Footer from './Footer';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';
import { fadeIn } from '../utils/motion';
import { motion } from 'framer-motion';
const Navbar = (props) => {
  const router =useRouter()

  const [toggleDropdown, setToggleDropdown] = useState(false)
  function changeToggle(){  
    if (toggleDropdown) {    
      gsap.fromTo(".box", { opacity: 1, y: 1 });
    } else {
      gsap.fromTo(".box",  { opacity: 0, y: -100 });
   
  }
}

  const  newMenu=()=>{
    return(
      <motion.div
      variants={fadeIn("left", "tween",.1,1)}
      initial="hidden"
      whileInView="show"
     viewport={{ once: true }}
      className="min-h-screen bg-[#FF0086] md:hidden top-[0] fixed inset-0 z-10  border-b-2 border-white ">
       
       <div className=' flex flex-col '>
        <div className=' flex flex-col border-b-2 border-white mb-4'>
    <div className='w-[90%] self-center mb-4'>
      <div className='w-full flex justify-between items-center '>
  <button className='self-start' >
      <img src="/Logo.png" className="logo_img mb-3 pt-3" />
    </button>

    <button type='button'><img onClick={() => setToggleDropdown(false)}  src='/close.png'/></button>



</div>
</div>
</div>
       <div className='flex flex-col w-[90%] '>
        
         <div className="flex flex-col w-[80%] self-center gap-4 mb-4 mt-4 ">
           <Link href="/">
             <h1 className={props.selectItem==="home"?"select menu_text_mob":'menu_text_mob '}>Home</h1>
           </Link>
           <Link href="/AboutUs">
             <h1 className={props.selectItem==="about"?"select menu_text_mob":'menu_text_mob'}>about</h1>
           </Link>
           <Link href="/News">
             <h1 className={props.selectItem==="news"?"select menu_text_mob":'menu_text_mob'}>news</h1>
           </Link>
           <Link href="Contact">
             <h1 className={props.selectItem==="contact"?"select menu_text_mob":'menu_text_mob'}>Contact us</h1>
           </Link>
         </div>
         </div>
         <div className='border-b-4 border-white mt-3'></div>
         <div className='flex flex-col w-[90%] mb-4 mt-3'>
         <div className='mt-3 w-[80%] flex items-center self-center  gap-6 '  >
        <img className='w-[26px] h-[50px]' src='/fb_icon.svg'/>
        <img className='w-[44px] h-[32px]' src='/yt_icon.svg'/>
        <img className='w-[44px] h-[44px]' src='/ig_icon.svg'/>
        <img className='w-[35px] h-[41px]' src='/tt_icon.svg'/>
   
        </div>
       </div>
       <Footer />
       </div> 
       </motion.div> 
    )
  }


  
return (
  <div className='flex '>
  
  {toggleDropdown?newMenu():
  <nav className="navbar_main_container ">
  <div className='hidden md:block'>
  <div className="navbar_container  ">
    <div className='flex justify-center desktop_navbar '>
    <Link href="/">
      <img src="/Logo.png" className="logo_img " />
    </Link>
    <div className="flex gap-6 ">
      <Link href="/">
        <h1 className={props.selectItem==="home"?"select menu_text":'menu_text'}>Home</h1>
      </Link>
      <Link href="/AboutUs">
        <h1 className={props.selectItem==="about"?"select menu_text":'menu_text'}>about</h1>
      </Link>
      <Link href="/News">
        <h1 className={props.selectItem==="news"?"select menu_text":'menu_text'}>news</h1>
      </Link>
      <Link href="Contact">
        <h1 className={props.selectItem==="contact"?"select menu_text":'menu_text'}>Contact us</h1>
      </Link>
    </div>
    <div className='mt-3 flex gap-4 items-center'  href="/Events-Individual">
              <a href='https://www.facebook.com/pinkfishfestival/' target="_blank"> <img  className='h-6' src='/fb_icon.svg'/></a>
              <a href='https://www.youtube.com/@Pinkfishfestival' target="_blank">  <img  className=' w-8 h-8' src='/yt_icon.svg'/> </a>
              <a href='https://www.instagram.com/pinkfishfestival/' target="_blank"> <img className='h-6' src='/ig_icon.svg'/></a>
              <a href='https://www.tiktok.com/@pinkfishfestival' target="_blank">  <img className='h-6' src='/tt_icon.svg'/></a>
            

    </div>
  </div>
  </div>
  </div>
 <div className=' flex flex-col border-white md:hidden '>
    <div className='w-[90%] self-center '>
      <div className='w-full flex justify-between '>
        <Link href='/'>
  <button className='self-start '>
      <img src="/Logo.png" className="logo_img mb-3 mt-3" />
    </button>
    </Link>
  
    <button className='' type='button' onClick={() => setToggleDropdown(true)} >
    <svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.7392 2.71679H1.26098C0.726193 2.71679 0.282715 2.25413 0.282715 1.69622C0.282715 1.13831 0.726193 0.675659 1.26098 0.675659H24.7392C25.274 0.675659 25.7175 1.13831 25.7175 1.69622C25.7175 2.25413 25.274 2.71679 24.7392 2.71679Z" fill="white"/>
<path d="M24.7392 9.52056H1.26098C0.726193 9.52056 0.282715 9.0579 0.282715 8.5C0.282715 7.94209 0.726193 7.47943 1.26098 7.47943H24.7392C25.274 7.47943 25.7175 7.94209 25.7175 8.5C25.7175 9.0579 25.274 9.52056 24.7392 9.52056Z" fill="white"/>
<path d="M24.7392 16.3243H1.26098C0.726193 16.3243 0.282715 15.8616 0.282715 15.3037C0.282715 14.7458 0.726193 14.2832 1.26098 14.2832H24.7392C25.274 14.2832 25.7175 14.7458 25.7175 15.3037C25.7175 15.8616 25.274 16.3243 24.7392 16.3243Z" fill="white"/>
</svg>


</button>


</div>
</div>
  </div> 
  
 
</nav>
}
  </div>
);
  }
export default Navbar;
