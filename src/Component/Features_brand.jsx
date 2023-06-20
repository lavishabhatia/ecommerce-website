import React from "react";
import Alibaba from "./Image/alibaba.png";
import levis from "./Image/levis.png";
import lotto from "./Image/lotto.png";
import raymond from "./Image/raymond.png";
import samsung from "./Image/samsung.png";
function Features_brand() {
  return (
    <div>
      <div>
        <h1 className="font-bold text-lg ms-7 pt-5 lg:text-[22px] lg:ms-16 lg:pt-8">Features Brand</h1>
      </div>
      <div className="w-full my-10 lg:hidden ">
                <marquee behavior="scroll" direction="left" width="100%">
                    <div className='flex items-center gap-10 '>
                        <img src={Alibaba} width="94" height="88" className="lg:w-[180px] grayscale" />
                        <img src={levis} width="94" height="88" className='lg:w-[180px]' />
                        <img src={lotto} width="94" height="88" className='lg:w-[180px]' />
                        <img src={raymond} width="94" height="88" className='lg:w-[180px]' />
                        <img src={samsung} width="94" height="88" className='lg:w-[150px]' />
                    </div>
                </marquee>
            </div>
            <div className="hidden lg:w-full lg:my-10 ">
               
                    <div className="grid grid-rows-4 gap-10 ">
                        <img src={Alibaba} width="94" height="88" className="lg:w-[180px] grayscale" />
                        <img src={levis} width="94" height="88" className='lg:w-[180px]' />
                        <img src={lotto} width="94" height="88" className='lg:w-[180px]' />
                        <img src={raymond} width="94" height="88" className='lg:w-[180px]' />
                        <img src={samsung} width="94" height="88" className='lg:w-[150px]' />
                    </div>
            
            </div>
    </div>
  );
}
export default Features_brand;
