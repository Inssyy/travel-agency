import consult from "../assets/consult.jpg";

const ConsultationForm = () => {
  return (
    <div className="relative h-screen bg-cover bg-center">
      <img
        src={consult}
        alt="Consultation"
        className="w-full h-full object-cover"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Form Container */}
      <div className="absolute inset-0 flex justify-center items-center mt-12 mb-12">
        <div className="bg-white bg-opacity-30 p-8 my-8 shadow-lg w-[60em] max-h-[50em] text-center">
          <h2 className="text-4xl py-8 font-ultra text-white">
            BOOK A CONSULTATION
          </h2>
          <p className="text-white mt-2">
            Tell us more about your desired vacation
          </p>
          {/* Textarea */}
          <textarea
            className="w-full p-3 mt-4 w-[39em] bg-white bg-opacity-60 text-black inline-white"
            rows="3"
            placeholder="Your message..."
          ></textarea>
          

          {/* Name & Email Fields */}
          <div className="grid grid-cols-2 gap-4 mx-32 mt-4">
            <div className="flex flex-col">
              <p className="text-white mt-2 mb-2">Your Names</p>
              <input
                type="text"
                className="w-full p-2 bg-white bg-opacity-60 text-black outline-none"
                placeholder="Your Names"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-white mt-2 mb-2">Email Address</p>
              <input
                type="email"
                className="w-full p-2 bg-white bg-opacity-60 text-black outline-none"
                placeholder="Email Address"
              />
            </div>
          </div>
          
          {/* Date & Time Selection */}
          <div className="grid grid-cols-2 justify-items-center gap-12 mx-32 mt-4">
            <div className="flex flex-col">
            <p className="text-white mt-2 mb-4">Choose A Date</p>
            <div className=" p-2 bg-[#3E7F8D] text-white rounded-3xl cursor-pointer">
              <input
                type="date"
                className="w-full bg-transparent outline-none"
              />
              </div>
            </div>
            <div className="flex flex-col">
            <p className="text-white mt-2 mb-4">Choose A Time</p>
            <div className=" p-2 bg-[#3E7F8D] text-black rounded-3xl cursor-pointer">
              <select className="w-full bg-transparent outline-none">
                <option>9AM</option>
                <option>10AM</option>
                <option>11AM</option>
                <option>12AM</option>
                <option>1PM</option>
                <option>2PM</option>
                <option>3PM</option>
                <option>4PM</option>
              </select>
            </div>
            </div>
          </div>

          {/* Submit Button */}
          <button className="mt-12 px-12 py-3 bg-[#3E7F8D] text-white rounded-3xl hover:bg-transparent hover:text-white hover:border-2 transition duration-300">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
