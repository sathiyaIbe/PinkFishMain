import { Footer, Navbar } from '../../components';
import '../../styles/contact.css';  
const Terms_Condition = () => {
  return (
    <div className='text-white  min-h-screen min-w-screen bg-[#FF0086]  overflow-hidden   flex flex-col'>
        <Navbar />
<h1 className='tnc_header mt-11'>terms & Conditions</h1>
<div className='border-b-2 flex justify-center pb-24'>
<ul className='text_tnc_container  '>
    <li className='flex flex-col gap-2'>
        <h1 className='tnc_text_header'>1. Acceptance of Terms </h1>
        <p className='tnc_text'>By accessing or using the Pinkfish website (the "Website"), you agree to comply with and be bound by these Terms 
        and Conditions. If you do not agree to these terms, please do not use the Website. </p>
    </li>
    <li className='flex flex-col gap-2'>
        <h1 className='tnc_text_header'>2. Use of Content  </h1>
        <p className='tnc_text'>All content on this Website, including but not limited to text, graphics, images, audio, and video clips, is the property 
        of Pinkfish and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, display, or otherwise use any content 
        from this Website without the express written consent of Pinkfish. </p>
    </li>
    <li className='flex flex-col gap-2'>
        <h1 className='tnc_text_header'>3. User Conduct</h1>
        <p className='tnc_text'>a. You agree not to use the Website for any unlawful or prohibited purpose.</p>
        <p className='tnc_text'>b. You will not engage in any activities that could harm, disable, overburden, or impair the Website or interfere with other users' access to the Website.</p>
        <p className='tnc_text'>c. You will not attempt to gain unauthorised access to any part of the Website or any other systems or networks connected to the Website. </p>

    </li>
    <li className='flex flex-col gap-2'>
        <h1 className='tnc_text_header'> 4. Privacy </h1>
        <p className='tnc_text'>By using the Website, you consent to the collection and use of your information as described in the Privacy Policy. </p>
    </li>
    <li className='flex flex-col gap-2'>
        <h1 className='tnc_text_header'>5. Termination </h1>
        <p className='tnc_text'>Pinkfish reserves the right to terminate or suspend your access to the Website at its sole discretion and without notice, for any reason, including a violation of these Terms and Conditions.</p>
    </li>
    <li className='flex flex-col gap-2'>
        <h1 className='tnc_text_header'>6. Changes to Terms </h1>
        <p className='tnc_text'>Pinkfish may revise these Terms and Conditions at any time. Your continued use of the Website after any such changes will constitute your acceptance of the revised terms.  </p>
    </li>
    <li className='flex flex-col gap-2'>
        <h1 className='tnc_text_header'>7. Disclaimer of Liability  </h1>
        <p className='tnc_text'>The Website is provided "as is'' and Pinkfish makes no warranties or representations about the accuracy or completeness of the content. Pinkfish shall not be liable for any direct, indirect, 
        incidental, consequential, or punitive damages arising out of your use of the Website.</p>
    </li>
    <li className='flex flex-col gap-2'>
        <h1 className='tnc_text_header'>8. Governing Law  </h1>
        <p className='tnc_text'>8.1. The Organiser shall not be responsible for loss or damage of property or belongings. Please keep all items at your own risk.  </p>
    </li>

    <li className='tnc_text '>If you have any questions about these Terms and Conditions, please contact us at info@pinkfishfestival.com</li>
     <li className='tnc_text '>By accessing and using the Pinkfish website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</li>
     <li style={{fontWeight:700}} className='tnc_text italic font-[900]' >Last Updated: 14 September 2023</li>

</ul>
</div>
<div className='pt-6'>
<Footer />
</div>
    </div>
  )
}

export default Terms_Condition