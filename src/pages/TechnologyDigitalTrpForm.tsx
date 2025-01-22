import React from 'react'
import HomeFooter from '../components/Home/HomeFooter'
import Layout, { PAGE } from '../components/Layout/Layout'
import ServiceBanner from "@assets/images/serviceBanner.png";
import SurveyFaqComponent from '../components/Survey/SurveyFaqComponent'
import TechnologyTrpSurveyForm from '../components/TechnologyDigitalTrp/TechnologyTrpSurveyForm';
import DigitalTrpInstruction from '../components/DigitalTrpInstruction';

const TechnologyDigitalTrpForm = () => {
  return (
    <Layout bannerPath={ServiceBanner} page={PAGE.TechnologyTrpForm}>
        <div className='pt-[39px] pb-[37px] xs:px-0 3xl:mx-[20%] lg:mx-[80px] xs:mx-[30px] mx-auto '>
        <DigitalTrpInstruction/>
      </div>
      
      <div className='pt-[39px] pb-[37px] xs:px-0 3xl:mx-[20%] lg:mx-[80px] xs:mx-[30px] mx-auto '>
        <TechnologyTrpSurveyForm/>
      </div>
    <HomeFooter/>
  </Layout>
  )
}

export default TechnologyDigitalTrpForm