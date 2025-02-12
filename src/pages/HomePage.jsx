import { useRef } from 'react';   
import { Link } from "react-router-dom";
import homePic from '../assets/home-pic.jpg';
import vector from '../assets/Vector 1.png';
import { IoSearchOutline } from "react-icons/io5";
import circle from '../assets/circle.svg';
import {PopularDestinations, ContinentsData } from "../assets/assets";
import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img1 from '../assets/img1.jpg';
import email from '../assets/email-pic.jpg';

const HomePage = () => {
    const scrollRef = useRef(null);
  
    const scroll = (direction) => {
      if (scrollRef.current) {
        const scrollAmount = 300; // Adjust scroll distance
        scrollRef.current.scrollBy({ 
          left: direction === "left" ? -scrollAmount : scrollAmount, 
          behavior: "smooth" 
        });
      }
    };

  return (
    <div className="bg-[#F0FEFE]">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-white text-center" 
        style={{ backgroundImage: `url(${homePic})` }}>
        <h1 className="text-5xl font-rubik text-white opacity-70 text-stroke-black stroke-[1.5]">EXPLORE THE WORLD</h1>
        
        {/* Search Bar */}
        <div className="mt-8 bg-white opacity-70 p-2 rounded-3xl flex space-x-4 shadow-md">
          <input type="text" placeholder="Search a destination" className="p-2 w-48 text-black border-r-[1.3px] border-black" />
          <input type="date" placeholder="Start date" className="text-black opacity-70 p-2 w-[9em] border-r-[1.3px] border-black" />
          <input type="date" placeholder="End date" className="text-black opacity-70 p-2 w-[9em] rounded-md" />
          <button className="px-4 py-2 text-white rounded-3xl">
            <IconContext.Provider value={{ size: "1.3em", color: "black" }}>
              <IoSearchOutline />
            </IconContext.Provider></button>
        </div>
        <img src={vector} className='absolute inset-x-0 bottom-0'  />
        
      </div>
      
      <div className="border-b-[1px] border-black mx-48">
      <div className="p-8 text-center tenor-sans-regular text-[#104657]">
        <img src={circle} className='pb-8 place-self-center'  />
        <p>Discover the world with Global Journeys Travel Agency, your ultimate travel partner for</p>
        <p>unforgettable adventures. Whether you are looking for a relaxing beach getaway, an exhilarating</p>
        <p>mountain trek, or a cultural exploration, we offer tailor-made packages to suit your every</p>
        <p>need. Let us handle the details while you create lasting memories.</p>
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="p-8 text-center">
      <div className="border-b-[1px] border-black mx-48 mb-8">
        <h2 className="text-3xl font-md mb-6 text-[#104657]">
          Discover the most popular destinations
        </h2>
      </div>

      {/* Scrollable Destinations */}
      <div className="relative flex items-center">
        {/* Left Scroll Button */}
        <button onClick={() => scroll("left")} className=" absolute left-0 z-10 p-2 ">
          <IoArrowBackCircleOutline size={40} color="#104657" />
        </button>

        <div ref={scrollRef} className="flex overflow-x-scroll scroll-smooth space-x-8 px-32 no-scrollbar">
          {PopularDestinations.map((place) => (
            <div key={place.id} className="min-w-[300px] bg-white relative shadow-xl overflow-hidden group">
              <img src={place.img} alt={place.name} className="w-full h-full" />
              
              {/* Text Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-[#4695A7] bg-opacity-70 flex flex-col justify-center items-center text-white pt-6 group-hover:inset-0 transition-all duration-300 ease-in-out">
                <h3 className="text-lg font-semibold">{place.name}</h3>
                <p className="text-sm text-[#FFBE1A]">{place.price}</p>
                <Link to="/destination">
                <button className="mt-3 px-4 py-2 text-white border-white border-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Find out more
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button onClick={() => scroll("right")} className="absolute right-0 z-10 p-2">
          <IoArrowForwardCircleOutline size={40} color="#104657" />
        </button>
      </div>
    </div>

    {/* Testimonials */}
    <div className="bg-[#F5F5F5] text-[#104657] font-sm tenor-sans-regular p-8 text-center">
        <div className='images flex justify-center pb-8'>
         <img src={img1} className='w-[130px] h-[130px] rounded-full -mr-2' />
            <img src={img2} className='w-[100px] h-[100px] rounded-full mt-4' />
            <img src={img3} className='w-[130px] h-[130px] rounded-full -ml-2 ' />
        </div>
        <p>Discover the world with Global Journeys Travel Agency, your ultimate travel partner for unforgettable adventures.</p>
        <p>Whether you are looking for a relaxing beach getaway, an exhilarating mountain trek, or a cultural exploration, we </p>
        <p>offer tailor-made packages to suit your every need. Let us handle the details while you create lasting memories.</p>

        <Link to="/book-free-consult">
        <button className="px-12 py-4 bg-[#3E7F8D] text-white mt-8">BOOK A FREE CONCULT</button>
        </Link>
        </div>

      {/* Continent Selection */}
      <div className=" text-center">
      {/* First Row: Two Columns */}
      <div className="grid md:grid-cols-2">
        {ContinentsData.slice(0, 2).map((continent) => (
           <Link to={`/continent/${continent.name}`} key={continent.name}>
          <div
            
            className="relative bg-gray-300 h-60 flex items-center justify-center uppercase font-ultra text-white text-3xl bg-cover bg-center
            hover:text-[#104657] transition hover:duration-300" 
            style={{ backgroundImage: `url(${continent.img})` }}
          >
            <div className="bg-black bg-opacity-50 hover:bg-[#C9E3E9] hover:bg-opacity-50 w-full h-full flex items-center justify-center">
              {continent.name}
            </div>
          </div>
          </Link>
        ))}
      </div>

      {/* Second Row: Three Columns */}
      <div className="grid md:grid-cols-3">
        {ContinentsData.slice(2, 5).map((continent) => (
           <Link to={`/continent/${continent.name}`} key={continent.name}>
          <div
            
            className="relative bg-gray-300 h-56 flex items-center justify-center uppercase font-ultra text-white text-3xl bg-cover bg-center
             hover:text-[#104657] transition hover:duration-300"
            style={{ backgroundImage: `url(${continent.img})` }}
          >
            <div className="bg-black bg-opacity-50 hover:bg-[#C9E3E9] hover:bg-opacity-50 w-full h-full flex items-center justify-center">
              {continent.name}
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>

      {/* Subscribe Section */}
      <div className="relative flex justify-center items-center bg-[#D3D3D3] text-center py-16">
       
       <div className='relative z-10 -mr-4 shadow-lg' >
        <img src={email} className="w-[550px] h-[380px] shadow-lg" />
         <div className="absolute top-6 left-0 w-full bg-[#104657] bg-opacity-80 text-white p-4 text-lg font-tenor">
          WE HAVE SO MANY INCREDIBLY BEAUTIFUL PLACES TO SHOW YOU
        </div>
        </div>

        <div className="flex flex-col text-white items-center bg-[#96A4A8] max-w-[400px] min-h-[430px] z-0">
          <div className='border-b-[1px] border-white w-[80%]'>
        <h2 className="text-3xl font-tenor m-4 mt-8">Subscribe Now</h2>
        </div>
        <div className='text-[14px] font-tenor space-y-1 m-4 mb-8'>
        <p>Stay updated with the latest travel deals, exclusive</p>
        <p>offers, and inspiring travel stories. Subscribe to our</p>
        <p>newsletter and be the first to know about our special</p>
        <p>promotions and new destinations. Join our community</p>
        <p>of travel enthusiasts and embark on your next </p>
        <p>adventure with our Travel Agency.</p>
        </div>
        <input type="email" placeholder="Email address" className="p-2 w-64 font-tenor border border-gray-300" />
        <button className="px-12 py-2 bg-[#3E7F8D] font-tenor text-white m-8">SIGN UP</button>
      </div>
      </div>
    </div>
  );
};

export default HomePage;
