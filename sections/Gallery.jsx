'use client'
import "../styles/home.css"
const Gallery = () =>{

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

    {/* <div id="container" onMouseMove={()=>mouseMove()}  onMouseDown={(e)=>mouseDown(e)} onMouseUp={(e)=>mouseUp(e)}  className="flex gallery_main_container gap-4 hidden md:block">
      <div className="flex gap-8 ">
      <div className="flex flex-col gap-8 ">
        <img   draggable="false" className="min-w-[400px] h-[260px]" src="/Gallery/gallery_1.png" />
        <img draggable="false" className="w-[400px] h-[400px]" src="/Gallery/gallery_2.png" />
      </div>
      <div className="flex flex-col gap-8  ">
        <div className="flex flex-col gap-8  gallery_container text-white p-4 ">
          <div className="gap-8 flex w-[400px] h-[275px] flex-col">
          <h1 className="gallery_header w-1/2 mt-11 ">Gallery</h1>
          <p className="gallery_text">Step into our Gallery and let the music do the talking! Get a glimpse
            of the epic performances and wild moments that make concerts with us an unforgettable ride.</p>
         
            </div>
        </div>
        <img draggable="false" className="w-[440px] h-[354px]" src="/Gallery/gallery_3.png" />
      </div>
      <div className="flex flex-col gap-8 ">
        <img draggable="false" className="min-w-[400px] h-[690px]" src="/Gallery/gallery_4.png" />
      </div>
    <div className="flex flex-col gap-8 ">
        <div className="flex gap-8">
        <img draggable="false" className="" src="/Gallery/gallery_5.png" />
        <img draggable="false" src="/Gallery/gallery_6.png" />
        </div>
        <div className="w-[840px] h-[308px]">

        <img draggable="false" className="object-contain" src="/Gallery/gallery_7.png"/>
        </div>
      </div> 
      <div className="flex flex-col gap-8 ">
      
        <img draggable="false" src="/Gallery/gallery_8.png" />
     
        <div className="w-[400px] h-[400px]">

        <img draggable="false" className="object-contain" src="/Gallery/gallery_9.png"/>
        </div>
      </div> 
      <div className="flex flex-col gap-8 ">
      
    
   
      <div className="w-[400px]">

      <img draggable="false" className=" h-[690px]" src="/Gallery/gallery_10.png"/>
      </div>
    </div> 
    <div className="flex flex-col gap-8 ">
       
        <div className="w-[840px]">

        <img draggable="false" className="object-contain" src="/Gallery/gallery_11.png"/>
        </div>
        <div className="flex gap-8  ">
        <img draggable="false" className="" src="/Gallery/gallery_12.png" />
        <img draggable="false" src="/Gallery/gallery_13.png" />
        </div>
      </div> 
 
</div>

</div> */}
<h1 className="gallery_header text-center  mb-6">Gallery</h1>

<div id="container" className="flex md:hidden overflow-x-scroll">

  {/* <img src='/left_arrow.svg' className="absolute bottom-[-45%] left-[85%]" onClick={()=>{sideScroll('right',25,100,414)}}/>
  <img src='/right_arrow.svg' className="absolute bottom-[-45%] left-[5%]" onClick={()=>{sideScroll('left',25,100, 414)}} /> */}
  <img className="w-ful object-none" src="/Gallery/pinkfish/gallery_lg_1.png" />
          <img className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_2.png" /> 
          <img className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_3.png" />
          <img className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_4.png" /> 
          <img className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_5.png" /> 
          <img className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_6.png" />
          <img className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_7.png" />
          <img className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_8.png" />
          <img className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_9.png" />
          <img className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_10.png" />
          <img className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_11.png" />
          <img className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_12.png" />
</div>

    <div className="gallery_container_mob hidden md:block  overflow-hidden  pt-4 pb-4">

        <div className="flex gap-4 mt-11 "> 
          <img className=" w-3/5" src="/Gallery/pinkfish/gallery_lg_1.png" />
          <img className="w-2/5" src="/Gallery/pinkfish/gallery_lg_2.png" /> 
        </div>
        <div className="flex gap-4  mt-4"> 
          <img className=" w-2/5" src="/Gallery/pinkfish/gallery_lg_3.png" />
          <img className="w-3/5" src="/Gallery/pinkfish/gallery_lg_4.png" /> 
        </div>
        <div className="flex gap-4  mt-4"> 
          <img className="w-full" src="/Gallery/pinkfish/gallery_lg_5.png" /> 
        </div>
        <div className="flex gap-4 mt-4 "> 
          <img className=" w-3/5" src="/Gallery/pinkfish/gallery_lg_6.png" />
          <img className="w-2/5" src="/Gallery/pinkfish/gallery_lg_7.png" /> 
        </div>
        <div className="flex gap-4 mt-4 "> 
          <img className=" w-1/2" src="/Gallery/pinkfish/gallery_lg_8.png" />
          <img className="w-1/2" src="/Gallery/pinkfish/gallery_lg_9.png" /> 
        </div>
        <div className="flex gap-4 mt-4 "> 
          <img className=" w-2/5" src="/Gallery/pinkfish/gallery_lg_10.png" />
          <div className="w-3/5 flex flex-col gap-4">
          <img className="w-full" src="/Gallery/pinkfish/gallery_lg_11.png" /> 
          <img className="w-full" src="/Gallery/pinkfish/gallery_lg_12.png" /> 

          </div>
        </div>
    </div>
  </section>
);
}
export default Gallery;
