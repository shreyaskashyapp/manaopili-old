import { useRef, useState } from "react";
import { Link } from "react-router-dom";

interface FAQItem {
  question: string;
  left?: { name: string; link: string }[]; // Optional for left items
  right?: { name: string; link: string }[]; // Optional for right items
  link?: string; // Link for the question
}

const FAQComponent: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setSelected(selected !== index ? index : null);
  };

  const getHeight = (index: number) => {
    const ref = faqRefs.current[index];
    return selected === index && ref ? `${ref.scrollHeight}px` : "0px";
  };

  const faqData: FAQItem[] = [
    {
      question: "End-to-End Implementations",
      left: [
        { name: "Technology Workflows(Tx)", link: "/technology" },
        { name: "IT Operations Management(ITOM)", link: "/it-operations" },
        { name: "Integrated Risk Management(IRM)", link: "/integrated" },
        { name: "Strategic Portfolio Management(SPM)", link: "/StratagicPortfolio" },
      ],
      right: [
        { name: "Customer Workflows(Cx)", link: "/customer-workflow" },
        { name: "IT Asset Management(ITAM)", link: "/It-Asset" },
        { name: "AI and GenAI", link: "/GenAi" },
      ],
    },
    {
      question: "Consulting Services",
      left: [
        { name: "Strategic Planning", link: "/StratagicPlanning" },
        { name: "Business Analysis", link: "/Business-analysis" },
      ],
      right: [
        { name: "Process Improvement", link: "/Process-improvements" },
        { name: "Technology Strategy", link: "/TechnologyStrategy" },
      ],
    },
	{
      question: "Managed Services",
      left: [
        { name: "Fully Managed Platform", link: "/fully-managed" },
        { name: "Upgrade Support", link: "/upgrade-support" },
      ],
      right: [
        { name: "Staff Augmentation", link: "/Staff-Augmentation" },
        
      ],
    },
    {
      question: "Enhancements and Optimization",
      left: [
        { name: "System Enhancements", link: "/System-Enhancements" },
        { name: "Performance Tuning", link: "/Performance-Tuning" },
      ],
      right: [
        { name: "Integration Services", link: "/IntegrationServices" },
        
      ],
    },
    
  ];

  return (
    <div className="flex w-full">
      <div className="border-t border-white w-full">
        <ul className="shadow-box">
          {faqData.map((faq, index) => (
            <li key={index} className="relative border-b border-white">
              {faq.link ? (
                // Directly render as a link without expand/collapse
                <Link to={faq.link} className="w-full py-6 text-left flex items-center justify-between">
                  <span className="italic lg:text-[70px] xs:text-[40px] lg:leading-[77px] xs:leading-[40px]">
                    {faq.question}
                  </span>
                  <svg
                    className="SVGActive lg:min-w-[31px] lg:h-[32px] xs:min-w-[24px] xs:h-[24px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="32"
                    viewBox="0 0 31 32"
                    fill="none"
                    style={{ transition: "transform 0.3s ease-in-out" }}
                  >
                    <path
                      d="M3.67544 1.54654C2.8944 0.765492 1.62807 0.765492 0.847017 1.54654C0.0659683 2.32759 0.0659683 3.59392 0.847017 4.37497L3.67544 1.54654ZM28.7387 31.4382C29.8433 31.4382 30.7387 30.5428 30.7387 29.4382L30.7387 11.4382C30.7387 10.3336 29.8433 9.4382 28.7387 9.43821C27.6341 9.43821 26.7387 10.3336 26.7387 11.4382L26.7387 27.4382L10.7387 27.4382C9.63411 27.4382 8.73868 28.3336 8.73868 29.4382C8.73868 30.5428 9.63411 31.4382 10.7387 31.4382L28.7387 31.4382ZM0.847017 4.37497L27.3245 30.8524L30.1529 28.024L3.67544 1.54654L0.847017 4.37497Z"
                      fill="#DEFF00"
                    />
                  </svg>
                </Link>
              ) : (
                // Render with toggle for other sections
                <>
                  <button
                    type="button"
                    className="w-full py-6 text-left"
                    onClick={() => toggle(index)}
                  >
                    <div className="flex items-center justify-between italic lg:text-[70px] xs:text-[40px] lg:leading-[77px] xs:leading-[40px]">
                      <span>{faq.question}</span>
                      <svg
                        className="SVGActive lg:min-w-[31px] lg:h-[32px] xs:min-w-[24px] xs:h-[24px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="32"
                        viewBox="0 0 31 32"
                        fill="none"
                        style={{
                          transform: selected === index ? "rotate(90deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease-in-out",
                        }}
                      >
                        <path
                          d="M3.67544 1.54654C2.8944 0.765492 1.62807 0.765492 0.847017 1.54654C0.0659683 2.32759 0.0659683 3.59392 0.847017 4.37497L3.67544 1.54654ZM28.7387 31.4382C29.8433 31.4382 30.7387 30.5428 30.7387 29.4382L30.7387 11.4382C30.7387 10.3336 29.8433 9.4382 28.7387 9.43821C27.6341 9.43821 26.7387 10.3336 26.7387 11.4382L26.7387 27.4382L10.7387 27.4382C9.63411 27.4382 8.73868 28.3336 8.73868 29.4382C8.73868 30.5428 9.63411 31.4382 10.7387 31.4382L28.7387 31.4382ZM0.847017 4.37497L27.3245 30.8524L30.1529 28.024L3.67544 1.54654L0.847017 4.37497Z"
                          fill={selected === index ? "#fff" : "#DEFF00"}
                        />
                      </svg>
                    </div>
                  </button>
                  <div
                    className="relative overflow-hidden transition-all duration-700"
                    style={{ maxHeight: getHeight(index) }}
                    ref={(el) => (faqRefs.current[index] = el)}
                  >
                    <div className="xl:px-28 md:px-0 pb-6">
                      <div className="flex lg:gap-8 xs:gap-5 flex-col">
                        {faq.left?.map((left, leftIndex) => (
                          <div key={leftIndex} className="flex xl:gap-36 lg:gap-28 xs:gap-5 md:flex-row xs:flex-col">
                            <Link
                              to={left.link}
                              className="underline text-yellow-text lg:text-[22px] xs:text-[18px] font-tahoma lg:leading-7 font-bold xl:min-w-[400px] lg:min-w-[383px] md:min-w-[390px]"
                            >
                              {left.name}
                            </Link>
                            {faq.right && faq.right[leftIndex] && (
                              <Link
                                to={faq.right[leftIndex].link}
                                className="underline text-yellow-text lg:text-[22px] xs:text-[18px] font-tahoma lg:leading-7 xs:leading-5 font-bold"
                              >
                                {faq.right[leftIndex].name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQComponent;
