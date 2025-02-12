import { Link } from "react-router-dom";
import { assets, CardData } from "../assets/assets";
import europe from "../assets/europe.jpg";

const Continent = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[350px] bg-cover bg-center">
        <img src={europe} alt="Europe" className="w-full h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <h1 className="text-white font-times text-[200px] opacity-60 ">
            EUROPE
          </h1>
        </div>
      </div>

      {/* Destinations */}
      <div className="px-32 grid md:grid-cols-3 gap-8 text-center -mt-7 relative z-10">
        {CardData.map((place) => (
          <div
            key={place.id}
            className=" bg-white relative shadow-xl overflow-hidden group"
          >
            <img src={place.img} alt={place.name} className="w-full h-full " />
            {/* Text Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-[#4695A7] bg-opacity-70 flex flex-col justify-center items-center text-white pt-6
            group-hover:inset-0 transition-all duration-300 ease-in-out">
              <h3 className="text-lg font-semibold">{place.name}</h3>
              <p className="text-sm text-[#FFBE1A]">{place.price}</p>
            
            <Link to="/destination">
            <button className="mt-3 px-4 py-2 text-white border-white border-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Found out more
              </button>
              </Link>
              </div>
          </div>
        ))}
      </div>
      <div className="text-center my-8">
        <button className="px-12 py-4 bg-[#3E7F8D] font-adamina text-white">
          LOAD MORE
        </button>
      </div>

      {/* Hot Deals */}
      <div className="bg-[#FFB703] bg-opacity-55 py-8 text-center">
        <h2 className=" text-[#104657]  font-times  text-opacity-80 text-8xl text-center ">
          HOT DEALS
        </h2>
      </div>
      <div className="px-32 py-8 grid md:grid-cols-3 gap-8 text-center">
        {[
          {
            name: "Dubrovnik, Croatia",
            price: "$375",
            before: "$500",
            discount: "-25%",
            img: assets.dubrovnik,
          },
          {
            name: "Budapest, Hungary",
            price: "$480",
            before: "$600",
            discount: "-20%",
            img: assets.budapest,
          },
          {
            name: "Ksamil, Albania",
            price: "$315",
            before: "$450",
            discount: "-30%",
            img: assets.ksamil,
          },
        ].map((deal, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md overflow-hidden group"
          >
            <img
              src={deal.img}
              alt={deal.name}
              className="w-full h-full object-cover"
            />

            {/* Discount Tag */}
            <span className="absolute -top-2 right-2 bg-[#FFB703] font-rozha text-2xl text-white px-3 py-8 shadow-lg">
              {deal.discount}
            </span>

            {/* Overlay (Appears on Hover) */}
            <div
              className="absolute inset-x-0 bottom-0 bg-[#4695A7] bg-opacity-70 flex flex-col justify-center items-center text-white pt-4 
              group-hover:inset-0 transition-all duration-300 ease-in-out"
            >
              <h3 className="text-lg font-semibold mt-2">{deal.name}</h3>

              {/* Prices Section */}
              <div className="flex flex-row gap-2">
                <p className="text-sm text-red-500">From {deal.price}</p>
                <p className="text-sm  line-through">
                  {deal.before}
                </p>
              </div>

              {/* Add to Cart Button (Appears on Hover) */}
              <button className="mt-3 px-4 py-2 text-white border-white border-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Found out more
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center my-8">
        <button className="px-12 py-4 bg-[#3E7F8D] font-adamina text-white">
          LOAD MORE
        </button>
      </div>

    </div>
  );
};

export default Continent;
