import Link from 'next/link';
import '../styles/home.css'
import { Navbar } from '../components';
const Hero = () => (
  <section className="hero_container  ">
    <Navbar selectItem='home' />
      <img src='/HEROIMG_Mob.png' className='md:hidden mt-0 mb-12' />
    <div className='  header_container flex justify-center'>
    
      <div className='flex flex-col md:flex-row items-center md:justify-center md: p-4 md:w-[90%]'>
        <div className="self-center">
        <img src='/main_logo.png'/>
        </div>
      </div>
    </div>
  </section>
);
export default Hero;
