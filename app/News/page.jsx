/* eslint-disable */
'use client'
import '../../styles/contact.css';
import { scrollTop } from '../../components/jsfile';
import Link from 'next/link';
import {  motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer, textContainer, textVariant, textVariant2, zoomIn } from "../../utils/motion";
import PartyBanner from '../../sections/PartyBanner';
import { Footer, NewNavbar } from '../../components';

const Event = () => {
  return (
    // <div className='event_main_container text-white  min-h-screen min-w-screen  overflow-hidden'>
      
    //     <div className='event_container '>
          
    //     <Navbar selectItem='news' />
    //     <div className='flex flex-col gap-6  pb-11 pt-6 header_container_aboutus border-b-[1px] border-white w-full '>
              
    //           <motion.h1
    //            variants={textVariant2}
    //            initial="hidden"
    //            whileInView="show"
    //            viewport={{ once: true }}
    //           className='about_us_main_header'>latest news</motion.h1>
    //       </div>
    //     <div className='flex justify-center mt-11'>
    //         <div className='flex flex-col gap-6  w-[90%] md:w-[60%] '>
               
    //             <div className='flex gap-4 flex-col   '>
    //           <motion.div
    //             variants={planetVariants('right')}
    //             initial="hidden"
    //            whileInView="show"
    //            viewport={{ once: true }}
    //           className='border border-white  flex'>
    //           <div className='basis-1/3 border-r-[1px] pl-6 p-2 border-white box_text'> 28 APR 2023</div>
    //           <div className='basis-2/3 p-2 pl-6 box_text'> WORLD OF BUZZ</div>
    //           </motion.div>
    //           <motion.p
    //            variants={textVariant2}
    //            initial="hidden"
    //            whileInView="show"
    //            viewport={{ once: true }}
    //           className='news_heading'>“What the Fish?!” Here’s How Pinkfish is Serving M’sia’s HOTTEST Music & Arts Festival in 2023!</motion.p>
    //             <div className=' '>
    //                 <motion.img
    //                  variants={zoomIn(.1,1)}
    //                  initial="hidden"
    //                 whileInView="show"
    //            viewport={{ once: true }}
    //            className='w-[100%]'
    //                 src="/news_img1.png"/>
    //             </div>
    //             <div className='flex flex-col gap-3'>
    //               <motion.p
    //                variants={textVariant2}
    //                initial="hidden"
    //                whileInView="show"
    //            viewport={{ once: true }}
    //               className='news_text'>We all know how unpredictable Malaysia’s weather can be. But come rain or shine, Malaysians know how to party when there’s a music 
    //               festival! From mountain tops to the beachside, we’ll travel far and wide to immerse ourselves in new experiences, music and fun!</motion.p>
    //               <motion.p
    //                variants={textVariant2}
    //                initial="hidden"
    //                whileInView="show"
    //            viewport={{ once: true }}
    //               className='news_text'>So if you’re raring to kick off the year right with an exciting art and music-filled festival, then this one taking place at 
    //               the end of April will definitely be worth the hype!</motion.p>
    //             </div>
    //             <motion.div
    //              variants={planetVariants('right')}
    //              initial="hidden"
    //             whileInView="show"
    //            viewport={{ once: true }}
    //             className='contact_submit'>
    //      <a href='https://worldofbuzz.com/what-the-fish-heres-how-pinkfish-is-serving-msias-hottest-music-arts-festival-in-2023/' target='_blank'>
    //       <button className="flex " type="submit">Read more </button>
    //       </a>
    //       </motion.div>
    //             </div>
    //             <div className='flex gap-4 flex-col   '>
    //           <motion.div
    //             variants={planetVariants('right')}
    //             initial="hidden"
    //            whileInView="show"
    //            viewport={{ once: true }}
    //           className='border border-white  flex'>
    //           <div className='basis-1/3 border-r-[1px] pl-6 p-2 border-white box_text'> 28 APR 2023</div>
    //           <div className='basis-2/3 p-2 pl-6 box_text'> WORLD OF BUZZ</div>
    //           </motion.div>
    //           <motion.p
    //            variants={textVariant2}
    //            initial="hidden"
    //            whileInView="show"
    //            viewport={{ once: true }}
    //           className='news_heading'>TYGA Gives Malaysian Fans A Taste On August 9 </motion.p>
    //             <div className=' '>
    //                 <motion.img
    //                  variants={zoomIn(.1,1)}
    //                  initial="hidden"
    //                 whileInView="show"
    //            viewport={{ once: true }}
    //            className='w-[100%]'
    //                 src="/news_img2.png"/>
    //             </div>
    //             <div className='flex flex-col gap-3'>
    //               <motion.p
    //                variants={textVariant2}
    //                initial="hidden"
    //                whileInView="show"
    //            viewport={{ once: true }}
    //               className='news_text'>The Compton rapper will turn Zepp Kuala Lumpur in Rack City.</motion.p>
    //             </div>
    //             <motion.div
    //              variants={planetVariants('right')}
    //              initial="hidden"
    //             whileInView="show"
    //            viewport={{ once: true }}
    //             className='contact_submit'>
    //                 <a href='https://liftedasia.com/article/tyga' target='_blank'>
    //       <button className="flex " type="submit">Read more</button>
    //       </a>
    //       </motion.div>
    //             </div>
    //             <div className='flex gap-4 flex-col   mb-3'>
    //           <motion.div
    //             variants={planetVariants('right')}
    //             initial="hidden"
    //            whileInView="show"
    //            viewport={{ once: true }}
    //           className='border border-white  flex'>
    //           <div className='basis-1/3 border-r-[1px] pl-6 p-2 border-white box_text'> 28 APR 2023</div>
    //           <div className='basis-2/3 p-2 pl-6 box_text'> WORLD OF BUZZ</div>
    //           </motion.div>
    //           <motion.p
    //            variants={textVariant2}
    //            initial="hidden"
    //            whileInView="show"
    //            viewport={{ once: true }}
    //           className='news_heading'>US Rapper Tyga Is Coming To Malaysia For The First Time In August</motion.p>
    //             <div className=' '>
    //                 <motion.img
    //                  variants={zoomIn(.1,1)}
    //                  initial="hidden"
    //                 whileInView="show"
    //            viewport={{ once: true }}
    //            className='w-[100%]'
    //                 src="/news_img3.png" />
    //             </div>
    //             <div className='flex flex-col gap-3'>
    //               <motion.p
    //                variants={textVariant2}
    //                initial="hidden"
    //                whileInView="show"
    //            viewport={{ once: true }}
    //               className='news_text'>The Compton-born rapper, Micheal Ray Stevenson, better known as Tyga, which stands for Thank You God Always, will be performing 
    //               on 9 August at Zepp Kuala Lumpur.Known for hit songs such as Taste (feat. Offset), Loco Contigo (feat. J. Balvin), Chosen (feat. Ty Dolla $ign), and Ayo, 
    //               Tyga rose to fame in the early 2000s, and gained success after the release of his debut studio album, Careless World: Rise of the Last King, in 2011.</motion.p>
                 
    //             </div>
    //             <motion.div
    //              variants={planetVariants('right')}
    //              initial="hidden"
    //             whileInView="show"
    //            viewport={{ once: true }}
    //             className='contact_submit'>
    //               <a href='https://says.com/my/entertainment/tyga-is-coming-to-malaysia-in-august' target='_blank'>
    //       <button className="flex " type="submit">Read more
       
    //       </button>
    //       </a>
    //       </motion.div>
    //             </div>
               
    //         </div>
    //     </div>
    //     </div>
     
    
    //   <div className='bg-[#FF0086] flex flex-col  '>
    //             <PartyBanner  />
    //             <div className='mt-11 mb-0 items-center flex self-center gap-6' >
    //             <a href='https://www.facebook.com/pinkfishfestival/' target="_blank"> <img  className='h-6' src='/fb_icon.svg'/></a>
    //             <a href='https://www.youtube.com/@Pinkfishfestival' target="_blank">  <img  className=' w-8 h-8' src='/yt_icon.svg'/> </a>
    //             <a href='https://www.instagram.com/pinkfishfestival/' target="_blank"> <img className='h-6' src='/ig_icon.svg'/></a>
    //             <a href='https://www.tiktok.com/@pinkfishfestival' target="_blank">  <img className='h-6' src='/tt_icon.svg'/></a>
    //             </div>
    //             <Footer />
    //           </div>    
    // </div>
    <>
 <NewNavbar />
    <div className="news_main_container min-h-screen flex flex-col  text-white   ">
    
    <div className='flex flex-col gap-6 pt-11 pb-24'>
      <h1 className='contact_text_header  self-center'>What’s bubblin’?</h1>
      <h1 className='contact_sub_text text-center w-[60%] self-center'>Stay in the loop with Pinkfish's latest news here!</h1>
    </div>
    <div className='flex flex-col self-center w-[70%] gap-6'>
      <div className='flex md:flex-row flex-col  gap-3'>
    <div className='basis-1/3 border rounded border-white flex flex-col gap-4'>
      <img src='/news_img_1.png' alt='news image' />
      <div className='flex flex-col gap-4 self-center pb-4 w-[90%]'>
    <h1 className='news_card_header '>“What the Fish?!” Here’s How Pinkfish is Serving M’sia’s HOTTEST Music & 
    Arts Festival in 2023!</h1>

    <p className='news_card_text'>We all know how unpredictable Malaysia’s weather can be. But come rain or shine, 
    Malaysians know how to party when there’s a music festival! From mountain tops to the beachside, we’ll travel far and wide to 
    immerse ourselves in new experiences, music and fun!</p>
    <p className='news_card_text'>
So if you’re raring to kick off the year right with an exciting art and music-filled festival, then this one taking place 
at the end of April will definitely be worth the hype!
    </p>
    <a href='https://worldofbuzz.com/what-the-fish-heres-how-pinkfish-is-serving-msias-hottest-music-arts-festival-in-2023/' target='_blank'>
    <button type='button' className='news_read_btn'>Read More</button>
    </a>
    </div>
    </div>
    <div className='basis-1/3 border rounded border-white flex flex-col gap-4'>
      <img src='/news_img_2.png' alt='news image' />
      <div className='flex flex-col gap-4 self-center pb-4 w-[90%]'>
    <h1 className='news_card_header '>TYGA Gives Malaysian Fans A Taste On August 9 </h1>

    <p className='news_card_text'>The Compton rapper will turn Zepp Kuala Lumpur in Rack City.</p>
    <a href='https://liftedasia.com/article/tyga' target='_blank'>
    <button type='button' className='news_read_btn'>Read More</button>
    </a>
    </div>
    </div>
    <div className='basis-1/3 border rounded border-white flex flex-col gap-4'>
      <img src='/news_img_3.png' alt='news image' />
      <div className='flex flex-col gap-4 self-center pb-4 w-[90%]'>
    <h1 className='news_card_header '>US Rapper Tyga Is Coming To Malaysia For The First Time In August</h1>

    <p className='news_card_text'>The Compton-born rapper, Micheal Ray Stevenson, better known as Tyga, which 
    stands for Thank You God Always, will be performing on 9 August at Zepp Kuala Lumpur.Known for hit songs 
    such as Taste (feat. Offset), Loco Contigo (feat. J. Balvin), Chosen (feat. Ty Dolla $ign), and Ayo, Tyga rose to fame in 
    the early 2000s, and gained success after the release of his debut studio album, Careless World: Rise of the Last King, in 2011.</p>
    <a href='https://says.com/my/entertainment/tyga-is-coming-to-malaysia-in-august' target='_blank'>
    <button type='button' className='news_read_btn'>Read More</button>
    </a>
    </div>
    </div>
      </div>
      <div className='flex md:flex-row flex-col md:justify-center  gap-3'>

    <div className='basis-1/3 border rounded border-white flex flex-col gap-4'>
      <img src='/news_img_4.png' alt='news image' />
      <div className='flex flex-col gap-4 self-center pb-4 w-[90%]'>
    <h1 className='news_card_header '>Rapping Sensation Tyga Live in KL This August! Here’s Why You Can’t Miss It</h1>

    <p className='news_card_text'>Music lovers konfem have noticed that tons of international musicians are performing in 
    Malaysia for the first time in 2023, kan? Well, we just got word that another renowned artist is coming to Malaysian shores 
    very soon!

</p>
    <p className='news_card_text'>
    Malaysians, get ready to “Go Loko” for Tyga Live in Kuala Lumpur, coming to you this 9 August in Zepp KL!

    </p>
    <a href='https://worldofbuzz.com/get-a-taste-of-rapping-sensation-tyga-live-in-kl-this-august-heres-why-you-cant-miss-it/' target='_blank'>
    <button type='button' className='news_read_btn'>Read More</button>
    </a>
    </div>
    </div>
    <div className='basis-1/3 border rounded border-white flex flex-col gap-4'>
      <img src='/news_img_5.png' alt='news image' />
      <div className='flex flex-col gap-4 self-center pb-4 w-[90%]'>
    <h1 className='news_card_header '>Scream “Merdeka” & check out these events happening in KL in August 2023</h1>

    <p className='news_card_text'>After being shunned by multiple international artists, Tyga will be gracing our country this 
    August 2023. This will be the “Rise of the Last King” rapper’s first performance in Malaysia. After Pinkfish made its announcement, 
    Phase 1 and VVIP tickets were sold out within minutes.
</p>
<a href='https://sg.style.yahoo.com/scream-merdeka-check-events-happening-080015810.html' target='_blank'>
    <button type='button' className='news_read_btn'>Read More</button>
    </a>
    </div>
    </div>
    <div className='basis-1/3 border rounded border-white flex flex-col gap-4'>
      <img src='/news_img_6.png' alt='news image' />
      <div className='flex flex-col gap-4 self-center pb-4 w-[90%]'>
    <h1 className='news_card_header '>Tyga is set to perform in Kuala Lumpur for the first time this August 2023.</h1>

    <p className='news_card_text'>Tyga, the talented rapper hailing from Compton, California, is set to make his debut in 
    Malaysia with an electrifying performance in August 2023 at the prestigious Zepp Kuala Lumpur. This will be the first
     time ever that the rapper and songwriter, whose real name is Michael Ray Stevenson, will be performing in Malaysia, 
    and fans are in for a treat as they get to witness the rapper’s unique style and high energy trap and hip-hop hits.
</p>
<a href='https://www.lifestyleasia.com/kl/whats-on/events-whats-on/all-you-need-to-know-about-tyga-concert-in-kuala-lumpur/' target='_blank'>
    <button type='button' className='news_read_btn'>Read More</button>
    </a>
    </div>
    </div>
      </div>
      <div className='flex md:flex-row flex-col md:justify-center  gap-3'>

<div className='basis-1/3 border rounded border-white flex flex-col gap-4'>
  <img src='/news_img_7.png' alt='news image' />
  <div className='flex flex-col gap-4 self-center pb-4 w-[90%]'>
<h1 className='news_card_header '>PINKFISH FESTIVAL: ALL-NEW MUSIC & ARTS FESTIVAL IN M’SIA (30 APR 23)</h1>

<p className='news_card_text'>Pinkfish Festival is a brand new festival that’ll be taking place on 30th April 2023 at 
the spectacular Surf Beach at Sunway Lagoon.


</p>
<p className='news_card_text'>
Aiming to encapsulate the vibrant arts and music scene in Malaysia, Pinkfish Festival also celebrates creativity, 
expression and community in new and exciting ways!

</p>
<a href='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjllJOYzvyBAxV2RmwGHUm1BsUQFnoECBoQAQ&url=https%3A%2F%2Funcoverasia.com%2Fpinkfish-festival-malaysia%2F&usg=AOvVaw0MGdA37wdQCViK8zbbw2Oi&opi=89978449 ' target='_blank'>
<button type='button' className='news_read_btn'>Read More</button>
</a>
</div>
</div>
<div className='basis-1/3 border rounded border-white flex flex-col gap-4'>
  <img src='/news_img_8.png' alt='news image' />
  <div className='flex flex-col gap-4 self-center pb-4 w-[90%]'>
<h1 className='news_card_header '>Get Hooked On The Beat: Pinkfish Festival Makes A Splash With DJ Snake And More!</h1>

<p className='news_card_text'>Get ready to ride the wave of creativity and music at the brand new Pinkfish Festival 
this Sunday! Happening on April 30th, 2023 at the stunning Surf Beach in Sunway Lagoon,
 this festival is all about celebrating the vibrant arts and music scene in Malaysia in a fresh and exciting way.
</p>
<a href='https://risemalaysia.com.my/pinkfish-festival-2023-sunway/' target='_blank'>
<button type='button' className='news_read_btn'>Read More</button>
</a>
</div>
</div>
<div className='basis-1/3 border rounded border-white flex flex-col gap-4'>
  <img src='/news_img_9.png' alt='news image' />
  <div className='flex flex-col gap-4 self-center pb-4 w-[90%]'>
<h1 className='news_card_header '>Pinkfish Festival, Malaysia, April 2023</h1>

<p className='news_card_text'>On Labour Day Weekend, Hitman Solutions and Happymoon hosted the Pinkfish Music & Arts 
Festival, a curated creative music and arts experience that gave Malaysians and visitors from other parts of the region 
an absolutely unforgettable experience. The highly charged day featured live performances from both local and 
foreign artists as well as art installations created by a variety of multi-talented artists at Surf Beach in Sunway Lagoon.
</p>
<a href='https://destina.my/pinkfish-festival-malaysia-april-2023/' target='_blank'>
<button type='button' className='news_read_btn'>Read More</button>
</a>
</div>
</div>
  </div>
    </div>
    
    

</div>
<Footer/>
<img className=' md:block hidden right-[0] top-[70%]  fixed  ' src='/fish.png' />
</>
  )
}

export default Event