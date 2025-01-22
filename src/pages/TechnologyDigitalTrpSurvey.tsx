import React from 'react'
import HomeFooter from '../components/Home/HomeFooter'
import Layout, { PAGE } from '../components/Layout/Layout'
import ServiceBanner from "@assets/images/serviceBanner.png";
import DigitalTrp from '../components/Survey/DigitalTrp';

const TechnologyDigitalTrpSurvey = () => {
  return (
    <Layout bannerPath={ServiceBanner} page={PAGE.TechnologyDigitalTrp}>
    <div className='pt-[39px] pb-[37px] xs:px-0 3xl:mx-[20%] lg:mx-[80px] xs:mx-[30px] mx-auto'>
      <DigitalTrp/>
    </div>
  <HomeFooter/>
</Layout>
  )
}

export default TechnologyDigitalTrpSurvey