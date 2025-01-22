import { useRef, useState } from "react";

interface FAQItem {
    question: string;
    content: string;
}

const FaqAccordian: React.FC = () => {
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
            question: "What is Mana’o Pili?",
            content: `Mana’o Pili is a leading IT consulting firm that specializes in delivering and supporting development activities on SaaS-based solutions, with a strong focus on information security and cybersecurity. Our mission is to empower organizations to navigate the complexities of the digital landscape while safeguarding their critical assets.`,
        },
        {
            question: "What is the origin of the name?",
            content: `Mana’o Pili’s founders have deep roots in Hawai’i, embodying the spirit of the islands in our work. The name "Mana’o Pili," which translates to "Connecting Ideas," reflects our core belief that collaboration is the key to mutual success. We understand that achieving meaningful outcomes requires a thorough appreciation of an organization’s origins, values, and traditions. By integrating this understanding with digital solutions, we empower organizations to realize their digital transformation objectives effectively.`,
        },
        {
            question: "What makes Mana’o Pili different?",
            content: `At Mana’o Pili, we prioritize a collaborative approach, engaging with our clients to understand their unique challenges and crafting solutions that are both effective and sustainable. Our goal is to provide organizations with the confidence and tools they need to thrive in an increasingly complex business automation and cybersecurity landscape.`,
        },
        {
            question: "What technologies does Mana’o Pili specialize in?",
            content: `Mana’o Pili provides professional services in cutting-edge SaaS platforms such as zScaler and ServiceNow to provide comprehensive security and business automation solutions. Our expertise in these platforms enables us to design and implement robust systems that effectively prevent cyber attacks, facilitate rapid response to security incidents, and ensure timely remediation. Our approach emphasizes not only reactive measures but also proactive strategies to manage and mitigate known vulnerabilities, thereby enhancing overall security posture.
In addition to our cybersecurity services, we are committed to supporting governance, risk, and compliance (GRC) initiatives. We work closely with organizations to align their security strategies with their risk management objectives, ensuring they remain compliant with relevant regulations and industry standards. Our team conducts thorough assessments and develops tailored frameworks that enable organizations to manage risks effectively while achieving their business goals.`,
        },
        {
            question: "Does Mana’o Pili specialize in only Information Security and CyberSecurity?",
            content: `We possess extensive capabilities across a wide range of functionalities within the ServiceNow and zScaler platforms. Our implementation approach emphasizes that information security and cybersecurity should not be treated as isolated solutions; rather, they should be integrated with existing data sources and processes. As a result, our capabilities extend beyond just information security and cybersecurity to encompass essential processes, including IT Service Management, Risk Management, Asset Management, Customer Service Management, IT Operations Management, and custom application development. This holistic approach ensures that our solutions are comprehensive and aligned with the overall objectives of the organization.`
        },
        {
            question: "What Services does Mana’o Pili provide?",
            content: `We offer a comprehensive array of services on the zScaler and ServiceNow platforms, including individual resource staff augmentation, dedicated development pods, and full managed services for SaaS solutions.`
        },
        {
            question: "What type of resources does Mana’o Pili provide?",
            content: `Mana’o Pili provides skilled professionals across a broad spectrum of roles, including System Administrators, Developers, Architects, Business Analysts, Scrum Masters, Site Reliability Engineers (SRE), and Project Managers. Our talent pool encompasses various experience levels, with the majority being mid to senior-level experts in their fields. Junior-level professionals are also available upon request.`
        },
        {
            question: "Where are Mana’o Pili resources located?",
            content: `Mana’o Pili boasts a global presence and aims to assemble highly skilled resource teams that combine international and local expertise. Our priority is to provide clients with highly qualified and experienced resources at competitive pricing.
If you have specific requirements regarding physical location, role, or skill level, please reach out to our account team. We are committed to identifying and assembling the optimal resources to meet your needs.`
        },
        {
            question: "Is Mana’o Pili a reseller of SaaS solutions?",
            content: `Mana’o Pili does not engage in reselling, licensing, or receiving incentives from software manufacturers for software licenses. This independence allows us to offer an objective perspective on your organization’s true licensing needs.
Our initial approach involves thoroughly understanding your organization before proposing digital transformation solutions that leverage the capabilities of existing solutions you already own. If your organization would benefit from additional licensing, we will facilitate a direct connection to the software manufacturer's account team for further assistance.`
        },


    ];

    return (
        <div className="flex w-full">
            <div className="border-t border-white w-full">
                <ul className="shadow-box">
                    {faqData.map((faq, index) => (
                        <li key={index} className="relative border-b border-white">
                            <button
                                type="button"
                                className="w-full py-6 text-left"
                                onClick={() => toggle(index)}
                            >
                                <div className="flex items-center justify-between font-tahoma text-[12px] leading-[20px] font-semibold">
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
                                            fill={selected === index ? "#000" : "#455CFF"}
                                        />
                                    </svg>
                                </div>
                            </button>
                            <div
                                className="relative overflow-hidden transition-all duration-700"
                                style={{ maxHeight: getHeight(index) }}
                                ref={(el) => (faqRefs.current[index] = el)}
                            >
                                <div className=" md:px-0 pb-6">
                                    <div className="text-black font-tahoma text-[12px] leading-[20px] font-normal">
                                        {faq.content}
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

export default FaqAccordian;
