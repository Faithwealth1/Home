import React, { useState } from 'react';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "VonTech Group enabled my start-up company to rapidly scale our operations and bring innovative products to the market at a very fast rate.",
      name: "Richard Henry",
      role: "Growing Startup",
      avatar: "man.png"
    },
    {
      text: "VonTech Group helped me optimize my company's cloud infrastructure, resulting in significant cost savings and improved efficiency.",
      name: "Daniel Billy",
      role: "Cloud Organisation",
      avatar: "daniel.png"
    },
    {
      text: "My financial institution partnered with VonTech Group to implement robust security measures and ensure compliance in their cloud environment.",
      name: "Dora Florence",
      role: "Financial Institution",
      avatar: "dora.png"
    }
  ];

  const StarRating = () => (
    <div className="self-stretch flex items-center gap-0.5 my-auto">
      {[...Array(4)].map((_, i) => (
        <img
          key={i}
          src="star.svg"
          alt="Star"
          className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
        />
      ))}
      <img
        src="star.svg"
        alt="Half star"
        className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
      />
    </div>
  );

  return (
    <section className="bg-[rgba(242,244,243,1)] z-0 w-full overflow-hidden pt-10 pb-[120px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <h2 className="text-center text-4xl font-bold tracking-[-0.1px] bg-clip-text self-center">
          Client success story
        </h2>
        
        <div className="flex w-full flex-col items-stretch mt-10 max-md:max-w-full">
          <div className="flex w-full items-center gap-5 justify-start md:overflow-x-auto flex-nowrap max-md:max-w-full max-md:flex-wrap">
            {testimonials.map((testimonial, index) => (
              <article key={index} className="border self-stretch min-w-60 overflow-hidden w-[402px] flex-shrink-0 my-auto px-[22px] py-8 rounded-[20px] border-solid border-[#E0E0E0] hover:shadow-lg transition-shadow max-md:px-5">
                <blockquote className="text-[#097484] text-base font-normal leading-6">
                  {testimonial.text}
                </blockquote>
                
                <div className="flex w-full items-start gap-4 mt-10 flex-wrap">
                  <div className="flex items-center gap-4 flex-1 min-w-[200px]">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name} profile`}
                      className="aspect-[1] object-contain w-[60px] flex-shrink-0 rounded-[100px]"
                    />
                    <div className="flex flex-col items-stretch justify-center flex-1">
                      <div className="text-[#097484] text-xl font-medium">
                        {testimonial.name}
                      </div>
                      <div className="text-[#6A6C6B] text-lg font-normal">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <StarRating />
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="self-center flex items-center gap-1 mt-4">
            {[...Array(4)].map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`aspect-[1/1] self-stretch flex w-3 shrink-0 h-3 my-auto rounded-[1000px] transition-colors ${
                  index === activeTestimonial ? 'bg-[#097484]' : 'bg-[rgba(215,209,209,1)]'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
