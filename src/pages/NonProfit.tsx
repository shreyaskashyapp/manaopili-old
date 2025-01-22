import HomeFooter from "../components/Home/HomeFooter";
import Layout, { PAGE } from "../components/Layout/Layout";
import MainHead from "../components/NonProfit/MainHead";
import SubHeader from "../components/NonProfit/SubHeader";

import NonProfitBanner from "@assets/images/NonprofitBanner.png";

export default function NonProfit() {
  return (
    <Layout bannerPath={NonProfitBanner} page={PAGE.NonProfit}>

      {/* -----------Transform section------------  */}
     
      {/* <div className="py-[100px] p-4 lg:mx-[80px] md:mx-[30px] mx-auto" >
        <SubHeader/>
      </div> */}
      <div className="lg:p-4 xs:px-0 lg:pt-[136px] xs:pt-[42px] 3xl:mx-[20%] lg:mx-[80px] xs:mx-[30px] mx-auto pb-[100px]">
        <MainHead/>
      </div>
      <div>
        <HomeFooter />
      </div>
    </Layout>
  );
}
