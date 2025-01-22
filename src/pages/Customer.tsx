import HomeFooter from "../components/Home/HomeFooter";
import Layout, { PAGE } from "../components/Layout/Layout";

const Customer = () => {
  return (
    <Layout bannerPath={""} page={PAGE.CUSTOMER}>
      <HomeFooter/>
    </Layout>
  );
};

export default Customer;