import '../../styles/contact.css';
import '../../styles/home.css';

const EventsIndividual = () => {
  return (
    <div className=' flex justify-center '>
        <div className='w-[80%] flex flex-col gap-8 mt-11 '>
   
    <div className='flex flex-col md:flex-row gap-4 '>
    <div className='md:basis-2/3 order-2 md:order-1 flex flex-col gap-6'>
        
        <p className='date_event_main_text'>9 august 2023</p>
        <h1 className='event_section_header'>TYGA live in kl</h1>
        <p className='event_section_text'>Compton-born Tyga is coming to Malaysia for the first time and he's ready to make 
        it “Bedrock”! Tyga, which stands for Thank You God Always brings his arsenal of hits, from ‘Rack City’, to 
        ‘Ice Cream Man’ to ‘Taste’ from the blast from the radio to his live shows. You know you’re in for a party with him taking 
        the stage this Wednesday, the 8th of August 2023 in Zepp KL!
        </p>
        <div className='buy_ticket_event_main flex justify-center w-[40%] md:w-[15%]'>
        <button className=" flex  " type="button">Sold Out
        <svg className="mt-1 ml-2" width="6" height="12" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 9.46351L4.67453 5.78896C5.10849 5.35501 5.10849 4.64489 4.67453 4.21094L1 0.536377" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</button>
</div>
    </div>
    <div className=' md:basis-1/3 order-1 md:order-2'>
        <img src="/event_individual_1.png"/>
    </div>
    </div>
    <div className='flex flex-col md:flex-row gap-4 mb-11 md:mb-24'>
        <div className='img_container flex flex-col gap-4 md:basis-2/3 order-2 md:order-1'>
            <img src="/event_individual_2.png"  alt='img'/>
            <img src="/event_individual_3.png"  alt='img'/>

        </div>
        <div className='md:basis-1/3 h-fit md:sticky md:top-[20%]  flex justify-center order-1 md:order-2'>
            <div className='details_container p-2 flex justify-center'>
                <div className='w-[90%] md:w-[80%] mb-6'>
                <h1 className='details_header'>Details</h1>
                <div className='flex flex-col gap-2'>
                <h1 className='details_sub_header'>Schedule</h1>
                <p className='details_text'>8pm</p>
                </div>
                <div className='flex flex-col gap-2'>
                <h1 className='details_sub_header'>venue</h1>
                <p className='details_text'>zepp kuala lumpur</p>
                </div>
                <div className='flex flex-col gap-2'>
                <h1 className='details_sub_header'>rating</h1>
                <p className='details_text'>8pm</p>
                </div>
                <div className='flex flex-col gap-2'>
                <h1 className='details_sub_header'>Schedule</h1>
                <p className='details_text'>18+</p>
                </div>
                <div className='buy_ticket_event_main flex justify-center '>
                <button className=" flex justify-center " type="button">Sold Out </button>
               
        <svg className="mt-1 ml-2" width="6" height="12" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 9.46351L4.67453 5.78896C5.10849 5.35501 5.10849 4.64489 4.67453 4.21094L1 0.536377" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
</div>
            </div>
        </div>
    </div>
    {/* <div className='flex flex-col'>
        <h1 className='more_shows_header'>more shows</h1>
      <div className='flex gap-11 mb-11 image_container_home '>
            <div className='flex flex-col gap-4'>
        <img className='max-w-[300px] md:max-w-[100%]' src="/event_individual_5.png"  alt='img'/>
        <div className=" text-white flex flex-col gap-4">
            <h1 className="event_text_date2">9 august 2023</h1>
            <h1 className="event_text2">Tyga live in kl</h1>
            <div className='buy_ticket_event_main flex justify-center w-[50%]  md:w-[25%]'>
            <button className=" flex p-1 " alt="button">Buy Tickets
              <svg className="self-center ml-2 md:mt-1" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9.46357L4.67453 5.78903C5.10849 5.35507 5.10849 4.64496 4.67453 4.211L1 0.536438" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              </button>
              </div>
          </div>
          </div>
          <div className='flex flex-col gap-4'>
        <img className='max-w-[300px]  md:max-w-[100%]' src="/event_individual_5.png"  alt='img'/>
        <div className=" text-white flex flex-col gap-4">
            <h1 className="event_text_date2">9 august 2023</h1>
            <h1 className="event_text2">lil pump Live in kl</h1>
            <div className='buy_ticket_event_main flex justify-center w-[50%] md:w-[25%]'>
            <button className=" flex p-1 " alt="button">Buy Tickets
              <svg className="self-center ml-2 md:mt-1 mt-0" width="6" height="12" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9.46357L4.67453 5.78903C5.10849 5.35507 5.10849 4.64496 4.67453 4.211L1 0.536438" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              </button>
              </div>
          </div>
          </div>
        </div>
          {/*  <div className="flex flex-row justify-center gap-4 self-center md:w-[90%] md:hidden image_container_home  mt-11 mb-11">
        <div className=" h-full ml-48 md:ml-11   ">
           <div className='flex flex-col gap-4 w-[100%]'>
        <img className='w-[500px]' src="/event_individual_5.png"  alt='img'/>
        <div className=" text-white flex flex-col gap-4">
            <h1 className="event_text_date2">9 august 2023</h1>
            <h1 className="event_text2">Tyga live in kl</h1>
            <div className='buy_ticket_event_main flex justify-center w-[25%]'>
            <button className=" flex p-1 " alt="button">Buy Tickets
              <svg className="self-center ml-2 mt-1" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9.46357L4.67453 5.78903C5.10849 5.35507 5.10849 4.64496 4.67453 4.211L1 0.536438" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              </button>
              </div>
          </div>
          </div>
        </div>
        <div className="container">
        <img className="" src="/event_2.png"/>
      </div> 
         <div className=" w-[100%]">
          <img className="w-full min-h-full hidden md:block" src="/event_2.png" />
          <img className=" max-h-[380px] max-w-[308px] md:hidden" src="/event_2.png" />
          <div className="text-block text-white flex flex-col gap-2 md:gap-4">
            <h1 className="event_text_date2">9 august 2023</h1>
            <h1 className="event_text2">Tyga live in kl</h1>
            <button className="event_tickets2" alt="button">Buy Tickets
              <svg className="self-center ml-2 mt-1" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9.46357L4.67453 5.78903C5.10849 5.35507 5.10849 4.64496 4.67453 4.211L1 0.536438" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              </button>
          </div>
        </div>
      </div> 
    </div> */}
    </div>
    </div>


    
  )
}

export default EventsIndividual