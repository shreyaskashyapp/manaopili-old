import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import About from "./pages/About";
import NonProfit from "./pages/NonProfit";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ScrolltoTop from "./components/ScrolltoTop";
import Technology from "./pages/Technology";
import Customer from "./pages/Customer";
import ItOperational from "./pages/ItOperational";
import ItAsset from "./pages/ItAsset";
import Integrated from "./pages/Integrated";
import GenAi from "./pages/GenAi";
import StratagicPortfolio from "./pages/StratagicPortfolio";
import ManagedServices from "./pages/ManagedServices";
import Enhancement from "./pages/Enhancement";
import Privacy from "./pages/Privacy";
import { Cookies } from "./pages/Cookies";
import Survey from "./pages/Survey";
import Faq from "./pages/Faq";
import Terms from "./pages/Terms";
import StratagicPlaning from "./pages/StratagicPlaning";
import BusinessAnalysis from "./pages/BusinessAnalysis";
import ProcessImprovement from "./pages/ProcessImprovement";
import TechnologyStrategy from "./pages/TechnologyStrategy";
import FullyManaged from "./pages/FullyManaged";
import UpgradeSupport from "./pages/UpgradeSupport";
import StaffAugmentation from "./pages/StaffAugmentation";
import SystemEnhancements from "./pages/SystemEnhancements";
import PerformanceTuning from "./pages/PerformanceTuning";
import IntegrationServices from "./pages/IntegrationServices";
import Careers from "./pages/Careers";
import TechnologyDigitalTrpSurvey from "./pages/TechnologyDigitalTrpSurvey";
import TechnologyDigitalTrpForm from "./pages/TechnologyDigitalTrpForm";
import ComingSoon from "./pages/ComingSoon";

function App() {

  return (

    <Router>
      <ScrolltoTop />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/non-profit" element={<NonProfit />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route path="/survey" element={<Survey/>} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/customer-workflow" element={<Customer />} />
          <Route path="/it-operations" element={<ItOperational />} />
          <Route path="/it-Asset" element={<ItAsset />} />
          <Route path="/integrated" element={<Integrated />} />
          <Route path="/GenAi" element={<GenAi />} />
          <Route path="/StratagicPortfolio" element={<StratagicPortfolio />} />
          <Route path="/Managed-services" element={<ManagedServices />} />
          <Route path="/Enhanements" element={<Enhancement />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/StratagicPlanning" element={<StratagicPlaning/>} />
          <Route path="/Business-analysis" element={<BusinessAnalysis/>} />
          <Route path="/Process-improvements" element={<ProcessImprovement/>} />
          <Route path="/TechnologyStrategy" element={<TechnologyStrategy/>} />
          <Route path="/fully-managed" element={<FullyManaged/>} />
          <Route path="/upgrade-support" element={<UpgradeSupport/>} />
          <Route path="/Staff-Augmentation" element={<StaffAugmentation/>} />
          <Route path="/System-Enhancements" element={<SystemEnhancements/>} />
          <Route path="/Performance-Tuning" element={<PerformanceTuning/>} />
          <Route path="/IntegrationServices" element={<IntegrationServices/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/Technology-digitalTrp" element={<TechnologyDigitalTrpSurvey/>} />
          <Route path="/Technology-digitalTrpForm" element={<TechnologyDigitalTrpForm/>} />
          <Route path="/ComingSoon" element={<ComingSoon/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
