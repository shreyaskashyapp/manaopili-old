import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules"; // Import the Scrollbar module
import "swiper/css";
import "swiper/css/scrollbar"; // Import Swiper Scrollbar CSS
import useWindowSize from "../../hooks/useWindowSize";
import ArrowDownIcon from "../Svgs/ArrowDownIcon";
import type { Swiper as SwiperClass } from "swiper"; // Import Swiper type for useRef
import "./css/horizontal.css";
import { Link } from "react-router-dom";

const HorizontalScrollSection: React.FC = () => {
  const { width } = useWindowSize();
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Ref to hold the Swiper instance
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div
      className="border-t border-white border-b flex md:h-auto flex-col scroll-container"
      onMouseEnter={() => setIsHovered(true)} // Show scrollbar on hover
      onMouseLeave={() => setIsHovered(false)} // Hide scrollbar when not hovering
    >
      {width < 1024 ? (
        <div className="relative w-full">
          <Swiper
            onSlideChange={(swiper) => setProgress(swiper.progress)} // Update progress on slide change
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Assign Swiper instance to ref
            spaceBetween={0} // Set spaceBetween to 0 to remove right margin
            slidesPerView={1.5}
            className="w-full"
            modules={[Scrollbar]} // Register Scrollbar as a module
            scrollbar={{ draggable: true }} // Enable the Swiper scrollbar
          >
            <SwiperSlide className="box">
            <Link to="/survey">
              <div className="sm:p-2  flex flex-col h-full justify-between box-content ">
                <div className="flex flex-col gap-14">
                  <div className="font-semibold lg:text-[50px] xs:text-[40px] leading-[55px] text-yellow-text">
                    Get Started
                  </div>
                  <div className="lg:text-[29px] xs:text-[20px] font-tahoma leading-8 font-normal">
                    Begin your journey with our tailored assessment.
                  </div>
                  <div className="flex justify-end ">
                  <ArrowDownIcon color="#ffff" />
                </div>
                </div>
                
              </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide className="box">
            <Link to="/services">
              <div className="sm:p-2  flex flex-col h-full justify-between box-content ">
                <div className="flex flex-col gap-10">
                  <div className="font-semibold lg:text-[50px] xs:text-[40px] leading-[55px] text-yellow-text">
                    What We Do
                  </div>
                  <div className="lg:text-[29px] xs:text-[20px] font-tahoma leading-8 font-normal">
                    Explore our comprehensive suite of AI-driven solutions to boost efficiency.
                  </div>
                  <div className="flex justify-end ">
                  <ArrowDownIcon color="#ffff" />
                </div>
                </div>
                
              </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide className="box">
            <Link to="/about">
              <div className="sm:p-2  flex flex-col h-full justify-between box-content ">
                <div className="flex flex-col gap-10">
                  <div className="font-semibold lg:text-[50px] xs:text-[40px] leading-[55px] text-yellow-text">
                    About
                  </div>
                  <div className="lg:text-[29px] xs:text-[20px] font-tahoma leading-8 font-normal">
                    Learn why industry leaders choose us to achieve their operational goals.
                  </div>
                  <div className="flex justify-end ">
                  <ArrowDownIcon color="#ffff" />
                </div>
                </div>
               
              </div>
              </Link>
            </SwiperSlide>
          </Swiper>

          {/* Custom Scrollbar Container outside the Swiper */}
          <div className="absolute bottom-0 left-0 w-full">
            <div className={`scrollbar ${isHovered ? "scrollbar-visible" : ""}`}>
              <div
                className="scrollbar-inner"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>
        </div>
      ) : (
        // Regular static layout for larger screens
        <div className="inline-flex w-full">
          <div className="lg:w-1/3 border-r border-white  xs:w-screen xs:p-8 box cursor-pointer sm:pl-20 sm:pr-20 sm:pt-20">
          <Link to="/survey">
            <div className="flex flex-col h-full justify-between box-content">
              <div className="flex flex-col gap-[60px]">
                <div className="font-semibold text-[50px] leading-[55px] text-yellow-text">
                  Get Started
                </div>
                <div className="text-[29px] font-tahoma leading-10 font-normal">
                  Begin your journey with our tailored assessment.
                </div>
              </div>
              <div className="flex justify-end">
                <ArrowDownIcon color="#ffff" />
              </div>
            </div>
            </Link>
          </div>

          <div className="lg:w-1/3 border-r border-white  xs:w-screen xs:p-8 box cursor-pointer sm:pl-16 sm:pr-20 sm:pt-20">
          <Link to="/services">
            <div className="flex flex-col h-full justify-between box-content">
              <div className="flex flex-col gap-[60px]">
                <div className="font-semibold text-[50px] leading-[55px] text-yellow-text">
                  What We Do
                </div>
                <div className="text-[29px] font-tahoma leading-10 font-normal">
                  Explore our comprehensive suite of AI-driven solutions to boost efficiency.
                </div>
              </div>
              <div className="flex justify-end">
                <ArrowDownIcon color="#ffff" />
              </div>
            </div>
            </Link>
          </div>

          <div className="lg:w-1/3  xs:w-screen xs:p-8 box cursor-pointer sm:pl-16 sm:pr-20 sm:pt-20">
          <Link to="/about">
            <div className="flex flex-col h-full justify-between box-content">
              <div className="flex flex-col gap-[60px]">
                <div className="font-semibold text-[50px] leading-[55px] text-yellow-text">
                  About
                </div>
                <div className="text-[29px] font-tahoma leading-10 font-normal">
                  Learn why industry leaders choose us to achieve their operational goals.
                </div>
              </div>
              <div className="flex justify-end">
                <ArrowDownIcon color="#ffff" />
              </div>
            </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HorizontalScrollSection;
