import React from 'react'
import HomeFooter from '../components/Home/HomeFooter'
import Layout, { PAGE } from '../components/Layout/Layout'

const Integrated = () => {
  return (
    <Layout bannerPath={""} page={PAGE.INTEGRATED}>
      <HomeFooter/>
    </Layout>
  )
}

export default Integrated