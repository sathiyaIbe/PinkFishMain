'use client'
import "../styles/home.css"
import gsap from "gsap";
import {  motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer, textContainer, textVariant, textVariant2 } from "../utils/motion";
const Gallery2 = () =>{
  function mouseOut(e){
    var tl = gsap.timeline();
    tl.to(e, {scale: 1, duration: .5, ease: "power1.inOut"});
  }



function mouseDown (e) {
  var tl = gsap.timeline();
  tl.to(e, {scale: 1.05, duration: .5, ease: "power1.inOut"});
}
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
// function mouseDown (e) {
//     oldX = e.pageX;
//     dragged = false 
//   }
//  function mouseMove() {
//    dragged = true 
//   }

// function mouseUp(e) {
// var divOverlay =   document.getElementById('container')
//         if (dragged == true && e?.pageX < oldX) {
//             sideScroll(divOverlay,'right',25,300,900);
//         } else if (dragged == true && e?.pageX > oldX) {
//             sideScroll(divOverlay,'left',25,100, 900);          
//         }    
// }
  
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


    <div className=" hidden md:block  flex flex-col overflow-hidden  pt-4 pb-4">
<div className="flex flex-col ">
        <div className="flex self-center gap-4 mt-11 "> 
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} onMouseOver={(e)=>mouseDown(".image_11")} onMouseLeave={(e)=>mouseOut(".image_11")} className=" object-none image_11" src="/Gallery/pinkLive_lg_1.png" />
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} onMouseOver={(e)=>mouseDown(".image_2")} onMouseLeave={(e)=>mouseOut(".image_2")} className="object-none image_2" src="/Gallery/pinkLive_lg_2.png" /> 
        </div>
        <div className="flex self-center gap-4  mt-4"> 
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} onMouseOver={(e)=>mouseDown(".image_3")} onMouseLeave={(e)=>mouseOut(".image_3")} className=" object-none image_3" src="/Gallery/pinkLive_lg_3.png" />
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} onMouseOver={(e)=>mouseDown(".image_4")} onMouseLeave={(e)=>mouseOut(".image_4")} className=" object-none image_4" src="/Gallery/pinkLive_lg_4.png" /> 
        </div>
        <div className="flex self-center gap-4  mt-4"> 
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} onMouseOver={(e)=>mouseDown(".image_5")} onMouseLeave={(e)=>mouseOut(".image_5")} className="object-none image_5" src="/Gallery/pinkLive_lg_5.png" /> 
        </div>
        <div className="flex self-center gap-4 mt-4 "> 
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} onMouseOver={(e)=>mouseDown(".image_6")} onMouseLeave={(e)=>mouseOut(".image_6")} className="object-none image_6" src="/Gallery/pinkLive_lg_6.png" />
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} onMouseOver={(e)=>mouseDown(".image_7")} onMouseLeave={(e)=>mouseOut(".image_7")} className="object-none image_7" src="/Gallery/pinkLive_lg_7.png" /> 
        </div>
        <div className="flex self-center gap-4 mt-4 "> 
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} onMouseOver={(e)=>mouseDown(".image_8")} onMouseLeave={(e)=>mouseOut(".image_8")} className="object-none image_8" src="/Gallery/pinkLive_lg_8.png" />
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} onMouseOver={(e)=>mouseDown(".image_9")} onMouseLeave={(e)=>mouseOut(".image_9")} className="object-none image_9" src="/Gallery/pinkLive_lg_9.png" /> 
        </div>
        <div className="flex self-center gap-4 mt-4 "> 
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} onMouseOver={(e)=>mouseDown(".image_10")} onMouseLeave={(e)=>mouseOut(".image_10")} className=" object-none image_10" src="/Gallery/pinkLive_lg_10.png" />
          <div className="w-3/5 flex flex-col gap-4">
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} onMouseOver={(e)=>mouseDown(".image_100")} onMouseLeave={(e)=>mouseOut(".image_100")} className="object-none image_100" src="/Gallery/pinkLive_lg_11.png" /> 
          <motion.img 
               variants={fadeIn("up", "tween",.1,1)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }} onMouseOver={(e)=>mouseDown(".image_101")} onMouseLeave={(e)=>mouseOut(".image_101")} className="object-none image_101" src="/Gallery/pinkLive_lg_12.png" /> 

          </div>
        </div>
        </div>
    </div>
  </section>
);
}
export default Gallery2;
