import React, { useEffect } from 'react'
import HomeFooter from '../components/Home/HomeFooter';
import Layout, { PAGE } from '../components/Layout/Layout';
import FaqAccordian from '../components/Faq/FaqAccordian';

const Faq = () => {
  useEffect(() => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';

    document.documentElement.style.setProperty('--text-white', 'black');
    document.documentElement.style.setProperty('--background-color', 'white');
    document.documentElement.style.setProperty('--logo-color', '#455CFF');
    document.documentElement.style.setProperty('--arrow-color', '#455CFF');
    document.documentElement.style.setProperty('--footerText-color', 'black');
    document.documentElement.style.setProperty('--popover-color', 'black');
    document.documentElement.style.setProperty('--footerSpan-color', '#455CFF');
    document.documentElement.style.setProperty('--hover-color', '#455CFF');
    document.documentElement.style.setProperty('--arowDown-color', 'black');
    document.documentElement.style.setProperty('--arowUp-color', '#455CFF');
    document.documentElement.style.setProperty('--mobileUp-color', '#455CFF');
    document.documentElement.style.setProperty('--mobileDown-color', 'black');
    document.documentElement.style.setProperty('--mobileOverlay-color', 'white');
    // reset the colors while going back.
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
      document.documentElement.style.setProperty('--text-white', 'white');
      document.documentElement.style.setProperty('--background-color', 'black');
      document.documentElement.style.setProperty('--logo-color', 'white');
      document.documentElement.style.setProperty('--arrow-color', '#DEFF00');
      document.documentElement.style.setProperty('--footerText-color', '#D9D9D9');
      document.documentElement.style.setProperty('--popover-color', '#DEFF00');
      document.documentElement.style.setProperty('--footerSpan-color', '#DEFF00');
      document.documentElement.style.setProperty('--hover-color', '#DEFF00');
      document.documentElement.style.setProperty('--arowDown-color', '#DEFF00');
      document.documentElement.style.setProperty('--arowUp-color', '#fff');
      document.documentElement.style.setProperty('--mobileUp-color', '#DEFF00');
      document.documentElement.style.setProperty('--mobileDown-color', '#fff');
      document.documentElement.style.setProperty('--mobileOverlay-color', 'black');
    }
  }, [])
    
      return (
        <Layout bannerPath={""} page={PAGE.FAQ}>
                <div className="lg:p-4 xs:px-0 lg:pb-20 xs:pb-10 pt-10 3xl:mx-[20%] lg:mx-[80px] xs:mx-[30px] mx-auto">
                    <FaqAccordian/>
                </div>
          <div className="">
            <div className="border border-white "></div>
          </div>
          <HomeFooter isShowBgImage={false} />
    
        </Layout>
  )
}

export default Faq