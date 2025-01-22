import { useRef, useState } from "react";
import { Link } from "react-router-dom";

interface FAQItem {
  question: string;
  left: { text: string; link: string }[];
  right: { text: string; link: string }[];
  middle: { text: string; link: string }[];
}

const HomeMobileFooter: React.FC = () => {
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
      question: "Company",
      left: [
        { text: "About Us", link: "/about" },
        { text: "Careers", link: "/careers" },
      ],
      right: [
        { text: "Survey", link: "/survey" },
      ],
      middle: []
    },
    {
      question: "Support",
      left: [
        { text: "Contact Us", link: "/contact" },
        { text: "Cookie Policy", link: "/cookies" },
      ],
      right: [
        { text: "FAQ", link: "/faq" },
        { text: "Terms of Service", link: "/terms" },
      ],
      middle: [
        { text: "Privacy Policy", link: "/privacy" },
        
      ],
    },
    // Add more FAQs here
  ];

  return (
    <div className="flex w-full">
      <div className="border-white w-full">
        <ul className="shadow-box">
          {faqData.map((faq, index) => (
            <li key={index} className="relative">
              <button
                type="button"
                className="w-full py-4 text-left"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center justify-between text-[32px] gap-32 leading-[77px] ">
                  <span>{faq.question}</span>
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
                      fill={selected === index ? "var(--arowDown-color)" : "var(--arowUp-color)"}
                    />
                  </svg>
                </div>
              </button>
              <div
                className="relative overflow-hidden transition-all duration-700"
                style={{ maxHeight: getHeight(index) }}
                ref={(el) => (faqRefs.current[index] = el)}
              >
                <div className="lg:px-28 pb-6">
                  <div className="flex lg:gap-8 xs:gap-5 flex-col">
                    {faq.left.map((item, leftIndex) => (
                      <div
                        key={leftIndex}
                        className="flex lg:gap-36 xs:gap-5 lg:flex-row xs:flex-col"
                      >
                        {/* Left column links */}
                        <Link
                          to={item.link}
                          className="underline text-yellow-text text-[20px] uppercase"
                        >
                          {item.text}
                        </Link>

                        {/* Check if rightIndex exists */}
                        {faq.right[leftIndex] && (
                          <Link
                            to={faq.right[leftIndex].link}
                            className="underline text-yellow-text text-[20px] uppercase"
                          >
                            {faq.right[leftIndex].text}
                          </Link>
                        )}

                        {/* Check if middleIndex exists */}
                        {faq.middle[leftIndex] && (
                          <Link
                            to={faq.middle[leftIndex].link}
                            className="underline text-yellow-text text-[20px] uppercase"
                          >
                            {faq.middle[leftIndex].text}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeMobileFooter;
