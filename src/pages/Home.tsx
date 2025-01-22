import HighLight from "../components/Home/HighLight";
import HomeFooter from "../components/Home/HomeFooter";
import WhySection from "../components/Home/WhySection";
import WhySectionDescription from "../components/Home/WhySectionDescription";
import Layout, { PAGE } from "../components/Layout/Layout";
import ArrowDownIcon from "../components/Svgs/ArrowDownIcon";
import HorizontalScrollSection from "../components/Home/HorizontalScrollSection";
import HomeBannerImage from "@assets/images/homeBanner.png";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <Layout bannerPath={HomeBannerImage} page={PAGE.HOME}>

      {/* -----------Transform section------------  */}
      <div className="lg:py-[138px] xs:py-[80px] lg:p-4 xs:p-0  3xl:mx-[20%] lg:mx-[80px] xs:mx-[30px] mx-auto">
        <div className="flex gap-3 items-center">
          <div className="text-[50px] leading-[55px]">Transform your business.</div>
          <ArrowDownIcon />
        </div>
      </div>

      <div className="overflow-hidden 3xl:mx-[20%]" >
        <HorizontalScrollSection />
      </div>
      {/* -----------Why Mana’o Pili?------------  */}
      <div className="py-[78px] lg:px-4 xs:px-0 3xl:mx-[20%] lg:mx-[80px] xs:mx-[30px] mx-auto" >
        <div className="text-[50px] leading-[55px]">Why Mana’o Pili?</div>
        <WhySection />
      </div>

      <div className="lg:px-4 xs:px-0 3xl:mx-[20%] lg:mx-[80px] xs:mx-[30px] mx-auto pb-11" >
        <WhySectionDescription />
      </div>
      <div className="lg:px-4 xs:px-0 lg:mx-[80px] xs:mx-[30px] mx-auto pb-24">
        <div className="flex items-center justify-center">
          <button className="bg-white text-black tracking-[1.5px] text-[30px] leading-9 py-2 px-4 hover:bg-[#DEFF00] transition duration-300 ease-in-out w-[392px] h-[62px] rounded-full">
                        <Link to="/survey">GET STARTED</Link>
          </button>
        </div>
      </div>
      <div>
        <HighLight />
      </div>

      <div>
        <HomeFooter />
      </div>

    </Layout>
  );
}
