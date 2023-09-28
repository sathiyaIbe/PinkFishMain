/* eslint-disable */
'use client'
import Link from 'next/link';
import { useState } from 'react';

const Navbar = (props) => {
  const [toggleDropdown, setToggleDropdown] = useState(false)
  function changeToggle(){  
    console.log(toggleDropdown)
   
  }
  
return (
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
      <div className='mt-3 flex gap-4'  href="/Events-Individual">
     <img src='/fb_icon.svg'/>
     <img src='/yt_icon.svg'/>
     <img src='/ig_icon.svg'/>
     <img src='/tt_icon.svg'/>

      </div>
    </div>
    </div>
    </div>
    <div className='navbar_container_mob  '>
      <div className='w-[70%] self-center flex justify-between'>
    <Link className='self-center' href="/">
        <img src="/Logo.png" className="logo_img mb-3" />
      </Link>
      <button type='button' onClick={()=>{  setToggleDropdown(((prev)=>!prev)); changeToggle()}}>
      <svg clipPath='pt-6' width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.4565 2.46813H0.978261C0.443478 2.46813 0 2.00547 0 1.44757C0 0.889658 0.443478 0.427002 0.978261 0.427002H24.4565C24.9913 0.427002 25.4348 0.889658 25.4348 1.44757C25.4348 2.00547 24.9913 2.46813 24.4565 2.46813Z" fill="#F33288"/>
<path d="M24.4565 9.27184H0.978261C0.443478 9.27184 0 8.80919 0 8.25128C0 7.69337 0.443478 7.23071 0.978261 7.23071H24.4565C24.9913 7.23071 25.4348 7.69337 25.4348 8.25128C25.4348 8.80919 24.9913 9.27184 24.4565 9.27184Z" fill="#F33288"/>
<path d="M24.4565 16.0756H0.978261C0.443478 16.0756 0 15.6129 0 15.055C0 14.4971 0.443478 14.0344 0.978261 14.0344H24.4565C24.9913 14.0344 25.4348 14.4971 25.4348 15.055C25.4348 15.6129 24.9913 16.0756 24.4565 16.0756Z" fill="#F33288"/>
</svg>
</button>
{toggleDropdown &&
<div className="dropdown">
     <Link href="/Events" className="menu_text_mob" onClick={()=>setToggleDropdown(false)}>Events</Link>
    <Link href="/" className="menu_text_mob" onClick={()=>setToggleDropdown(false)}>about us </Link>
    <Link href="/Contact" className="menu_text_mob mb-4" onClick={()=>setToggleDropdown(false)}>Contact</Link>
    <Link href="/Events-Individual" className='w-[40%]'  onClick={()=>setToggleDropdown(false)}>
        <button className="buy_ticket   p-5 mb-6 flex " type="button">Reach out
          <svg className="mt-2 md:mt-2  ml-1 " width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.29806 5.73623L5.20055 1.63873L6.28069 0.558594L12.2222 6.50012L6.28069 12.4416L5.20055 11.3615L9.29806 7.26401H0V5.73623H9.29806Z" fill="white" />
          </svg>
        </button>
      </Link>
    </div>
}
</div>  
    </div>
  </nav>
);
  }
export default Navbar;
