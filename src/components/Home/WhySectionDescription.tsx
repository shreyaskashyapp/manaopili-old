import { Link } from "react-router-dom";
import "./css/circle.css";

export default function WhySectionDescription() {
  return (
    <div className="font-tahoma text-[24px] leading-[32.4px] ">
      <p className="pb-7">
      Are you concerned that your budget may not be sufficient to achieve meaningful digital transformation results?
      </p>
      <p className="pb-7">
      Not all digital transformation projects require significant new ServiceNow licensing investments or extensive development hours to be successful. With Mana'o Pili's Digital Trip (Transformation in Place), you can quickly and efficiently achieve tangible digital transformation goals using your existing ServiceNow licensing.
      </p>
      <p className="pb-7">
      Our solutions offer competitive pricing, certified technical expertise, and a customer-centric approach, allowing us to tailor solutions within your timeline and budget. At Mana’o Pili LLC, we help you achieve the transformation you've been envisioning.
      </p>
      <p>
        Take the first step by completing our complimentary{" "}
        <span className="text-yellow-text underline"> <Link to="/survey"> Digital Trip survey </Link> </span> for your ServiceNow product line. Once completed, you'll receive a personalized PDF outlining your results and recommended next steps, which you can share with your team to kickstart your digital transformation journey.
      </p>
    </div>
  );
}
