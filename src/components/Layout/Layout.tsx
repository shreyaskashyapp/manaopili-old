import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import HomeBanner from "./HomeBanner";
import ServiceBanner from "./ServiceBanner";
import AboutBanner from "./AboutBanner";
import NonProfitBanner from "./NonprofitBanner";
import ContactBanner from "./ContactBanner";
import TechnologyBanner from "./TechnologyBanner";
import CustomerBanner from "./CustomerBanner";
import ItOperationalBanner from "./ItOperationalBanner";
import ItAssetBanner from "./ItAssetBanner";
import IntegratedBanner from "./IntegratedBanner";
import GenAiBanner from "./GenAiBanner";
import StratagicPortfolioBanner from "./StratagicPortfolioBanner";
import ManagedServiceBanner from "./ManagedServiceBanner";
import { EnhancementBanner } from "./EnhancementBanner";
import PrivacyBanner from "./PrivacyBanner";
import CookieBanner from "./CookieBanner";
import SurveyBanner from "./SurveyBanner";
import FaqBanner from "./FaqBanner";
import TermsBanner from "./TermsBanner";
import StratagicPlanningBanner from "./StratagicPlanningBanner";
import BusinessAnalysisBanner from "./BusinessAnalysisBanner";
import ProcessImprovementBanner from "./ProcessImprovementBanner";
import TechnologyStrategyBanner from "./TechnologyStrategyBanner";
import FullyManagedBanner from "./FullyManagedBanner";
import UpgradeSupportBanner from "./UpgradeSupportBanner";
import StaffAugmentationBanner from "./StaffAugmentationBanner";
import SystemEnhancementBanner from "./SystemEnhancementBanner";
import PerformanceTuningBanner from "./PerformanceTuningBanner";
import IntegrationServicesBanner from "./IntegrationServicesBanner";
import CareerBanner from "./CareerBanner";
import TechnologyDigitalTrpBanner from "./TechnologyDigitalTrpBanner";
import TechnologyTrpForm from "./TechnologyTrpForm";
import ComingSoonBanner from "./ComingSoonBanner";

interface LayoutProps {
  children: React.ReactNode;
  bannerPath: string;
  page: PAGE;
  mobileBannerPath?: string;
}

export enum PAGE {
  HOME = "home",
  SERVICE = "service",
  ABOUT = "about",
  NonProfit = "nonprofit",
  ContactUs = "contactus",
  TECHNOLOGY = "technology",
  CUSTOMER = "customer",
  ItOperational = "itoperational",
  ItAsset = "ItAsset",
  INTEGRATED = "integrated",
  GENAI = "genai",
  StratagicPortfolio = "strategicportfolio",
  ManagedService = "managedservice",
  ENHANCEMENT = "enhancement",
  PRIVACY ="privacy",
  COOKIE ="cookie",
  SURVEY="survey",
  FAQ="faq",
  TERMS="terms",
  SratagicPlanning="stratagic-planning",
  BusinessAnalysis="business-analysis",
  ProcessImprovement="Process-Improvement",
  TechnologyStrategy ="Technology-Strategy",
  FullyManaged ="fully-managed",
  UpgradeSupprot="upgrade-support",
  StaffAugmentation="Staff Augmentation",
  SystemEnhancements ="System Enhancements",
  PerformanceTuning ="Performance Tuning",
  IntegrationServices ="Integration Services",
  CAREER="career",
  TechnologyDigitalTrp ="technology digital Trp",
  TechnologyTrpForm="texh trp form",
  ComingSoon="coming Soon",
}

const Layout: React.FC<LayoutProps> = ({ children, bannerPath, mobileBannerPath, page = PAGE.HOME }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Only use mobileBannerPath if the page is "ABOUT" and isMobile is true
  const selectedBannerPath =
    page === PAGE.ABOUT && isMobile && mobileBannerPath ? mobileBannerPath : bannerPath;

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${selectedBannerPath})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar bgImgUrl={selectedBannerPath} />
        <div className="flex">
          <div className="lg:pt-[261px] xs:pt-[140px] lg:p-4 xs:p-0 3xl:mx-[20%] lg:mx-[80px] xs:mx-[30px] mx-auto">
            {page === PAGE.HOME && <HomeBanner />}
            {page === PAGE.SERVICE && <ServiceBanner />}
            {page === PAGE.ABOUT && <AboutBanner />}
            {page === PAGE.NonProfit && <NonProfitBanner />}
            {page === PAGE.ContactUs && <ContactBanner />}
            {page === PAGE.TECHNOLOGY && <TechnologyBanner />}
            {page === PAGE.CUSTOMER && <CustomerBanner />}
            {page === PAGE.ItOperational && <ItOperationalBanner />}
            {page === PAGE.ItAsset && <ItAssetBanner />}
            {page === PAGE.INTEGRATED && <IntegratedBanner />}
            {page === PAGE.GENAI && <GenAiBanner />}
            {page === PAGE.StratagicPortfolio && <StratagicPortfolioBanner />}
            {page === PAGE.ManagedService && <ManagedServiceBanner />}
            {page === PAGE.ENHANCEMENT && <EnhancementBanner />}
            {page === PAGE.PRIVACY && <PrivacyBanner />}
            {page === PAGE.COOKIE && <CookieBanner />}
            {page === PAGE.SURVEY && <SurveyBanner />}
            {page === PAGE.FAQ && <FaqBanner />}
            {page === PAGE.TERMS && <TermsBanner />}
            {page === PAGE.SratagicPlanning && <StratagicPlanningBanner />}
            {page === PAGE.BusinessAnalysis&& <BusinessAnalysisBanner />}
            {page === PAGE.ProcessImprovement&& <ProcessImprovementBanner />}
            {page === PAGE.TechnologyStrategy&& <TechnologyStrategyBanner />}
            {page === PAGE.FullyManaged&& <FullyManagedBanner />}
            {page === PAGE.UpgradeSupprot&& <UpgradeSupportBanner />}
            {page === PAGE.StaffAugmentation&& <StaffAugmentationBanner />}
            {page === PAGE.SystemEnhancements&& <SystemEnhancementBanner />}
            {page === PAGE.PerformanceTuning&& <PerformanceTuningBanner />}
            {page === PAGE.IntegrationServices&& <IntegrationServicesBanner />}
            {page === PAGE.CAREER&& <CareerBanner />}
            {page === PAGE.TechnologyDigitalTrp&& <TechnologyDigitalTrpBanner />}
            {page === PAGE.TechnologyTrpForm&& <TechnologyTrpForm />}
            {page === PAGE.ComingSoon&& <ComingSoonBanner />}
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default Layout;
