import { Link } from "react-router-dom";

const TechnologyBanner = () => {
  return (
    <div className="xl:pb-[143px] xs:pb-[100px] ">
      <div className="flex xl:flex-row xs:flex-col  lg:gap-52  xs:gap-[74px]">
        <div className="lg:text-[80px] lg:leading-[88px] xs:text-[48px] xs:leading-[52px] md:min-w-[452px]">Technology
          Workflows (Tx)</div>
        <div className="font-tahoma lg:text-[26px] xs:text-[24px]  lg:leading-[35.1px] xs:leading-[32px] pt-5">
          Mana’o Pili offers expert guidance for Technology Workflows, from implementation to system migration and consolidation. We deliver customized solutions while following Service Management best practices like ITIL, COBIT, and Lean principles.
          <div className="flex sm:justify-start xs:justify-center pt-14">
            <button className="bg-yellow-text text-black tracking-[1.5px] text-[30px] leading-9 py-2 px-4 hover:bg-[#f5f5f5] transition duration-300 ease-in-out sm:w-[392px] xs:w-[305px] sm:justify-start xs:justify-center h-[62px] rounded-full">
              <Link to='/survey'>TAKE THE SURVEY</Link>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default TechnologyBanner;