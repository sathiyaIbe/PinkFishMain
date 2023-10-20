
import { Footer, NewNavbar } from '../components';
import { Gallery, Hero,World } from '../sections';
import '../styles/contact.css';

const Page = () => (
  <div className="bg-black min-h-[100vh]">
    <NewNavbar />
    <Hero />
     {/* <Gallery/> */}
     <img className=' md:block hidden right-[0] top-[70%]  fixed  ' src='/fish.png' />
 <World/>
 <Footer />
  </div>
);
export default Page;
