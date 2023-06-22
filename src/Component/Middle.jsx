import React, { useState } from "react";
import { Middle_data } from "./Categories_Card_data";
import man from "./Image/man.jpg";
import girls from "./Image/girls.jpg";
import { RxDotFilled } from "react-icons/rx";
function Middle() {
  const slides = [
    {
      image: man,
      content:"Men",
      discount:"SALE UP TO 30% OFF",
    },
    {
      image: girls ,
      content:"Women",
      discount:"SALE UP TO 50% OFF",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };


  // setTimeout(() => {
  //   goToSlide(slideIndex);
  // }, 2000);


  return (
    <div className="flex flex-col lg:flex-row  lg:relative lg:items-center lg:justify-center w-full">
      <div className="flex flex-col">
        <div className="bg-[#FFFCF3] flex flex-col p-3 md:flex md:relative md:justify-center lg:flex relative md:bg-[#F6F6F6] lg:justify-center lg:transition-all lg:duration-200 lg:w-full lg:h-Full lg:mt-5">
          <img
            className=" hidden md:flex md:object-contain md:w-full  lg:object-contain lg:w-full lg:h-[470px] "
            src={`${slides[currentIndex].image}`}
           
          />
          <div className="md:absolute md:w-full md:h-full md:left-22 md:items-center lg:absolute lg:w-full lg:h-full flex lg:left-32 items-center">
            <div className="p-10 flex justify-center items-center content-center lg:flex flex-col lg:py-2 ">
              <p className="flex justify-center content-center text-black text-[30px] lg:mb-[4px] ">
                Lifestyle Collection
              </p>
              <br />
              <p className="w-full flex justify-center text-black text-[60px] mb-[0px] font-bold ">
                {`${slides[currentIndex].content}`}
                <br />
              </p>
              <p className=" flex justify-center text-[20px] content-center text-black font-semibold lg:text-[30px] lg:mt-[3px]">
              {`${slides[currentIndex].discount}`}
                <br />
              </p>
              <p className="w-full text-[20px] text-black flex justify-center content-center lg:hidden">
                Get free Shipping on order over
              </p>
              <p className="text-[20px] text-black flex justify-center lg:hidden">
                $99.00
              </p>
              <div className="flex justify-center mt-3 lg:flex lg:items-start w-full">
                <span className="bg-[#E94560] px-2 py-1 flex items-center  text-[16px]  lg:px-6 lg:py-2  text-white font-semibold rounded-lg cursor-pointer ">
                  Show Now
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bg-[#FFFCF3] flex flex-col p-3 lg:flex relative md:bg-[#F6F6F6] lg:justify-center  lg:mt-5">
          <img
            className=" hidden md:flex lg:object-contain lg:w-full lg:h-[470px] "
            src={girls}
          />
          <div className=" lg:absolute lg:w-full lg:h-full flex lg:left-32 items-center">
            <div className="p-10 flex justify-center items-center content-center lg:flex flex-col lg:py-4 ">
              <p className="flex justify-center content-center text-black text-[30px] lg:mb-[4px]">
                Lifestyle Collection
              </p>
              <br />
              <p className="w-full flex justify-center text-black text-[60px] mb-[0px] font-bold ">
                Men
                <br />
              </p>
              <p className=" flex justify-center text-[20px] content-center text-black font-semibold lg:text-[30px] lg:mt-[3px]">
                SALE UP TO 30% OFF
                <br />
              </p>
              <p className="w-full text-[20px] text-black flex justify-center content-center lg:hidden">
                Get free Shipping on order over
              </p>
              <p className="text-[20px] text-black flex justify-center lg:hidden">
                $99.00
              </p>
              <div className="flex justify-center mt-3 lg:flex lg:items-start w-full">
                <span className="bg-[#E94560] flex items-center justify-center text-[18px] lg:py-2 lg:w-[100px]  text-white font-semibold rounded-lg ">
                  Show Now
                </span>
              </div>
            </div>
          </div>
        </div> */}
        <div className="hidden lg:flex  lg:justify-center ">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer "
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="p-2 flex flex-col bg-[#F6F6F6] md:flex md:flex-row md:gap-7 md:justify-center lg:flex lg:flex-col">
          {Middle_data.map((e) => {
            return (
              <div className=" flex items-center relative flex-row ">
                <img
                  className=" box-border  w-full object-contain  lg:h-[50%] lg:w-[100%]"
                  src={e.imgscr}
                />
                <div
                  className="absolute flex w-full h-full top-4 left-2 lg:left-12 lg:top-1
                 items-center"
                >
                  <div className="flex flex-col ">
                    <p className="text-black ">{e.cname}</p>

                    <p className="text-black">{e.best_sale}</p>
                    <p className="text-black">
                      {e.add_info}
                      <br />
                    </p>

                    <p className=" text-lg mt-5 lg:cursor-pointer">
                      <b>Show Now</b>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Middle;
