import { Footer, NewNavbar } from '../components';
import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
/>

<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
    </head>
    <body>
      <div className="min-h-screen bg-black ">
      <NewNavbar />
    
      <img className=' md:block hidden right-[0] top-[70%]  fixed  ' src='/fish.png' />
     
       {children}
        <Footer />
      </div>
    </body>
  </html>
);

export default RootLayout;
