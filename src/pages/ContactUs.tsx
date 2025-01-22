import ContactForm from "../components/Contact/ContactForm";
import HomeFooter from "../components/Home/HomeFooter";
import Layout, { PAGE } from "../components/Layout/Layout";
import NonProfitBanner from "@assets/images/NonprofitBanner.png";
function ContactUs() {
  return (
    <Layout bannerPath={NonProfitBanner} page={PAGE.ContactUs}>
      <div className="p-4 pt-[82px] lg:mx-[80px] md:mx-[30px] mx-auto pb-[142px]">
        <ContactForm/>
      </div>
      <div>
        <HomeFooter/>
      </div>
    </Layout>
  );
}

export default ContactUs;