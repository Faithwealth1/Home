import React from 'react';

const HeroSection = () => {
  const handleConsultationClick = () => {
    // Handle consultation form or navigation
    console.log('Free consultation requested');
  };

  return (
    <section className="flex flex-col overflow-hidden relative z-0 min-h-[739px] w-full px-20 pt-[227px] pb-0 max-md:max-w-full max-md:px-5 max-md:pt-[100px] max-md:pb-0">
      <img
        src="cloud tech bg.png"
        alt="Cloud technology background"
        className="absolute h-full w-full object-cover inset-0"
      />
      
      <div className="relative z-10 flex w-[630px] max-w-full flex-col items-stretch">
        <div className="w-full text-white">
          <h1 className="text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
            Empowering Businesses with Innovative Cloud Solutions
          </h1>
          <p className="text-xl font-medium leading-[30px] mt-4 max-md:max-w-full">
            VonTech Group delivers tailored cloud strategies and services to
            optimize your operations, enhance security, and drive growth.
          </p>
        </div>
        
        <button 
          onClick={handleConsultationClick}
          className="justify-center items-center bg-[#FFE21B] flex gap-2 text-xl text-[#181818] font-semibold mt-10 px-8 py-3 rounded-[20px] hover:bg-[#FFD700] transition-colors max-md:px-5 w-fit"
        >
          Free Consultation
        </button>
      </div>
      
      <img
        src="deco wave pattern.svg"
        alt="Decorative wave pattern"
        className="aspect-[7.35] object-contain w-full absolute z-0 left-0 bottom-0 max-md:max-w-full"
      />
    </section>
  );
};

export default HeroSection;
