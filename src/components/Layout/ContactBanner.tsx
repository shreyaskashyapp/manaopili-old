import { Link } from "react-router-dom";

export default function ContactBanner() {
  return (
    <div className="xl:pb-[143px] xs:pb-[100px]">
      <div className="flex xl:flex-row xs:flex-col  xl:gap-96 xs:gap-24">
        <div className="lg:text-[80px] lg:leading-[88px] xs:text-[50px] xs:leading-[58px] min-w-[346px]">Contact Us</div>
        <div className="font-tahoma text-[26px] leading-[35.1px] pt-5">
        Let’s connect with some ideas. Fill out the contact form to have someone on our team contact you.
          <div className=" pt-5">
            You can also book some time with our team directly using <span className="text-yellow-text font-tahoma text-[26px] underline leading-[35.1px]"><Link to="https://calendly.com/manaopili" className="hover:text-white">Online Booking!</Link></span>
          </div>
          <div className="flex sm:justify-start xs:justify-center pt-8">
            <button className="bg-yellow-text text-black tracking-[1.5px] text-[30px] leading-9 py-2 px-4 hover:bg-[#f5f5f5] transition duration-300 ease-in-out sm:w-[392px] xs:w-[250px] sm:justify-start xs:justify-center h-[62px] rounded-full">
            <Link to="https://calendly.com/manaopili" >BOOK ONLINE</Link>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}