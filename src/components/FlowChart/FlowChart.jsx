import React from "react";

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper modules
import { Autoplay, Pagination } from "swiper/modules";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Charti from "../Charti/Charti";
import Chartii from "../Chartii/Chartii";

import TrademarkImage from "../../assets/img-2.jpeg";

function FlowChart() {
  const slides = [
    {
      title: "Trademark Opposition Process",
      desc: `A trademark application, once accepted and published in the Trademark Journal, becomes open to public scrutiny. Any third party who believes the mark may conflict with their rights can file an opposition within 4 months of publication.
            The applicant must submit a Counter Statement within 2 months of receiving the opposition. Thereafter, both parties exchange evidence and supporting documents. The matter is then decided through a hearing before the Trademark Registry.`,
      content: <Charti />,
    },
    {
      title: "Trademark Registration Process ",
      desc: `Trademark registration is an organized process for obtaining exclusive rights to a brand name, logo, slogan, or mark. After submission, the Trademark Registry examines the application to ensure that it meets all legal requirements. If objections are raised, the applicant must respond and may have to attend a hearing. The trademark is published in the Trademark Journal for a period of four months after it has been accepted, which gives third parties the opportunity to file an opposition. If there is no opposition or if the opposition is effectively defended, the trademark is registered and a Registration Certificate is issued.`,
      content: <Chartii />,
    },
    {
      fullImage: true,
      content: (
        <img
          src={TrademarkImage}
          alt="Trademark Process"
          className="w-full h-full object-contain"
        />
      ),
    },
  ];

  return (
    <div className="bg-img2 min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-7xl">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          className="flow-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {slide.fullImage ? (
                // Full image slide
                <div className="h-[80vh] flex items-center justify-center">
                  {slide.content}
                </div>
              ) : (
                // Normal slides
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  {/* Left: Text */}
                  <div className="w-full md:w-1/2 text-center md:text-left px-4">
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
                      {slide.title}
                    </h1>

                    <p className="mt-4 text-lg text-slate-600 text-justify">
                      {slide.desc}
                    </p>
                  </div>

                  {/* Right: Chart */}
                  <div className="w-full md:w-1/2 h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center">
                    {slide.content}
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default FlowChart;