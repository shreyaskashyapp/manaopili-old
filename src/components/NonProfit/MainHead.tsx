import NonProfitDemo from "@assets/images/NonprofitMainheadBanner.png";
import NonProfitMobileDemo from "@assets/images/nonprofitSubhead.png";
function MainHead() {
  return (
    <>
      <div className='lg:text-center text-[40px] text-yellow-text italic leading-normal '>By Supporting Mana’o Pili you are supporting the <span className="not-italic">Anahulu</span>  <br />Valley Preservation.</div>
      <img src={NonProfitDemo} alt="" className=" hidden lg:block m-auto pt-[80px] " />
      <img src={NonProfitMobileDemo} alt="" className="block lg:hidden m-auto pt-[80px] " />
      <div className="pt-4 lg:text-[26px] xs:text-[24px] lg:leading-[35px] xs:leading-[34px] font-tahoma ">By supporting the Anahulu Valley Preservation Fund, you’re not just helping to maintain this land’s unique ecosystems but also contributing to the legacy and history that shape our island identity. Together, we honor Hawaii’s cultural heritage and ensure that future generations can experience the natural beauty and historical depth of the Anahulu Valley. Join us in our mission to protect, preserve, and celebrate Hawaii’s sacred land.</div>
      <div className="pt-4 lg:text-[26px] xs:text-[24px] lg:leading-[35px] xs:leading-[34px] font-tahoma ">Historically, the Anahulu Valley served as a thriving agricultural and aquacultural hub, where Native Hawaiians cultivated crops and developed innovative fishpond systems that sustained entire communities. The burial grounds here are a testament to the valley's spiritual significance, honoring ancestors who shaped the culture and identity of Hawaii itself. Yet today, these lands face increasing threats from modernization, environmental change, and erosion, risking the loss of this irreplaceable heritage.</div>
      <div className="pt-4 pb-[80px] lg:text-[26px] xs:text-[24px] lg:leading-[35px] xs:leading-[34px] font-tahoma ">The Anahulu Valley Preservation Fund is committed to actively restoring these lands and educating our community about the valley’s cultural and environmental importance. Monthly, a portion of our proceeds goes directly into preserving these spaces: clearing invasive species, maintaining fish ponds, and creating interpretive sites to share the valley’s story. We envision a future where the Anahulu Valley continues to thrive, preserving its legacy for all who come after.</div>
    </>
  );
}

export default MainHead;