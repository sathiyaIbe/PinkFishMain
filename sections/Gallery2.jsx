'use client'
import "../styles/home.css"
const Gallery2 = () =>{

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


var dragged = false
var oldX = 0;
function mouseDown (e) {
    oldX = e.pageX;
    dragged = false 
  }
 function mouseMove() {
   dragged = true 
  }

function mouseUp(e) {
var divOverlay =   document.getElementById('container')
        if (dragged == true && e?.pageX < oldX) {
            sideScroll(divOverlay,'right',25,300,900);
        } else if (dragged == true && e?.pageX > oldX) {
            sideScroll(divOverlay,'left',25,100, 900);          
        }    
}
  
return(
  <section className="mt-24">

<h1 className="gallery_header text-center  mb-6">Gallery</h1>

<div id="container" className="flex md:hidden overflow-x-scroll">

  {/* <img src='/left_arrow.svg' className="absolute bottom-[-45%] left-[85%]" onClick={()=>{sideScroll('right',25,100,414)}}/>
  <img src='/right_arrow.svg' className="absolute bottom-[-45%] left-[5%]" onClick={()=>{sideScroll('left',25,100, 414)}} /> */}
  <img className="w-ful object-none" src="/Gallery/pinkLive_lg_1.png" />
          <img className="w-full object-none" src="/Gallery/pinkLive_lg_2.png" /> 
          <img className="w-full object-none" src="/Gallery/pinkfishLive_lg_3.png" />
          <img className="w-full object-none" src="/Gallery/pinkLive_lg_4.png" /> 
          <img className="w-full object-none" src="/Gallery/pinkLive_lg_5.png" /> 
          <img className="w-full object-none" src="/Gallery/pinkLive_lg_6.png" />
          <img className="w-full object-none" src="/Gallery/pinkLive_lg_7.png" />
          <img className="w-full object-none" src="/Gallery/pinkLive_lg_8.png" />
          <img className="w-full object-none" src="/Gallery/pinkLive_lg_9.png" />
          <img className="w-full object-none" src="/Gallery/pinkLive_lg_10.png" />
          <img className="w-full object-none" src="/Gallery/pinkLive_lg_11.png" />
          <img className="w-full object-none" src="/Gallery/pinkLive_lg_12.png" />
</div>

    <div className="gallery_container_mob hidden md:block  overflow-hidden  pt-4 pb-4">

        <div className="flex gap-4 mt-11 "> 
          <img className=" w-3/5" src="/Gallery/pinkLive_lg_1.png" />
          <img className="w-2/5" src="/Gallery/pinkLive_lg_2.png" /> 
        </div>
        <div className="flex gap-4  mt-4"> 
          <img className=" w-2/5" src="/Gallery/pinkLive_lg_3.png" />
          <img className="w-3/5" src="/Gallery/pinkLive_lg_4.png" /> 
        </div>
        <div className="flex gap-4  mt-4"> 
          <img className="w-full" src="/Gallery/pinkLive_lg_5.png" /> 
        </div>
        <div className="flex gap-4 mt-4 "> 
          <img className=" w-3/5" src="/Gallery/pinkLive_lg_6.png" />
          <img className="w-2/5" src="/Gallery/pinkLive_lg_7.png" /> 
        </div>
        <div className="flex gap-4 mt-4 "> 
          <img className=" w-1/2" src="/Gallery/pinkLive_lg_8.png" />
          <img className="w-1/2" src="/Gallery/pinkLive_lg_9.png" /> 
        </div>
        <div className="flex gap-4 mt-4 "> 
          <img className=" w-2/5" src="/Gallery/pinkLive_lg_10.png" />
          <div className="w-3/5 flex flex-col gap-4">
          <img className="w-full" src="/Gallery/pinkLive_lg_11.png" /> 
          <img className="w-full" src="/Gallery/pinkLive_lg_12.png" /> 

          </div>
        </div>
    </div>
  </section>
);
}
export default Gallery2;
