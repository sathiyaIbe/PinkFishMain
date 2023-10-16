"use client";
const World = () => (
  <div className="flex flex-col max-w-[100vw]  gap-11">
  <section className='hero_banner flex flex-col  text-white'>
<div className="flex p-11 w-[80%] self-center ">
  <div className="basis-1/2 flex flex-col">
    <h1 className="world_header  ">Ride on the rhythm of life</h1>
  </div>
  <div className="basis-1/2 flex flex-col justify-center gap-3">
    <p className="world_text">Live your life loud and vibrant at Pinkfish!
  </p>
<p className="world_text">Get ready to ignite your spirit, join a tight-knit community, and embrace self-expression 
  in an explosion of music, arts, and dance; all blending into one melting pot of creativity
</p>
  </div>
  
</div>

{/* <img src='/hero_bottom_bg.png'/> */}

  </section>
  <section className="flex flex-col gap-11 w-[80%] self-center itmes-center">
    <div className="flex justify-around ">
    <img src='/hero_logo_1.png' />
    <img src='/hero_logo_2.png' />
    <img src='/hero_logo_3.png' />
    </div>
    <div className="flex flex-col ">
    <div className="flex gap-3 self-center">
      <img src='/left_arrow_home.svg' alt='arrow'/>
      <img src='/countdown_banner.png' alt='arrow'/>

      <img src='/right_arrow_home.svg' alt='arrow'/>
      </div>
    </div>
    <div className="flex flex-col  text-white">
      <div className="flex self-center   gap-6   ">
      <div className="basis-1/2 flex flex-col gap-3">
        <div className="flex justify-between ">
          <a href='/Gallery' className="home_bottom_header">
          festival oasis
          </a>
         
          <div className="flex gap-2">
          <img src='/left_arrow_home_bottom.svg' alt='arrow'/>
          <img src='/left_arrow_home_bottom.svg' alt='arrow'/>
          </div>
        </div>
        <img src='/home_bottom_img_2.png' className="object-none" alt='gallery'/>

        <h1 className="home_bottom_header text-center mt-6">a curated adventure by</h1>
        <div className="flex justify-between">
          <img src='/home_bottom_logo_1.png'/>
          <img className="object-none" src='/home_bottom_logo_2.png'/>

        </div>
      </div>
      <div className="basis-1/2 flex flex-col gap-3">
        <div className="flex justify-between">
          <h1 className="home_bottom_header">
          What’s bubblin’?
          </h1>
          <div className="flex gap-2">
          <img src='/left_arrow_home_bottom.svg' alt='arrow'/>
          <img src='/left_arrow_home_bottom.svg' alt='arrow'/>
          </div>
        </div>
        
        <img src='/home_bottom_img_1.png' className="object-none" alt='gallery'/>
        <h1 className="home_bottom_header text-center mt-6">as seen on</h1>
        <div className="flex gap-6 self-center">
          <img src='/home_bottom_logo_3.png'/>
          <img className="object-none" src='/home_bottom_logo_4.png'/>
          <img src='/home_bottom_logo_5.png'/>
          <img className="object-none" src='/home_bottom_logo_6.png'/>

        </div>
        <div className="flex gap-6 self-center">
          <img src='/home_bottom_logo_7.png'/>
          <img className="object-none" src='/home_bottom_logo_8.png'/>
          <img src='/home_bottom_logo_9.png'/>

        </div>
       
        
       
      </div>
    </div>
    </div>
    
  </section>
  </div>
);
export default World;
