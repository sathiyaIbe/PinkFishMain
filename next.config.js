/** @type {import('next').NextConfig} */

const nextConfig = {

 experimental:{appDir: true},
 env: {
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
  },


};
 
module.exports = nextConfig;
