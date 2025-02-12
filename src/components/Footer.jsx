import { FaFacebook, FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className=" grid grid-cols-4 bg-[#104657] text-white text-center p-14 px-24 font-times">
        <div>
            <div className='border-b-[0.2px] border-white w-[60%]'>
          <h2 className="text-md text-left mb-4">Contact Us</h2>
            </div>
          <div className='space-y-6 text-left pt-10 text-[12px]'>
          <p>Email: info@GlobalJourneys.com</p>
          <p>Phone: +359 (555) 123-4567</p>
          <p>Address: 123 Adventure Lane, Wander City</p>
        </div>
        </div>
        <div>
        <div className='border-b-[0.2px] border-white w-[60%]'>
        <h2 className="text-md text-left mb-4">Quick Links</h2>
        </div>
          <div className='space-y-6 text-left text-[12px] pt-10'>
          <p>About Us</p>
          <p>Destinations</p>
          <p>Travel Packages</p>
          <p>FAQ</p>
        </div>
        </div>
        <div>

        <div className='border-b-[0.2px] border-white w-[60%]'>
          <h2 className="text-md text-left mb-4">Follow Us</h2>
        </div>
          <div className="space-y-6 text-left text-[14px] pt-10">
            <div className='flex flex-row'>
            <a href="#" className="text-xl">
              <FaFacebook />
            </a>
            <p className='pl-4'> GlobalJourneys</p>
            </div>

            <div className='flex flex-row'>
            <a href="#" className="text-xl">
              <FaTiktok /> 
            </a>
            <p className='pl-4'> @globalJourney1</p>
            </div>

            <div className='flex flex-row'>
            <a href="#" className="text-xl">
              <FaInstagram />  
            </a>
            <p className='pl-4'> @globalJourneys</p>
            </div>

            <div className='flex flex-row'>
            <a href="#" className="text-xl">
              <FaYoutube /> 
            </a>
            <p className='pl-4'> GlobalJourneysTravel</p>
            </div>
          </div>
      </div>
      <div className=" text-white text-left p-4">
        <p>Subscribe to Our Newsletter Stay updated with the latest travel deals and news. Subscribe Now</p>
        <p className='text-[10px] pt-8 font-tenor'>© 2024 Global Journeys. All rights reserved.</p>
    </div>
    </div>
    </footer>
  )
}
export default Footer;