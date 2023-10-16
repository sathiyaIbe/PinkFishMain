"use client";
const World = () =>{
  function sideScroll(direction,speed,distance,step){
        var element =   document.getElementById('container')
       
         var scrollAmount = 0;
          var slideTimer = setInterval(function(){
              if(direction == 'left'){
                  element.scrollLeft -= step;
              } else {
                  element.scrollLeft += step;
              }
              scrollAmount += step;
              if(scrollAmount >= distance){
                  window.clearInterval(slideTimer);
              }
          }, speed);
      }
return(
  <div className="flex flex-col max-w-[100vw]  gap-11">
  <section className='hero_banner flex flex-col  text-white'>
<div className="   w-[70%] self-center  ">
  <div className="flex justify-around">

  <div className="w-2/4  p-11 ">
    <h1 className="world_header  ">Ride on the rhythm of life</h1>
  </div>
  <div className="w-2/4 p-11  gap-3">
    <p className="world_text">Live your life loud and vibrant at Pinkfish!
  </p>
<p className="world_text">Get ready to ignite your spirit, join a tight-knit community, and embrace self-expression 
  in an explosion of music, arts, and dance; all blending into one melting pot of creativity
</p>
  </div>
  </div>
</div>

{/* <img src='/hero_bottom_bg.png'/> */}

  </section>
  <section className="flex flex-col gap-11 w-[80%] self-center itmes-center">
    <div className="flex justify-around  mt-11 mb-11">
    <img src='/hero_logo_3.png' />
    <img src='/hero_logo_2.png' />
    <img src='/hero_logo_1.png' />
    </div>
    <div className="flex flex-col  self-center ">
    <div className="flex  ">
     
      <img src='/left_arrow_home.svg' onClick={()=>{sideScroll("left",2,900,1900)}} className="" alt='arrow'/>
     
      <div id='container' className=" flex  overflow-x-scroll gap-6">
      {/* <span className="min-w-[100%] relative"> 
      <img className="" src="/countdown_banner.png" />
      </span>
      <img className="" src="/countdown_banner.png" /> */}
      
      <div className="container flex flex-col min-w-[100%]  ">
          <img className="object-none self-center" src="/countdown_banner.png" />
          <div className=" text-white flex flex-col justify-center gap-2 md:gap-4">
            
            <button className="event_tickets2 text-block self-center " alt="button">View More
             
              </button>
          </div>
        </div>
        
        <div className="container flex flex-col min-w-[100%]  ">
          <img className="object-cover self-center" src="/countdown_banner_2.jpg" />
          <div className=" text-white flex flex-col justify-center gap-2 md:gap-4 ">
            
            <button className="event_tickets2 text-block self-center " alt="button">View More
             
              </button>
          </div>
        </div>
       
      {/* <img className="" src='/countdown_banner.png' alt='arrow'/> */}
      </div>
      <img src='/right_arrow_home.svg' onClick={()=>{sideScroll("right",2,900,1900)}} alt='arrow'/>
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
          <img src='/right_arrow_home_bottom.svg' alt='arrow'/>
          </div>
        </div>
        <img src='/home_bottom_img_2.png' className="object-none" alt='gallery'/>

       
      </div>
      <div className="basis-1/2 flex flex-col gap-3">
        <div className="flex justify-between">
          <h1 className="home_bottom_header">
          What’s bubblin’?
          </h1>
          <div className="flex gap-2">
          <img src='/left_arrow_home_bottom.svg' alt='arrow'/>
          <img src='/right_arrow_home_bottom.svg' alt='arrow'/>
          </div>
        </div>
        
        <img src='/home_bottom_img_1.png' className="object-none" alt='gallery'/>
       
        
       
      </div>
      
    </div>
    <div className="flex flex-col">
    <h1 className="home_bottom_header text-center mt-6  self-center">a curated adventure by</h1>
        <div className="flex gap-6 self-center ">
          <img src='/home_bottom_logo_1.png'/>
          <img className="object-none" src='/home_bottom_logo_2.png'/>
          </div>

        </div>
    </div>
    
  </section>
  </div>
);
}
export default World;
