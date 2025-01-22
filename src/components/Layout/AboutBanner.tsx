import TeamProfile1 from "@assets/images/lelilani.png";
import TeamProfile2 from "@assets/images/mike.png";
export default function AboutBanner() {
  return (
    <div className="xl:pb-[143px] xs:pb-[100px]">
      <div className="flex xl:flex-row xs:flex-col  xl:gap-96 xs:gap-24">
        <div className="lg:text-[80px] lg:leading-[88px] xs:text-[50px] xs:leading-[58px] min-w-[300px] ">About Us</div>
        <div className="font-tahoma lg:text-[26px] xs:text-[24px] lg:leading-[35px] xs:leading-[34px] pt-5">
        Mana’o Pili, meaning “connecting ideas” in native Hawaiian, was founded in 2024 on the “customer first” idea of providing customers with an efficient and cost-effective approach to maximizing their ServiceNow investment.   Too often, technology investments are underutilized with  customers left struggling to maintain their implementations, let alone achieving outcomes. Look no further, Mana’o Pili is here to help.  

        </div>
      </div>
      <div className="text-[40px] text-yellow-text lg:pt-[221px] xs:pt-[80px]  lg:w-[476px] lg:leading-normal xs:leading-[40px] italic sm-xs-w-[200px]">
        Timeless traditions, with cutting-edge technology to forge innovative
        ideas, we are...
      </div>

      <div className="flex md:flex-row xs:flex-col pt-6 lg:pl-[230px]  xl:gap-67 xs:gap-20 mt-[6%]">
        <div className="text-center">
          <img src={TeamProfile1} alt="" className="xs:m-auto" />
          <div className=" pt-[8px] text-center md:text-black xs:text-white text-[28px] leading-normal font-normal">
            Leilani Mossman
          </div>
          <div className="pt-[8px] text-center md:text-black xs:text-white text-[20px] leading-normal font-normal font-tahoma">
            Chief Executive Officer
          </div>
          <div className=" text-center md:text-black xs:text-white text-[20px] leading-normal font-normal font-tahoma">
            Co-Founder
          </div>
        </div>
        <div className="text-center">
          <img src={TeamProfile2} alt="" className="xs:m-auto" />
          <div className=" pt-[8px] text-center md:text-black xs:text-white text-[28px] leading-normal font-normal">
            Michael Yee
          </div>
          <div className="pt-[8px] text-center md:text-black xs:text-white text-[20px] leading-normal font-normal font-tahoma">
            Chief Operations Officer
          </div>
          <div className=" text-center md:text-black xs:text-white text-[20px] leading-normal font-normal font-tahoma">
            Co-Founder
          </div>
        </div>
      </div>
    </div>
  );
}
