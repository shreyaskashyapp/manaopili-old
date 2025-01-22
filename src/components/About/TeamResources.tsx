function TeamResources() {
  return (
    <>
      <div className="flex lg:flex-row  xs:flex-col pt-[70px] h-auto   ">
        <div className="lg:w-1/4 flex border border-white  bg-black ">
          <div className='flex flex-col h-full justify-between'>
            <div className="flex flex-col gap-10">
              <div className=" text-[40px] leading-[44px] pl-[20px] pt-[31px] ">Architects</div>
              <div className="text-[22px] font-tahoma leading-10 font-normal pl-[20px] pr-[20px] pb-[29px] ">Experts in designing robust and scalable ServiceNow solutions tailored to your business needs.</div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 border border-white   bg-black">
          <div className='flex flex-col h-full justify-between'>
            <div className="flex flex-col gap-10">
              <div className=" text-[40px] leading-[44px] pl-[20px] pt-[31px] ">Consultants</div>
              <div className="text-[22px] font-tahoma leading-10 font-normal pl-[20px] pr-[20px] pb-[29px]">Seasoned professionals providing strategic insights and guidance to maximize your ServiceNow investment.</div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 border border-white  bg-black">
          <div className='flex flex-col h-full justify-between'>
            <div className="flex flex-col gap-10">
              <div className=" text-[40px] leading-[44px] pl-[20px] pt-[31px] ">Business Analysts</div>
              <div className="text-[22px] font-tahoma leading-10 font-normal pl-[20px] pr-[20px] pb-[29px]">Skilled in analysing business requirements and translating them into effective ServiceNow configurations and enhancements.</div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 border border-white  bg-black">
          <div className='flex flex-col h-full justify-between'>
            <div className="flex flex-col gap-10">
              <div className=" text-[40px] leading-[44px] pl-[20px] pt-[31px] ">Project Managers</div>
              <div className="text-[22px] font-tahoma leading-10 font-normal pl-[20px] pr-[20px] pb-[29px]">Experienced in managing end-to-end project delivery, ensuring timely and successful implementations.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamResources;