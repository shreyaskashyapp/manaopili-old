import NonProfitSubhead from "@assets/images/nonprofitSubhead.png";
const SubHeader = () => {
  return (
    <div className="flex  lg:flex-row  xs:flex-col-reverse  h-auto w-full lg:gap-[74px] xs:gap-0  ">
      <div className="lg:w-1/2 flex-col  ">
        <div className=' pt-10 text-[50px] leading-[55px] body-text'>SubHeader</div>
        <div className='pt-5  text-[26px] font-tahoma body-text leadin-[35px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>

      <div className="lg:w-1/2 flex-col   ">
        <img src={NonProfitSubhead} alt="" className="w-full h-[744px]" />
      </div>

    </div>
  );
};

export default SubHeader;