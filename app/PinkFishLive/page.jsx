import { PinkText, Events, Gallery2, Hero2, Banner } from '../../sections';
import '../../styles/contact.css';

const Page = () => (
  <div className="bg-black min-h-[100vh]">
    <Hero2 />
    {/* <PinkText />
    <Events />*/}
    <Gallery2 />
    <Banner /> 
  </div>
);
export default Page;