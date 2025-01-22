import HomeFooter from "../components/Home/HomeFooter";
import Layout, { PAGE } from "../components/Layout/Layout";

function Technology() {
  return (
    <Layout bannerPath={""} page={PAGE.TECHNOLOGY}>
     <div className='3xl:pt-[190px]'>
        <HomeFooter/>
      </div>
    </Layout>
  );
}

export default Technology;