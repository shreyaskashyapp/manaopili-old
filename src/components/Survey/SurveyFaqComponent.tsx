import { useState } from "react";

const SurveyFaqComponent: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (index: number) => {
    setSelected(selected !== index ? index : null);
  };

  const faqData = [
    { question: "Technology", abbreviation: "(ITSM)", url: "/Technology-digitalTrp" },
    { question: "Customer", abbreviation: "(CSM)", url: "/ComingSoon" },
    { question: "ITOM", url: "/ComingSoon" },
    { question: "Asset", abbreviation: "(ITAM)", url: "/ComingSoon" },
    { question: " Risk Management", abbreviation: "(GRC)", url: "/ComingSoon" },
    { question: "AI and GenAI", abbreviation: "", url: "/ComingSoon" },
    { question: "SPM", abbreviation: "(PPM)", url: "/ComingSoon" },
    { question: "DevOps", abbreviation: "", url: "/ComingSoon" },
    { question: "Employee", abbreviation: "(HRSD)", url: "/ComingSoon" },
  ];

  return (
    <div className="flex w-full">
      <div className="w-full">
        <ul className="shadow-box">
          {faqData.map((faq, index) => (
            <li key={index} className="relative">
              <a
                href={faq.url}
                className="w-full text-left block"
                onClick={() => toggle(index)}
              >
                <div
                  className="flex items-center justify-between italic lg:text-[64px] xs:text-[30px] lg:leading-[70px]  font-light"
                  style={{
                    textDecorationLine: "underline",
                    textDecorationStyle: "solid",
                    textDecorationSkipInk: "none",
                    textDecorationThickness: "auto",
                    textUnderlineOffset: "auto",
                    textUnderlinePosition: "from-font",
                  }}
                >
                  <span>
                    {faq.question}{" "}
                    {faq.abbreviation && (
                      <span className="lg:text-[30px] xs:text-[20px]">{faq.abbreviation}</span>
                    )}
                  </span>
                  <svg
                    className="SVGActive lg:min-w-[31px] lg:h-[32px] xs:min-w-[24px] xs:h-[24px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="32"
                    viewBox="0 0 31 32"
                    fill="none"
                    style={{
                      transform:
                        selected === index ? "rotate(90deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  >
                    <path
                      d="M3.67544 1.54654C2.8944 0.765492 1.62807 0.765492 0.847017 1.54654C0.0659683 2.32759 0.0659683 3.59392 0.847017 4.37497L3.67544 1.54654ZM28.7387 31.4382C29.8433 31.4382 30.7387 30.5428 30.7387 29.4382L30.7387 11.4382C30.7387 10.3336 29.8433 9.4382 28.7387 9.43821C27.6341 9.43821 26.7387 10.3336 26.7387 11.4382L26.7387 27.4382L10.7387 27.4382C9.63411 27.4382 8.73868 28.3336 8.73868 29.4382C8.73868 30.5428 9.63411 31.4382 10.7387 31.4382L28.7387 31.4382ZM0.847017 4.37497L27.3245 30.8524L30.1529 28.024L3.67544 1.54654L0.847017 4.37497Z"
                      fill={selected === index ? "#fff" : "#DEFF00"}
                    />
                  </svg>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SurveyFaqComponent;
