import React from "react"

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// import Swiper modules
import { Autoplay, Pagination } from "swiper/modules"

// import swiper styles
import "swiper/css"
import "swiper/css/pagination"

import Charti from "../Charti/Charti"
import Chartii from "../Chartii/Chartii"

function FlowChart() {
  const slides = [
  {
    title: "Opposition Proceeding Of Trademark",
    desc: `Once a trademark is Accepted & Advertised, third parties have 4 months to file an opposition. The applicant must then submit a Counter Statement within 2 months or the application is Abandoned.`,
    chart: Charti,
  },
  {
    title: "Trademark Registration Procedure",
    desc: `If contested, both parties follow a strict evidence cycle: the Opponent has 2 months to file, the Applicant has 2 months to respond, and the Opponent has 1 month for a final rebuttal.`,
    chart: Chartii,
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
          {slides.map((slide, index) => {
            const ChartComponent = slide.chart;

            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">

                  {/* Left: Text */}
                  <div className="w-full md:w-1/2 text-center md:text-left px-4">
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 flex items-center gap-3">
                      {slide.title}
                    </h1>

                    <p className="mt-4 text-lg text-slate-600 text-justify">
                      {slide.desc}
                    </p>
                  </div>

                  {/* Right: Chart */}
                  <div className="w-full md:w-1/2 h-[60vh] sm:h-[70vh] md:h-[80vh]">
                    <ChartComponent />
                  </div>

                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default FlowChart