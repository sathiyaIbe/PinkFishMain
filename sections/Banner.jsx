import { Footer } from "../components";
import "../styles/home.css"
import PartyBanner from "./PartyBanner";
const Banner = () => (
  <div className='bg_home_footer flex flex-col  '>
                <PartyBanner  />
                <div className='mt-11 mb-0  flex self-center gap-6'  href="/Events-Individual">
                <a href='https://www.facebook.com/pinkfishfestival/' target="_blank"> <img src='/fb_icon.svg'/></a>
                <a href='https://www.youtube.com/@Pinkfishfestival' target="_blank">  <img src='/yt_icon.svg'/> </a>
                <a href='https://www.instagram.com/pinkfishfestival/' target="_blank"> <img src='/ig_icon.svg'/></a>
                <a href='https://www.tiktok.com/@pinkfishfestival' target="_blank">  <img src='/tt_icon.svg'/></a>
                </div>
                <Footer />
              </div>
);
export default Banner;
