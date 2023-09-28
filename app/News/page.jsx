/* eslint-disable */
'use client'
import '../../styles/contact.css';
import { scrollTop } from '../../components/jsfile';
import Link from 'next/link';
import { Footer, Navbar } from '../../components';
import {  motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer, textContainer, textVariant, textVariant2, zoomIn } from "../../utils/motion";
import PartyBanner from '../../sections/PartyBanner';
const Event = () => {
  return (
    <div className='event_main_container text-white  min-h-screen min-w-screen  overflow-hidden'>
      
        <div className='event_container '>
        <Navbar selectItem='news' />
        <div className='flex flex-col gap-6  pb-11 pt-6 header_container_aboutus border-b-[1px] border-white w-full '>
              
              <motion.h1
               variants={textVariant2}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
              className='about_us_main_header'>latest news</motion.h1>
          </div>
        <div className='flex justify-center mt-11'>
            <div className='flex flex-col gap-6  w-[90%] md:w-[70%] '>
               
                <div className='flex gap-4 flex-col   '>
              <motion.div
                variants={planetVariants('right')}
                initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
              className='border border-white  flex'>
              <div className='basis-1/3 border-r-[1px] pl-6 p-2 border-white box_text'> 28 APR 2023</div>
              <div className='basis-2/3 p-2 pl-6 box_text'> WORLD OF BUZZ</div>
              </motion.div>
              <motion.p
               variants={textVariant2}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
              className='news_heading'>“What the Fish?!” Here’s How Pinkfish is Serving M’sia’s HOTTEST Music & Arts Festival in 2023!</motion.p>
                <div className=' '>
                    <motion.img
                     variants={zoomIn(.1,1)}
                     initial="hidden"
                    whileInView="show"
               viewport={{ once: true }}
                    src="/news_img1.png"/>
                </div>
                <div className='flex flex-col gap-3'>
                  <motion.p
                   variants={textVariant2}
                   initial="hidden"
                   whileInView="show"
               viewport={{ once: true }}
                  className='news_text'>We all know how unpredictable Malaysia’s weather can be. But come rain or shine, Malaysians know how to party when there’s a music 
                  festival! From mountain tops to the beachside, we’ll travel far and wide to immerse ourselves in new experiences, music and fun!</motion.p>
                  <motion.p
                   variants={textVariant2}
                   initial="hidden"
                   whileInView="show"
               viewport={{ once: true }}
                  className='news_text'>So if you’re raring to kick off the year right with an exciting art and music-filled festival, then this one taking place at 
                  the end of April will definitely be worth the hype!</motion.p>
                </div>
                <motion.div
                 variants={planetVariants('right')}
                 initial="hidden"
                whileInView="show"
               viewport={{ once: true }}
                className='contact_submit'>
          <button className="flex " type="submit">Read more
          
          </button>
          </motion.div>
                </div>
                <div className='flex gap-4 flex-col   '>
              <motion.div
                variants={planetVariants('right')}
                initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
              className='border border-white  flex'>
              <div className='basis-1/3 border-r-[1px] pl-6 p-2 border-white box_text'> 28 APR 2023</div>
              <div className='basis-2/3 p-2 pl-6 box_text'> WORLD OF BUZZ</div>
              </motion.div>
              <motion.p
               variants={textVariant2}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
              className='news_heading'>TYGA Gives Malaysian Fans A Taste On August 9 </motion.p>
                <div className=' '>
                    <motion.img
                     variants={zoomIn(.1,1)}
                     initial="hidden"
                    whileInView="show"
               viewport={{ once: true }}
                    src="/news_img2.png"/>
                </div>
                <div className='flex flex-col gap-3'>
                  <motion.p
                   variants={textVariant2}
                   initial="hidden"
                   whileInView="show"
               viewport={{ once: true }}
                  className='news_text'>The Compton rapper will turn Zepp Kuala Lumpur in Rack City.</motion.p>
                </div>
                <motion.div
                 variants={planetVariants('right')}
                 initial="hidden"
                whileInView="show"
               viewport={{ once: true }}
                className='contact_submit'>
          <button className="flex " type="submit">Read more
          
          </button>
          </motion.div>
                </div>
                <div className='flex gap-4 flex-col   mb-3'>
              <motion.div
                variants={planetVariants('right')}
                initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
              className='border border-white  flex'>
              <div className='basis-1/3 border-r-[1px] pl-6 p-2 border-white box_text'> 28 APR 2023</div>
              <div className='basis-2/3 p-2 pl-6 box_text'> WORLD OF BUZZ</div>
              </motion.div>
              <motion.p
               variants={textVariant2}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
              className='news_heading'>US Rapper Tyga Is Coming To Malaysia For The First Time In August</motion.p>
                <div className=' '>
                    <motion.img
                     variants={zoomIn(.1,1)}
                     initial="hidden"
                    whileInView="show"
               viewport={{ once: true }}
                    src="/news_img3.png"/>
                </div>
                <div className='flex flex-col gap-3'>
                  <motion.p
                   variants={textVariant2}
                   initial="hidden"
                   whileInView="show"
               viewport={{ once: true }}
                  className='news_text'>The Compton-born rapper, Micheal Ray Stevenson, better known as Tyga, which stands for Thank You God Always, will be performing 
                  on 9 August at Zepp Kuala Lumpur.Known for hit songs such as Taste (feat. Offset), Loco Contigo (feat. J. Balvin), Chosen (feat. Ty Dolla $ign), and Ayo, 
                  Tyga rose to fame in the early 2000s, and gained success after the release of his debut studio album, Careless World: Rise of the Last King, in 2011.</motion.p>
                 
                </div>
                <motion.div
                 variants={planetVariants('right')}
                 initial="hidden"
                whileInView="show"
               viewport={{ once: true }}
                className='contact_submit'>
          <button className="flex " type="submit">Read more
          
          </button>
          </motion.div>
                </div>
                <motion.div
                variants={planetVariants('right')}
                initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
              className='border border-white   flex mb-6'>
              <p className='text-center p-2 pl-[45%] box_text  underline'> Next &nbsp;    &gt;</p>
              
              </motion.div>
            </div>
        </div>
        </div>
     
    
      <div className='bg-[#FF0086] flex flex-col  '>
                <PartyBanner  />
                <div className='mt-11 mb-0  flex self-center gap-6'  href="/Events-Individual">
                  <img src='/fb_icon.svg'/>
                  <img src='/yt_icon.svg'/>
                  <img src='/ig_icon.svg'/>
                  <img src='/tt_icon.svg'/>
                </div>
                <Footer />
              </div>    
    </div>
  )
}

export default Event