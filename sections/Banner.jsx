import "../styles/home.css"
const Banner = () => (
  <section className="text-white flex justify-center mt-11 pb-11 bg-black">
    <div className="banner_container p-6 w-5/6 pt-6 md:pt-24 pb-6 md:pb-24 flex flex-col self-center relative ">
      <img className="absolute banner_img_1 hidden md:block" src="/Banner/over_banner_1.png" />
      <img className="absolute banner_img_2 hidden md:block" src="/Banner/over_banner_2.png" />
      <img className="absolute banner_img_3 hidden md:block" src="/Banner/over_banner_3.png" />
      <img className="absolute banner_img_4 hidden md:block" src="/Banner/over_banner_4.png" />
      <h1 className="banner_header self-center">stay updated</h1>
      <p className="banner_text text-center self-center">Follow us on our social media pages</p>
      <div className="flex gap-2 self-center">
        <img src="/Banner/instagram 1.png" />
        <img src="/Banner/fb.png" />
      </div>
    </div>
  </section>
);
export default Banner;
