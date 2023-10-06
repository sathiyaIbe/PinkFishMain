'use client'
import "../styles/home.css"
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const Gallery = () => {
     return (
          <section className="mt-24">
         <h1 className="gallery_header text-center  mb-6">Gallery</h1>
               <div id="container" className="flex md:hidden overflow-x-scroll overflow-hidden">
                    <motion.img
                         variants={fadeIn("up", "tween", .1, 1)}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_1.png" />
                    <motion.img
                         variants={fadeIn("up", "tween", .1, 1)}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_2.png" />
                    <motion.img
                         variants={fadeIn("up", "tween", .1, 1)}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_3.png" />
                    <motion.img
                         variants={fadeIn("up", "tween", .1, 1)}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_4.png" />
                    <motion.img
                         variants={fadeIn("up", "tween", .1, 1)}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_5.png" />
                    <motion.img
                         variants={fadeIn("up", "tween", .1, 1)}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_6.png" />
                    <motion.img
                         variants={fadeIn("up", "tween", .1, 1)}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_7.png" />
                    <motion.img
                         variants={fadeIn("up", "tween", .1, 1)}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_8.png" />
                    <motion.img
                         variants={fadeIn("up", "tween", .1, 1)}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_9.png" />
                    <motion.img
                         variants={fadeIn("up", "tween", .1, 1)}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_10.png" />
                    <motion.img
                         variants={fadeIn("up", "tween", .1, 1)}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_11.png" />
                    <motion.img
                         variants={fadeIn("up", "tween", .1, 1)}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true }} className="w-full object-none" src="/Gallery/pinkfish/gallery_lg_12.png" />
               </div>

               <div className=" hidden md:block  flex flex-col overflow-hidden  pt-4 pb-4">
                    <div className="flex flex-col ">
                         <div className="  flex self-center gap-4 mt-11 ">
                              <motion.div
                                   variants={fadeIn("up", "tween", .1, 1)}
                                   initial="hidden"
                                   whileInView="show"
                                   viewport={{ once: true }}

                                   className="image_11">
                                   <img className=" object-none" src="/Gallery/pinkfish/gallery_lg_1.png" />
                              </motion.div>
                              <motion.div
                                   variants={fadeIn("up", "tween", .1, 1)}
                                   initial="hidden"
                                   whileInView="show"
                                   viewport={{ once: true }}
                                   className="image_11">
                                   <img className="object-none image_12 " src="/Gallery/pinkfish/gallery_lg_2.png" />
                              </motion.div>
                         </div>
                         <div className="flex self-center gap-4  mt-4">
                         <motion.div
                                   variants={fadeIn("up", "tween", .1, 1)}
                                   initial="hidden"
                                   whileInView="show"
                                   viewport={{ once: true }}
                                   className="image_11">
                              <img
                                   className=" object-none " src="/Gallery/pinkfish/gallery_lg_3.png" />
                                   </motion.div>
                                   <motion.div
                                   variants={fadeIn("up", "tween", .1, 1)}
                                   initial="hidden"
                                   whileInView="show"
                                   viewport={{ once: true }}
                                   className="image_11">
                              <img className=" object-none image_14" src="/Gallery/pinkfish/gallery_lg_4.png" />
                              </motion.div>
                         </div>
                         <motion.div
                         variants={fadeIn("up", "tween", .1, 1)}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true }}
                         className="flex self-center gap-4 image_11 mt-4">
                              <img className="object-none image_15" src="/Gallery/pinkfish/gallery_lg_5.png" />
                         </motion.div>
                         <div className="flex self-center gap-4 mt-4 ">
                         <motion.div
                                   variants={fadeIn("up", "tween", .1, 1)}
                                   initial="hidden"
                                   whileInView="show"
                                   viewport={{ once: true }}
                                   className="image_11">
                              <img className="object-none image_16" src="/Gallery/pinkfish/gallery_lg_6.png" />
                              </motion.div>
                              <motion.div
                                   variants={fadeIn("up", "tween", .1, 1)}
                                   initial="hidden"
                                   whileInView="show"
                                   viewport={{ once: true }}
                                   className="image_11">
                              <img className="object-none image_17" src="/Gallery/pinkfish/gallery_lg_7.png" />
                              </motion.div>
                         </div>
                         <div className="flex self-center gap-4 mt-4 ">
                         <motion.div
                                   variants={fadeIn("up", "tween", .1, 1)}
                                   initial="hidden"
                                   whileInView="show"
                                   viewport={{ once: true }}
                                   className="image_11">
                              <img className=" object-none image_18" src="/Gallery/pinkfish/gallery_lg_8.png" />
                              </motion.div>
                              <motion.div
                                   variants={fadeIn("up", "tween", .1, 1)}
                                   initial="hidden"
                                   whileInView="show"
                                   viewport={{ once: true }}
                                   className="image_11">
                              <img className="object-none image_19" src="/Gallery/pinkfish/gallery_lg_9.png" />
                              </motion.div>
                         </div>
                         <div className="flex self-center gap-4 mt-4 ">
                         <motion.div
                                   variants={fadeIn("up", "tween", .1, 1)}
                                   initial="hidden"
                                   whileInView="show"
                                   viewport={{ once: true }}
                                   className="image_11">
                              <img className=" object-none image_20" src="/Gallery/pinkfish/gallery_lg_10.png" />
                              </motion.div>
                              <div className="w-3/5 flex flex-col gap-4">
                              <motion.div
                                   variants={fadeIn("up", "tween", .1, 1)}
                                   initial="hidden"
                                   whileInView="show"
                                   viewport={{ once: true }}
                                   className="image_11">
                                   <img className="object-none image_21" src="/Gallery/pinkfish/gallery_lg_11.png" />
                                   </motion.div>
                              <motion.div
                                   variants={fadeIn("up", "tween", .1, 1)}
                                   initial="hidden"
                                   whileInView="show"
                                   viewport={{ once: true }}
                                   className="image_11">
                                   <img className="object-none image_22" src="/Gallery/pinkfish/gallery_lg_12.png" />
                                   </motion.div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
export default Gallery;
