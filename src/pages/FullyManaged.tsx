import React from 'react'
import HomeFooter from '../components/Home/HomeFooter'
import Layout, { PAGE } from '../components/Layout/Layout'

const FullyManaged = () => {
  return (
    <Layout bannerPath={""} page={PAGE.FullyManaged}>
      <HomeFooter/>
    </Layout>
  )
}

export default FullyManaged