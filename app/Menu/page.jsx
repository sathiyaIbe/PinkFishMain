'use client'
import { Navbar } from '../../components';
import React from 'react';
import { Footer } from '../../components';
import Link from 'next/link';
const menu = (props) => {
    return (
    <div className="min-h-screen bg-[#FF0086] md:hidden">
       
    <Navbar selectItem={"mobile_menu"} />
    <div className='flex flex-col w-[90%] '>
     
      <div className="flex flex-col w-[80%] self-center gap-4 mb-4 ">
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
  )
}

export default menu