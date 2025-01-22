import { Link } from "react-router-dom";

export default function HomeBanner() {
  return (
    <div className="lg:pb-[221px] xs:pb-[100px]">
      <div className="lg:text-[80px] lg:leading-[88px] xs:text-[50px] xs:leading-[58px]">
        <div>Achieve Digital Transformation</div>
        <div> with <span className="italic font-light text-[#DEFF00]">Mana’o Pili.</span></div>
      </div>
      <div className="font-tahoma lg:text-[30px] xs:text-[24px] lg:leading-[40.5px] xs:leading-[34px] pt-5 lg:max-w-[63%] pb-11">
        Optimize your operations with AI-powered cloud solutions. Streamline IT, empower teams, and elevate customer service. Take the first step towards transformation—complete our survey today.
      </div>
      <div className="flex sm:justify-start xs:justify-center">
        <button className="bg-white text-black tracking-[1.5px] lg:text-[30px] xs:text-[28px] leading-9 py-2 px-4 hover:bg-[#DEFF00] transition duration-300 ease-in-out sm:w-[392px] xs:w-[250px] sm:justify-start xs:justify-center h-[62px] rounded-full">
       <Link to="/survey">GET STARTED</Link> 
        </button>
      </div>
      
    </div>
  );
}
