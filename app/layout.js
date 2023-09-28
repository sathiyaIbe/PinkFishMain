import { Footer, Navbar } from '../components';
import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      
    </head>
    <body>
      <div className="min-h-screen bg-black ">
      
        {children}
      </div>
    </body>
  </html>
);

export default RootLayout;
