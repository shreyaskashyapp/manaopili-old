import React from 'react'
import HomeFooter from '../components/Home/HomeFooter'
import Layout, { PAGE } from '../components/Layout/Layout'
import ServiceBanner from "@assets/images/serviceBanner.png";

const Careers = () => {
  return (
    <Layout bannerPath={ServiceBanner} page={PAGE.CAREER}>
    <HomeFooter/>
  </Layout>
  )
}

export default Careers