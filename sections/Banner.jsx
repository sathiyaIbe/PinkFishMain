import { Footer } from "../components";
import "../styles/home.css"
import PartyBanner from "./PartyBanner";
const Banner = () => (
  <div className='bg_home_footer flex flex-col  '>
                <PartyBanner  />
                <div className='mt-11 mb-0  flex self-center gap-6'  href="/Events-Individual">
                  <img src='/fb_icon.svg'/>
                  <img src='/yt_icon.svg'/>
                  <img src='/ig_icon.svg'/>
                  <img src='/tt_icon.svg'/>
                </div>
                <Footer />
              </div>
);
export default Banner;
