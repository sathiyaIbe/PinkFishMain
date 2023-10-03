'use client'
import "../styles/home.css"
import gsap from "gsap"
import {  motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer, textContainer, textVariant, textVariant2 } from "../utils/motion";
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
  function mouseOut(e){
    var tl = gsap.timeline();
    tl.to(e, {scale: 1, duration: .5, ease: "power1.inOut"});
  }



function mouseDown (e) {

  var tl = gsap.timeline();
  tl.to(e, {scale: 1.05, duration: .5, ease: "power1.inOut"});
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
        <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}   draggable="false" className="min-w-[400px] h-[260px]" src="/Gallery/gallery_1.png" />
        <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} draggable="false" className="w-[400px] h-[400px]" src="/Gallery/gallery_2.png" />
      </div>
      <div className="flex flex-col gap-8  ">
        <div className="flex flex-col gap-8  gallery_container text-white p-4 ">
          <div className="gap-8 flex w-[400px] h-[275px] flex-col">
          <h1 className="gallery_header w-1/2 mt-11 ">Gallery</h1>
          <p className="gallery_text">Step into our Gallery and let the music do the talking! Get a glimpse
            of the epic performances and wild moments that make concerts with us an unforgettable ride.</p>
         
            </div>
        </div>
        <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} draggable="false" className="w-[440px] h-[354px]" src="/Gallery/gallery_3.png" />
      </div>
      <div className="flex flex-col gap-8 ">
        <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} draggable="false" className="min-w-[400px] h-[690px]" src="/Gallery/gallery_4.png" />
      </div>
    <div className="flex flex-col gap-8 ">
        <div className="flex gap-8">
        <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} draggable="false" className="" src="/Gallery/gallery_5.png" />
        <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} draggable="false" src="/Gallery/gallery_6.png" />
        </div>
        <div className="w-[840px] h-[308px]">

        <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} draggable="false" className="object-contain" src="/Gallery/gallery_7.png"/>
        </div>
      </div> 
      <div className="flex flex-col gap-8 ">
      
        <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} draggable="false" src="/Gallery/gallery_8.png" />
     
        <div className="w-[400px] h-[400px]">

        <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} draggable="false" className="object-contain" src="/Gallery/gallery_9.png"/>
        </div>
      </div> 
      <div className="flex flex-col gap-8 ">
      
    
   
      <div className="w-[400px]">

      <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} draggable="false" className=" h-[690px]" src="/Gallery/gallery_10.png"/>
      </div>
    </div> 
    <div className="flex flex-col gap-8 ">
       
        <div className="w-[840px]">

        <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} draggable="false" className="object-contain" src="/Gallery/gallery_11.png"/>
        </div>
        <div className="flex gap-8  ">
        <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} draggable="false" className="" src="/Gallery/gallery_12.png" />
        <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} draggable="false" src="/Gallery/gallery_13.png" />
        </div>
      </div> 
 
</div>

</div> */}
<h1 className="gallery_header text-center  mb-6">Gallery</h1>

<div id="container" className="flex md:hidden overflow-x-scroll">

  {/* <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} src='/left_arrow.svg' className="absolute bottom-[-45%] left-[85%]" onClick={()=>{sideScroll('right',25,100,414)}}/>
  <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} src='/right_arrow.svg' className="absolute bottom-[-45%] left-[5%]" onClick={()=>{sideScroll('left',25,100, 414)}} /> */}
  <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} className="w-ful object-none" src="/Gallery/pinkfish/gallery_lg_1.png" />
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_2.png" /> 
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_3.png" />
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_4.png" /> 
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_5.png" /> 
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_6.png" />
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_7.png" />
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_8.png" />
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_9.png" />
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_10.png" />
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_11.png" />
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_12.png" />
</div>

    <div className=" hidden md:block  flex flex-col overflow-hidden  pt-4 pb-4">
<div className="flex flex-col ">
        <div className="  flex self-center gap-4 mt-11 "> 
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} 
             
             onMouseOver={(e)=>mouseDown(".image_11")} onMouseLeave={(e)=>mouseOut(".image_11")} className="image_11 object-none" src="/Gallery/pinkfish/gallery_lg_1.png" />
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} 
              
                onMouseOver={(e)=>mouseDown(".image_12")} onMouseLeave={(e)=>mouseOut(".image_12")} className="object-none image_12 " src="/Gallery/pinkfish/gallery_lg_2.png" /> 
        </div>
        <div className="flex self-center gap-4  mt-4"> 
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} onMouseOver={(e)=>mouseDown(".image_13")} onMouseLeave={(e)=>mouseOut(".image_13")} className=" object-none image_13" src="/Gallery/pinkfish/gallery_lg_3.png" />
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} onMouseOver={(e)=>mouseDown(".image_14")} onMouseLeave={(e)=>mouseOut(".image_14")} className=" object-none image_14" src="/Gallery/pinkfish/gallery_lg_4.png" /> 
        </div>
        <div className="flex self-center gap-4  mt-4"> 
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} onMouseOver={(e)=>mouseDown(".image_15")} onMouseLeave={(e)=>mouseOut(".image_15")} className="object-none image_15" src="/Gallery/pinkfish/gallery_lg_5.png" /> 
        </div>
        <div className="flex self-center gap-4 mt-4 "> 
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} onMouseOver={(e)=>mouseDown(".image_16")} onMouseLeave={(e)=>mouseOut(".image_16")} className="object-none image_16" src="/Gallery/pinkfish/gallery_lg_6.png" />
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} onMouseOver={(e)=>mouseDown(".image_17")} onMouseLeave={(e)=>mouseOut(".image_17")} className="object-none image_17" src="/Gallery/pinkfish/gallery_lg_7.png" /> 
        </div>
        <div className="flex self-center gap-4 mt-4 "> 
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} onMouseOver={(e)=>mouseDown(".image_18")} onMouseLeave={(e)=>mouseOut(".image_18")} className=" object-none image_18" src="/Gallery/pinkfish/gallery_lg_8.png" />
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} onMouseOver={(e)=>mouseDown(".image_19")} onMouseLeave={(e)=>mouseOut(".image_19")} className="object-none image_19" src="/Gallery/pinkfish/gallery_lg_9.png" /> 
        </div>
        <div className="flex self-center gap-4 mt-4 "> 
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} onMouseOver={(e)=>mouseDown(".image_20")} onMouseLeave={(e)=>mouseOut(".image_20")} className=" object-none image_20" src="/Gallery/pinkfish/gallery_lg_10.png" />
          <div className="w-3/5 flex flex-col gap-4">
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} onMouseOver={(e)=>mouseDown(".image_21")} onMouseLeave={(e)=>mouseOut(".image_21")} className="object-none image_21" src="/Gallery/pinkfish/gallery_lg_11.png" /> 
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} onMouseOver={(e)=>mouseDown(".image_22")} onMouseLeave={(e)=>mouseOut(".image_22")} className="object-none image_22" src="/Gallery/pinkfish/gallery_lg_12.png" /> 

          </div>
        </div>
        </div>
    </div>
  </section>
);
}
export default Gallery;
