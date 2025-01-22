
import HomeFooter from '../components/Home/HomeFooter'
import Layout, { PAGE } from '../components/Layout/Layout'
import ServiceBanner from "@assets/images/serviceBanner.png";

import SurveyFaqComponent from '../components/Survey/SurveyFaqComponent';

function Survey() {
  return (
    <Layout bannerPath={ServiceBanner} page={PAGE.SURVEY}>
      <div className='pt-[39px] pb-[37px] xs:px-0 3xl:mx-[20%] lg:mx-[80px] xs:mx-[30px] mx-auto'>
        <SurveyFaqComponent/>
      </div>
    <HomeFooter/>
  </Layout>
  )
}

export default Survey