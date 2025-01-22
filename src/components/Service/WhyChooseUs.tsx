import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <>
      <div className=" text-[26px] font-tahoma font-bold text-white leading-[33px]">
        Comprehensive Expertise:
      </div>
      <div className="lg:text-[26px] xs:text-[24px]  font-tahoma font-normal text-white lg:leading-normal xs:leading-[34px]">
        Our deep knowledge across all ServiceNow product lines ensures that we
        can handle every aspect of your implementation, optimization, and
        enhancement. Whether it’s ITSM, CSM, HRSD, ITAM, ITOM, GRC, Service
        Portal, or Platform Development, our expertise guarantees a robust
        solution tailored to your needs.
      </div>
      <div className=" text-[26px] pt-5 font-tahoma font-bold text-white leading-[33px]">
        Tailored Solutions:
      </div>
      <div className="lg:text-[26px] xs:text-[24px]  font-tahoma font-normal text-white lg:leading-normal xs:leading-[34px]">
        We provide customized services that are precisely aligned with your
        business objectives. By understanding your unique requirements, we
        deliver solutions that enhance your processes and drive your success.
      </div>
      <div className=" text-[26px] pt-5 font-tahoma font-bold text-white leading-[33px]">
        Proven Track Record:
      </div>
      <div className="lg:text-[26px] xs:text-[24px]  font-tahoma font-normal text-white lg:leading-normal xs:leading-[34px]">
        With a history of successful projects and a diverse portfolio of
        satisfied clients across various industries, we have demonstrated our
        ability to deliver exceptional results. Our track record reflects our
        commitment to excellence and client satisfaction.
      </div>
      <div className=" text-[26px] pt-5 font-tahoma font-bold text-white leading-[33px]">
        Commitment to Excellence:
      </div>
      <div className="lg:text-[26px] xs:text-[24px]  font-tahoma font-normal text-white lg:leading-normal xs:leading-[34px]">
        Our dedicated team is focused on delivering high-quality solutions and
        exceptional service. We prioritize attention to detail, adherence to
        best practices, and continuous improvement to ensure your success.
      </div>
      <div className=" text-[26px] pt-5 font-tahoma font-bold text-white leading-[33px]">
        Onshore-Offshore Model:
      </div>
      <div className="lg:text-[26px] xs:text-[24px]  font-tahoma font-normal text-white lg:leading-normal xs:leading-[34px]">
        Our onshore-offshore model allows us to offer cost- effective solutions
        while maintaining high quality and maximum coverage. By leveraging
        global resources, we provide 24/7/365 support and ensure that your needs
        are met efficiently and effectively.
      </div>

      <div className="flex items-center justify-center pt-[70px]">
        <button className="bg-white text-black tracking-[1.5px] text-[30px] leading-9 py-2 px-4 hover:bg-[#DEFF00] transition duration-300 ease-in-out w-[392px] h-[62px] rounded-full">
          <Link to="/survey">GET STARTED</Link>
        </button>
      </div>

      <div className="flex  text-[32px]  pt-[117px] pb-[110px] italic font-normal text-yellow-text justify-end lg:pr-[78px] lg:leading-normal xs:leading-[40px]">
        <div className="max-w-[561px] ">Partner with us to leverage the full potential of ServiceNow and drive your business forward with innovative and effective solutions.</div>

      </div>
    </>
  );
};

export default WhyChooseUs;
