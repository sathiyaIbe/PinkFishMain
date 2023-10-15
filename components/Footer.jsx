/* eslint-disable */
import Link from 'next/link';

const Footer = () => (
  <div className="pb-11 mt-11 ">
  <hr className="hr_line_footer " />
  <div className="flex flex-col gap-11 mt-11 ">
    <div className=" flex flex-col md:flex-row justify-between w-[90%] md:w-[80%] self-center  gap-11 ">
    <div className="flex flex-col gap-5 md:items-start items-center ">
        <h1 className="address_title icon_text">Follow us</h1>
        <div className="flex items-center  gap-6 md:gap-3">

            <a href='https://www.facebook.com/pinkfishfestival/' target="_blank" className="icon_text order-2 md:order-1">
            <img src='/fb.svg'/>

            </a>
        
          <a href='https://www.youtube.com/@Pinkfishfestival' target="_blank" className="icon_text order-2 md:order-1 ">
          <img src='/yt.svg'/>

            </a>
            <a href='https://www.instagram.com/pinkfishfestival/' target="_blank" className="icon_text order-2 md:order-1">
            <img src='/insta.svg'/>
            </a>
           
            <a href=' https://www.tiktok.com/@pinkfishfestival' target="_blank" className="icon_text text-center order-2 md:order-1">
            <img src='/tiktok.svg'/>

</a> 
        
        </div>
      </div>
      <div className="flex flex-col gap-5 md:items-start items-center ">
      <img src='/logo_footer.png' alt='logo'/>
      </div>
      <div className="flex flex-col text-white md:items-start gap-2  ">
      <Link className='flex flex-end' href="/">
        <p className="cursor-pointer icon_text  ">What The Fish</p>
        </Link>
        <Link className='flex justify-end w-full' href="/Events">
        <p className="cursor-pointer icon_text  ">Fun Hub</p>
        </Link>
        <Link className='flex justify-end w-full' href="/Terms&Condition">
        <p className="cursor-pointer icon_text  ">News</p>
        </Link>
        <Link className='flex justify-end w-full' href="/Contact">
        <p className="cursor-pointer icon_text  ">Contact Us </p>
        </Link>
       
      </div>
     
    </div>
    <div className='flex flex-col md:flex-row justify-between  w-[90%] md:w-[80%] self-center  gap-11'>
   
  <h1 className="footer_bottom_text ">Copyright © 2023. All rights reserved</h1>

  <div className='flex gap-2 text-white items-center' >
  <Link href="/">
        <p className="cursor-pointer icon_text  ">Privacy Policy</p>
        </Link>
        |
  <Link href="/Terms&Condition">
        <p className="cursor-pointer icon_text  ">Terms & Conditions</p>
        </Link>
        
        </div>
  </div>
  </div>
 
</div>
);
export default Footer;
