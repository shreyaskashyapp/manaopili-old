import React from 'react'
import HomeFooter from '../components/Home/HomeFooter'
import Layout, { PAGE } from '../components/Layout/Layout'
import ServiceBanner from "@assets/images/serviceBanner.png";
const ComingSoon = () => {
  return (
    <Layout bannerPath={ServiceBanner} page={PAGE.ComingSoon}>
     <div className='3xl:pt-[190px] '>
        <HomeFooter/>
      </div>
    </Layout>
  )
}

export default ComingSoon