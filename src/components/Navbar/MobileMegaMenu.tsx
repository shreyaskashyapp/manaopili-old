import { useState } from "react";
import { Link } from "react-router-dom";
import AppLogo from "./AppLogo"; // Import the AppLogo
import ToggleMenuClose from "../Svgs/ToggleMenuClose"; // Import close button SVG
import './css/MobileMegaMenu.css'
interface SubLink {
  text: string;
  url: string;
}

interface FAQItem {
  question: string;
  left: (string | { text: string; url: string })[];
  subLinks?: SubLink[][]; // Optional subLinks property
}

const MobileMegaMenu: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showSubLinks, setShowSubLinks] = useState<"IMPLEMENTATIONS" | "CONSULTING" | null>(null);
  const [isExiting, setIsExiting] = useState(false);


  const toggle = (index: number) => {
    if (faqData[index].question === "SERVICES") {
      setExpandedIndex(expandedIndex === index ? null : index);
    } else {
      setExpandedIndex(null);
    }
  };

  const openSubLinkOverlay = (section: "IMPLEMENTATIONS" | "CONSULTING" | "MANAGED SERVICES" | "ENHANCEMENTS & OPTIMIZATIONS") => {
    setShowSubLinks(section);
  };

  const handleBackClick = () => {
    setIsExiting(true); // Trigger exit animation
    setTimeout(() => {
      setShowSubLinks(null);
      setIsExiting(false); // Reset state after animation
    }, 300); // Duration should match your CSS animation time
  };

  const faqData: FAQItem[] = [
    {
      question: "SERVICES",
      left: [
        { text: "IMPLEMENTATIONS", url: "#" }, // Placeholder URL
        { text: "CONSULTING", url: "#" }, // Placeholder URL
        { text: "MANAGED SERVICES", url: "#" },
        { text: "ENHANCEMENTS & OPTIMIZATIONS", url: "#" },
      ],
      subLinks: [
        [
          { text: "Technology Workflows (Tx)", url: "/technology" },
          { text: "Customer Workflows (Cx)", url: "/customer-workflow" },
          { text: "IT Operations Management (ITOM)", url: "/it-operations" },
          { text: "IT Asset Management (ITAM)", url: "/it-asset" },
          { text: "Integrated Risk Management (IRM)", url: "/integrated" },
          { text: "AI and GenAI", url: "/genai" },
          { text: "Strategic Portfolio Management (SPM)", url: "/StratagicPortfolio" },
        ],
        [
          { text: "Strategic Planning", url: "/StratagicPlanning" },
          { text: "Business Analysis", url: "/Business-analysis" },
          { text: "Process Improvement", url: "/Process-improvements" },
          { text: "Technology Strategy", url: "/TechnologyStrategy" },
        ],
        [
          { text: "Fully Managed Platform", url: "/fully-managed" },
          { text: "Upgrade Support", url: "/upgrade-support" },
          { text: "Staff Augmentation", url: "/Staff-Augmentation" },
          
        ],
        [
          { text: "System Enhancements", url: "/System-Enhancements" },
          { text: "Performance Tuning", url: "/Performance-Tuning" },
          { text: "Integration Services", url: "/IntegrationServices" },
          
        ],
      ],
    },
    { question: "SURVEY", left: [{ text: "Survey", url: "/survey" }] },
    { question: "ABOUT", left: [{ text: "About Us", url: "/about" }] },
    { question: "NON-PROFIT", left: [{ text: "Non-Profit", url: "/non-profit" }] },
  ];

  return (
    <div className="flex w-full">
      <div className="border-t border-white w-full">
        <ul className="shadow-box">
          {/* Overlay for Sub-Links */}
          {showSubLinks && (
            <div className={`fixed inset-0 bg-[var(--mobileOverlay-color)] text-white z-50 p-6 overflow-y-auto sublink-overlay ${isExiting ? "exiting" : ""}`}>

              <div className="flex justify-between items-center mx-auto mb-4">
                <AppLogo  className="app-logo"/> {/* Logo */}
                <button onClick={handleBackClick} className="text-[20px]">
                  <ToggleMenuClose /> {/* Close Button */}
                </button>
              </div>
              {/* Back Button to return to Services menu */}
              {/* <button onClick={handleBackClick} className="mt-4 underline text-[var(--arrow-color)]">
                Back to Services Menu
              </button> */}
              <svg
                className="mt-12"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                onClick={handleBackClick}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 5 5 12 12 19" />
              </svg>

              <div className="text-[24px] font-semibold mb-4 mt-8">{showSubLinks}</div>
              <div className="flex flex-col pl-6 border-l-2 border-[var(--your-border-color)]">
                {faqData[0].subLinks &&
                  faqData[0].subLinks[
                    showSubLinks === "IMPLEMENTATIONS" ? 0 :
                    showSubLinks === "CONSULTING" ? 1 :
                    showSubLinks === "MANAGED SERVICES" ? 2 :3
                    
                  ].map(
                    (subLink, index) => (
                      <Link
                        key={index}
                        to={subLink.url}
                        className="underline text-[var(--arrow-color)] text-[20px] tracking-[1.5px] font-semibold leading-[49.5px]"
                      >
                        {subLink.text}
                      </Link>
                    )
                  )}
              </div>

            </div>
          )}

          {/* Main Menu */}
          {faqData.map((faq, index) => (
            <li
              key={index}
              className={`relative ${faq.question === "NON-PROFIT" ? "" : "border-b"} border-white`}
            >
              <button
                type="button"
                className="w-full text-left"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center justify-between text-[45px] leading-[49px] tracking-[1.5px]">
                  <Link to={faq.question === "SERVICES" ? "/services" : faq.left[0]?.url} className="underline text-[22px] tracking-[1.5px] font-normal">
                    {faq.question}
                  </Link>
                  {["SURVEY", "ABOUT", "NON-PROFIT"].includes(faq.question) ? (
                    <Link to={faq.left[0]?.url}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 31 32"
                        fill="var(--MobileUp-color)"
                        style={{
                          transform:
                            faq.question === "SERVICES" && expandedIndex === index
                              ? "rotate(90deg)"
                              : "rotate(0deg)",
                          transition: "transform 0.3s ease-in-out",
                        }}
                      >
                        <path
                          d="M3.67544 1.54654C2.8944 0.765492 1.62807 0.765492 0.847017 1.54654C0.0659683 2.32759 0.0659683 3.59392 0.847017 4.37497L3.67544 1.54654ZM28.7387 31.4382C29.8433 31.4382 30.7387 30.5428 30.7387 29.4382L30.7387 11.4382C30.7387 10.3336 29.8433 9.4382 28.7387 9.43821C27.6341 9.43821 26.7387 10.3336 26.7387 11.4382L26.7387 27.4382L10.7387 27.4382C9.63411 27.4382 8.73868 28.3336 8.73868 29.4382C8.73868 30.5428 9.63411 31.4382 10.7387 31.4382L28.7387 31.4382ZM0.847017 4.37497L27.3245 30.8524L30.1529 28.024L3.67544 1.54654L0.847017 4.37497Z"
                          fill="var(--mobileUp-color)"
                        />
                      </svg>
                    </Link>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 31 32"
                      fill="var(--MobileUp-color)"
                      style={{
                        transform:
                          faq.question === "SERVICES" && expandedIndex === index
                            ? "rotate(90deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s ease-in-out",
                      }}
                    >
                      <path
                        d="M3.67544 1.54654C2.8944 0.765492 1.62807 0.765492 0.847017 1.54654C0.0659683 2.32759 0.0659683 3.59392 0.847017 4.37497L3.67544 1.54654ZM28.7387 31.4382C29.8433 31.4382 30.7387 30.5428 30.7387 29.4382L30.7387 11.4382C30.7387 10.3336 29.8433 9.4382 28.7387 9.43821C27.6341 9.43821 26.7387 10.3336 26.7387 11.4382L26.7387 27.4382L10.7387 27.4382C9.63411 27.4382 8.73868 28.3336 8.73868 29.4382C8.73868 30.5428 9.63411 31.4382 10.7387 31.4382L28.7387 31.4382ZM0.847017 4.37497L27.3245 30.8524L30.1529 28.024L3.67544 1.54654L0.847017 4.37497Z"
                        fill="var(--mobileUp-color)"
                      />
                    </svg>
                  )}
                </div>
              </button>

              {expandedIndex === index && faq.question === "SERVICES" && (
                <div className="relative overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="lg:px-28 pb-6">
                    <div className="flex flex-col">
                      {/* Left column (Links with overlay functionality) */}
                      {faq.left.map((left, leftIndex) => (
                        <div key={leftIndex} className="flex flex-col">
                          {/* Type Guard to Handle Different Types */}
                          {typeof left === "string" ? (
                            <span className="text-[20px]">{left}</span>
                          ) : (
                            <Link
                              to={left.url} // Safely access url
                              className={`underline text-[var(--arrow-color)] text-[20px] tracking-[1.5px] font-semibold leading-[49.5px] ${left.text === "IMPLEMENTATIONS" || left.text === "CONSULTING" || left.text === "MANAGED SERVICES" || left.text === "ENHANCEMENTS & OPTIMIZATIONS" ? "cursor-pointer" : ""}`}
                              onClick={left.text === "IMPLEMENTATIONS" || left.text === "CONSULTING" || left.text === "MANAGED SERVICES" || left.text === "ENHANCEMENTS & OPTIMIZATIONS" 
                                ? () => openSubLinkOverlay(left.text as "IMPLEMENTATIONS" | "CONSULTING" | "MANAGED SERVICES" | "ENHANCEMENTS & OPTIMIZATIONS")
                                : undefined}
                            >
                              {left.text}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMegaMenu;
