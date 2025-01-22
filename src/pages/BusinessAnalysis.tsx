import React from 'react'
import HomeFooter from '../components/Home/HomeFooter'
import Layout, { PAGE } from '../components/Layout/Layout'

const BusinessAnalysis = () => {
  return (
    <Layout bannerPath={""} page={PAGE.BusinessAnalysis}>
        <div className='3xl:pt-[190px]'>
        <HomeFooter/>
      </div>
    
  </Layout>
  )
}

export default BusinessAnalysis