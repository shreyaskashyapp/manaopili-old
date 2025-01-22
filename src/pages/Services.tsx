import HomeFooter from "../components/Home/HomeFooter";
import Layout, { PAGE } from "../components/Layout/Layout";
import FAQComponent from "../components/Service/FAQComponent";
import OurTeam from "../components/Service/OurTeam";
import StickyTable from "../components/Service/StickyTable/StickyTable";
import WhyChooseUs from "../components/Service/WhyChooseUs";
import ArrowDownIcon from "../components/Svgs/ArrowDownIcon";

import ServiceBanner from "@assets/images/serviceBanner.png";

export default function Services() {
  return (
    <Layout bannerPath={ServiceBanner} page={PAGE.SERVICE}>

      {/* -----------Transform section------------  */}
      <div className="lg:p-4 xs:px-0 lg:pb-20 pt-10 3xl:mx-[20%] lg:mx-[80px] xs:mx-[30px] mx-auto">
        <FAQComponent />
      </div>

      <div className="lg:p-4 xs:px-0 lg:pb-[119px] xs:pb-[74px]  pt-10 xs:pt-[74px] 3xl:mx-[20%] lg:mx-[80px] xs:mx-[30px] mx-auto">

        <div className="flex gap-3 items-center">
          <div className="text-[50px] lg:leading-[55px] xs:leading-[50px]">Fill out our survey to get started</div>
          <ArrowDownIcon />
        </div>
      </div>

      <div className="p-4 pt-10 3xl:mx-[20%] lg:mx-[80px] md:mx-[30px] mx-auto lg:pb-[142px] xs:pb-[70px] ">
        <OurTeam />
      </div>

      <div className="p-4 3xl:mx-[20%] lg:mx-[80px] md:mx-[30px] mx-auto md:pb-[129px] xs:pb-[70px]">
        <StickyTable />
      </div>
      <div className="lg:p-4 xs:px-0 3xl:mx-[20%]  lg:mx-[80px] xs:mx-[30px] mx-auto">
        <div className="border border-white "></div>
      </div>

      <div className="lg:p-4 xs:px-0 xs pb-[60px] pt-10 3xl:mx-[20%] lg:mx-[80px] xs:mx-[30px] mx-auto">

        <div className="flex gap-3 items-center">
          <div className="text-[50px] leading-[55px]">Why choose us?</div>
          <ArrowDownIcon />
        </div>
      </div>
      <div className="lg:p-4 xs:px-0 3xl:mx-[20%] lg:mx-[80px] xs:mx-[30px] mx-auto pb-11" >
        <WhyChooseUs />
      </div>

      <div>
        <HomeFooter />
      </div>
    </Layout>
  );
}
