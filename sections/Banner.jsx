import { Footer } from "../components";
import "../styles/home.css"
import PartyBanner from "./PartyBanner";
const Banner = () => (
  <div className='bg_home_footer flex flex-col  '>
                <PartyBanner  />
                <div className='mt-11 mb-0 items-center flex self-center gap-6' >
                <a href='https://www.facebook.com/pinkfishfestival/' target="_blank"> <img  className='h-6' src='/fb_icon.svg'/></a>
                <a href='https://www.youtube.com/@Pinkfishfestival' target="_blank">  <img  className=' w-8 h-8' src='/yt_icon.svg'/> </a>
                <a href='https://www.instagram.com/pinkfishfestival/' target="_blank"> <img className='h-6' src='/ig_icon.svg'/></a>
                <a href='https://www.tiktok.com/@pinkfishfestival' target="_blank">  <img className='h-6' src='/tt_icon.svg'/></a>
                </div>
                
              </div>
);
export default Banner;
