import GlobalPresenceBanner from "@assets/images/globalPresence.png";
function GlobalPresence() {
  return (
    <div style={{
      backgroundImage: `url(${GlobalPresenceBanner})`,
      backgroundSize: "cover", // This will ensure the image covers the entire div
      backgroundPosition: "center", // This will center the background image
      backgroundRepeat: "no-repeat", // Prevent the image from repeating
    }}
    >
      <div className=" lg:mx-[80px] md:mx-[30px] mx-auto h-auto">
        <div className="p-4 md:text-[80px] md:leading-[88px] text-black pt-7 xs:text-[50px] xs:leading-[60px] ">
            Global Presence,<br />Local Expertise
        </div>
        <div className="p-4 md:text-[26px] xs:text-[18px] font-tahoma text-black leading-normal lg:w-[670px] pt-2 pb-[20%]">
            With offices in Los Angeles, Honolulu, and Bangalore, we're strategically positioned to serve you across time zones. Our global footprint is expanding - stay tuned for more locations coming soon.
        </div>
      </div>
    </div>
  );
}

export default GlobalPresence;