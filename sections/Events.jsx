import "../styles/home.css"
const Events = () => (
  <section id="Events" className="event_section  mt-11 mb-24">
    <div className="w-[100%] flex flex-col  ">
      <h1 className=" event_header mb-11 mt-24">EVENTS</h1>
      <div className="flex flex-row justify-center gap-4  w-[100%]  image_container_home  mt-11">
        {/* <div className="container h-full ml-48 md:ml-11   md:basis-3/4 ">
          <img className="w-full hidden md:block h-fit " src="/event_1.png" />
          <img className=" object-contain h-[380px] max-w-[308px] md:hidden" src="/event_1_m.png" />

          <div className="text-block text-white flex flex-col gap-2 md:gap-4">
            <h1 className="event_text_date">9 august 2023</h1>
            <h1 className="event_text">lil pump live in kl</h1>
            <button className="event_tickets" alt="button">Reach Out 
              <svg className="self-center ml-2 mt-1" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9.46357L4.67453 5.78903C5.10849 5.35507 5.10849 4.64496 4.67453 4.211L1 0.536438" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              </button>
          </div>
        </div> */}
        {/* <div className="container">
        <img className="" src="/event_2.png"/>
      </div> */}
        <div className="container  ">
          <img className="max-h-[668px] max-w-[803px] hidden md:block" src="/event_2.png" />
          <img className=" max-h-[384px] max-w-[308px] md:hidden self-center" src="/event_2_Mob.png" />
          <div className="text-block text-white flex flex-col gap-2 md:gap-4">
            <h1 className="event_text_date2">9 august 2023</h1>
            <h1 className="event_text2">Tyga live in kl</h1>
            <button className="event_tickets2" alt="button">Sold Out
              <svg className="self-center ml-2 mt-1" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9.46357L4.67453 5.78903C5.10849 5.35507 5.10849 4.64496 4.67453 4.211L1 0.536438" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              </button>
          </div>
        </div>
      </div>
      {/* <button className="buy_ticket flex w-fit self-center mt-11 " type="button">see more shows
        <svg className="mt-2 ml-1 " width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.29806 5.73623L5.20055 1.63873L6.28069 0.558594L12.2222 6.50012L6.28069 12.4416L5.20055 11.3615L9.29806 7.26401H0V5.73623H9.29806Z" fill="white" />
        </svg>
        </button> */}
    </div>
  </section>
);
export default Events;
