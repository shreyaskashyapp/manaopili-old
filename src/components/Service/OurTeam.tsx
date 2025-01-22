import ourTeamBanner from "@assets/images/ourTeamBanner.png";
import ourTeamImg from "@assets/images/ourTeamImg.png";
import { Link } from "react-router-dom";
const OurTeam: React.FC = () => {

  return (
    <>
      <div className="flex border border-white lg:flex-row  xs:flex-col-reverse mb-[74px]">
        <div className="border-r border-white lg:w-1/2 sm:w-full xs:w-full lg:px-[48px] xs:px-[46px] lg:py-[82px] xs:py-[67px]"
          style={{
            backgroundImage: `url(${ourTeamBanner})`,
            backgroundSize: "cover", // This will ensure the image covers the entire div
            backgroundPosition: "center", // This will center the background image
            backgroundRepeat: "no-repeat", // Prevent the image from repeating
          }}
        >
          <div className="text-[46px] leading-[50.6px]  pb-3">Our Team</div>
          <div className="lg:text-[30px] xs:text-[24px] lg:leading-[40.5px] xs:leading-[34px]  font-tahoma">
            Our expert team consists of architects, consultants, business analysts, and project managers. Together, we design and implement cloud-based solutions that align with your objectives, driving operational excellence and maximizing your technology investment.
          </div>
        </div>
        <div className="flex lg:w-1/2 sm:w-full xs:w-full">
          <img className="w-full" src={ourTeamImg} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-white text-black tracking-[1.5px] text-[30px] leading-9 py-[10px] px-[44px] hover:bg-[#DEFF00] transition duration-300 ease-in-out w-[392px] h-[62px] rounded-full">
          <Link to="/survey">GET STARTED</Link>
        </button>
      </div>

    </>

  );
};

export default OurTeam;
