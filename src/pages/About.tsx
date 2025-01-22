import React from "react";
import Layout, { PAGE } from "../components/Layout/Layout";
import AboutBanner from "@assets/images/aboutBanner.png";
import TeamResources from "../components/About/TeamResources";
import GlobalPresence from "../components/About/GlobalPresence";
import HomeFooter from "../components/Home/HomeFooter";
import AboutBannerMobile from "@assets/images/ourTeamBanner1.png"

const About: React.FC = () => {
  return (
    <Layout bannerPath={AboutBanner} mobileBannerPath={AboutBannerMobile} page={PAGE.ABOUT}>
      <div className="py-[138px] xs:px-0 lg:mx-[80px] xs:mx-[30px] mx-auto" >
        <div className="text-[50px] leading-[55px]">Our team resources</div>
        <TeamResources/>
      </div>
      <div>
        <GlobalPresence/>
      </div>
      <div>
        <HomeFooter />
      </div>
    </Layout>
  );
};

export default About;
