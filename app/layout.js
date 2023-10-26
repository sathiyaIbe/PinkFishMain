'use client'
import { Footer, NewNavbar } from '../components';
import '../styles/globals.css';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';
const RootLayout = ({ children }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.GOOGLE_ANALYTICS });
}, []);
  return(
  <html lang="en">
    <head>
     {/* <script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}>
  </script>
<script id="ga-script" strategy="lazyOnload" dangerouslySetInnerHTML={ { __html:`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
    });
        `}}>
 
</script> */}

{/* <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K6TW6MF');</script> */}
{/* <script>{initializeGoogleTagManager()}</script> */}

{/* <script src="https://smtpjs.com/v3/smtp.js">
</script>  */}
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
}
export default RootLayout;
