import Script from 'next/script';
import { Footer, NewNavbar } from '../components';
import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
     <Script
  strategy="lazyOnload"
  src={`https://www.googletagmanager.com/gtag/js?id=GTM-K6TW6MF`}
/>
<Script id="ga-script" strategy="lazyOnload">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GTM-K6TW6MF', {
      page_path: window.location.pathname,
    });
        `}
</Script>

      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
     
    </head>
    <body>


      <div className="min-h-screen bg-black ">
      {/* <NewNavbar /> */}
    
    
     
       {children}
        {/* <Footer /> */}
      </div>
    </body>
  </html>
);

export default RootLayout;
