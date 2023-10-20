'use client'
import '../../../styles/live.css';
import { scrollTop } from '../../../components/jsfile';
import Link from 'next/link';
import Navbar from '../../../sections/Navbar';
import FooterLive from '../../../sections/FooterLive'
const Event = () => {
  return (
    <>
    <Navbar />
    <div className=' text-white  min-h-screen min-w-screen  overflow-hidden'>
        <div className='event_container_live pt-11'>
        <h1 className='event_main_header_live pt-11 opacity'>Events</h1>
        <div className='flex justify-center mt-11'>
            <div className='flex flex-col gap-6   w-[80%] '>
                {/* <div className='flex flex-col md:flex-row gap-4 first_container_live  '>
                <div className='basis-2/3 flex flex-col gap-6 order-2 md:order-1'>
                    <hr  className='hr_line_footer_live'/>
                    <p className='date_event_main_text_live'>9 august 2023</p>
                    <h1 className='event_section_header_live'>lil pump Live in kl</h1>
                    <p className='event_section_text_live'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                     velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Link href='/Events-Individual'>
                    <button className="buy_ticket_event_main_live flex w-fit " type="button">Reach Out 
                    <svg className="mt-1 md:mt-2 ml-1" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 9.46351L4.67453 5.78896C5.10849 5.35501 5.10849 4.64489 4.67453 4.21094L1 0.536377" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </button>
      </Link>
                </div>
                <div className='basis-1/3 order-1 md:order-2'>
                    <img src="/event_main_1.png"/>
                </div>
                </div> */}
                <div className='flex gap-4 flex-col md:flex-row  '>
                <div className='basis-2/3 flex flex-col order-2 md:order-1 gap-6'>
                    <hr  className='hr_line_footer_live'/>
                    <p className='date_event_main_text_live'>9 august 2023</p>
                    <h1 className='event_section_header_live'>TYGA LIVE IN KL</h1>
                    <p className='event_section_text_live'>Compton-born Tyga is coming to Malaysia for the first time and he's ready to make it “Bedrock”! Tyga, which stands for 
                    Thank You God Always brings his arsenal of hits, from ‘Rack City’, to ‘Ice Cream Man’ to ‘Taste’ from the blast from the radio to his live shows. You know you’re in for 
                    a party with him taking the stage this Wednesday, the 8th of August 2023 in Zepp KL!

                    </p>
                    <Link href='/Live/EventsIndividual' className='soldout_ticket_event_main_live w-fit'>
                    <button className="  flex  p-1 " type="button">Sold Out
                    <svg className="mt-1 md:mt-1 ml-2 mr-2 " width="6" height="12" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 9.46351L4.67453 5.78896C5.10849 5.35501 5.10849 4.64489 4.67453 4.21094L1 0.536377" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </button>
      </Link>
                </div>
                <div className='basis-1/3 order-1 md:order-2'>
                    <img src="/Live/event_main_2.png"/>
                </div>
                </div>
            </div>
        </div>
        </div>
        <div className='flex justify-center'>
        <button onClick={()=>{scrollTop()}} className='top_btn_live flex  self-center mt-11 mb-11 '>
      back to top 
     <img className='mt-0 md:mt-1 ml-2' src='/Live/uparrow.png'/>

      </button>
      </div>
      <div className='flex flex-col event_bottom_container_live p-6 gap-5 pl-8'>
        <h1 className='event_bottom_header_live mt-11'>pinkfish live</h1>
        <h1 className='event_bottom_main_hearder_live'>we bring the music,
you bring the hype</h1>
<Link href='Contact' className=' black_btn_live mb-11'>
<button className=' flex p-3 md:p-2 ' type="button">have a question?  talk to us 
<svg className="mt-0 md:mt-2 ml-2 " width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.29806 5.73623L5.20055 1.63873L6.28069 0.558594L12.2222 6.50012L6.28069 12.4416L5.20055 11.3615L9.29806 7.26401H0V5.73623H9.29806Z" fill="white" />
</svg>
</button>
</Link>
      </div>


    </div>
    <FooterLive />
    </>
  )
}

export default Event