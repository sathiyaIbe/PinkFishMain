import { PinkText, Events, Gallery, Hero, Banner } from '../sections';
import '../styles/contact.css';

const Page = () => (
  <div className="bg-black min-h-[100vh]">
    <Hero />
    {/* <PinkText />
    <Events />*/}
    <Gallery />
    <Banner /> 
  </div>
);
export default Page;
