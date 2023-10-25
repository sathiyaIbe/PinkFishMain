import Script from 'next/script';
import { Footer, NewNavbar } from '../components';
import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
     <script
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
 
</script>

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
