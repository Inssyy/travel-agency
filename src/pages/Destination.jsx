import backgroundImage from '../assets/maldives3.jpg';
import RomanticGetaway from '../assets/maldives2.jpg';
import ExclusivePckage from '../assets/maldives4.jpg';
import FamilyFun from '../assets/maldives1.jpg';
import { Link } from 'react-router-dom';

const Destination = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center">
        <img src={backgroundImage} alt="Maldives" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
          <h1 className="text-white font-ruthie text-5xl">Discover the Paradise of the Maldives</h1>
          <Link to="/book-free-consult">
          <button className="mt-4 font-adamina text-sm px-16 py-4 bg-[#B5D8E0] text-[#0E859F] ">BOOK NOW</button>
          </Link>
        </div>
      </div>

      {/* Packages Section */}
      <div className="bg-[#E7E7E7] mt-8">
      <div className="grid md:grid-cols-2 gap-4  ml-32">
        <div >
          <h3 className="abril-fatface-regular text-2xl py-12" >Exclusive Maldives Travel Packages</h3>
          <div className="discription tenor-sans-regular text-lg" >
          <p>Escape to the enchanting islands of the Maldives with </p>
          <p>Global Journeys Travel Agency. Dive into crystal-clear </p>
          <p>waters, stroll along pristine beaches, and unwind in </p>
          <p>luxurious resorts. Whether you're seeking romance, </p>
          <p>adventure, or pure relaxation, our tailored packages have </p>
          <p>something for everyone.</p>
          </div>
         
        </div>
        <img src={ExclusivePckage}  className="w-full max-w-[570px] max-h-[500px] h-auto" />
      </div>
      </div>
       

      {/* Romantic Getaway */}
      <div className="bg-[#FCFCFC] mt-8">
      <div className="grid md:grid-cols-2 gap-4 ">
        <img src={RomanticGetaway} alt="Romantic Getaway" className="w-full max-w-[570px] max-h-[500px] h-auto" />
        <div>
          <h3 className="text-3xl text-center font-tenor py-6">Romantic Getaway</h3>
          <div className="discription text-sm text-center tenor-sans-regular text-lg" >
          <p>Duration: 5 Days / 4 Nights </p>
          <p>Highlights: </p>
          <p>Stay in a private overwater villa</p>
          <p>Candlelit dinner on the beach </p>
          <p>Couples spa treatments </p>
          <p>Couples spa treatments</p>
          <p className='abril-fatface-regular'>Price: $3,499 per couple</p>
          </div>
          </div>
        </div>
      </div>

      {/* Family Fun */}
      <div className="bg-[#FCFCFC] my-8 ">
      <div className="grid md:grid-cols-2 gap-4 ml-16">
        <div>
        <h3 className="text-3xl text-center font-tenor pb-8 pt-12">Family Fun</h3>
          <div className="discription text-sm text-center tenor-sans-regular text-lg" >
          <p>Duration: 7 Days / 6 Nights </p>
          <p>Highlights: </p>
          <p>Accommodation in a family-friendly resort</p>
          <p>Snorkeling and water sports  </p>
          <p>activities</p>
          <p>Guided tours of local islands</p>
          <p>Kids’ club and activities</p>
          <p className='abril-fatface-regular'>Price: $4,799 per family (2 adults + 2 children)</p>
       
        </div>
         </div>
        <img src={FamilyFun} alt="Family Fun" className="w-full max-w-[590px] max-h-[490px] h-auto pl-6" />
     
      </div>
      </div>

      <div className='bg-[#3E7F8D] px-12'>
      <div className='border-x-[2em] border-[#C9E3E9] tenor-sans-regular text-white text-center px-12 py-4'>
        <h3 className='text-lg py-4'>Why Choose Global Journeys Travel Agency?</h3>
        <p>Expertly Curated Itineraries: We design each package to ensure a seamless and unforgettable experience.</p>
        <p>Personalized Service: Our travel specialists are dedicated to crafting a trip that matches your preferences and desires.</p>
        <p>Exclusive Deals: Enjoy special rates and offers unavailable elsewhere.</p>
        <p>24/7 Support: We provide round-the-clock assistance to ensure your journey is worry-free.</p>
        </div>  
        </div> 
        
        <div className='bg-white flex flex-col my-12 tenor-sans-regular text-teal-800  place-items-center text-center px-12 py-4'>
        <h3 className='text-lg py-4'>Book Your Dream Vacation Today!</h3>
        <p>Contact us at 1-800-000 or visit our website at www.GlobalJourneys.com to book your Maldives adventure. Let us help</p>
        <p>you create memories that will last a lifetime in one of the world's most stunning destinations.</p>
        <Link to="/book-free-consult">
        <button className="mt-4 font-adamina text-sm px-16 py-4 bg-[#B5D8E0] text-[#0E859F] ">BOOK NOW</button>
        </Link>
        </div>  

    </div>
  );
};

export default Destination ;
