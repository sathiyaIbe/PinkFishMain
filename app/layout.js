import { Footer, NewNavbar } from '../components';
import '../styles/globals.css';
'use client'
const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      
    </head>
    <body>
      <div className="min-h-screen bg-black ">
      <NewNavbar />
    
      <img className=' right-[0] top-[70%]  fixed  ' src='/fish.png' />
     
       {children}
        <Footer />
      </div>
    </body>
  </html>
);

export default RootLayout;
