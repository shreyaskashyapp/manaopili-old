import highlightBanner from "@assets/images/highlightBanner.png";
import BestValueImg from "@assets/images/bestvalue.png";
import ExpLevelImg from "@assets/images/expLevel.png";
import TechExpImg from "@assets/images/techExp.png";

export default function HighLight() {
  return (
    <div
      style={{
        backgroundImage: `url(${highlightBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="p-4 lg:mx-[80px] md:mx-[30px] mx-auto h-auto">
        <div className="flex justify-center items-center h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-60 gap-16 py-16">
            {/* First Box */}
            <div className="flex items-center gap-[22px] flex-col">
              <div>
                <img src={BestValueImg} alt="Best Value" />
              </div>
              <div className="text-[30px] leading-[36px] text-black" style={{ letterSpacing: "1.5px" }}>
                BEST VALUE
              </div>
            </div>
            {/* Second Box */}
            <div className="flex items-center gap-[22px] flex-col">
              <div>
                <img src={ExpLevelImg} alt="Experience Level" />
              </div>
              <div className="text-[30px] leading-[36px] text-black text-center" style={{ letterSpacing: "1.5px" }}>
                <div>EXPERIENCE</div>
                <div>LEVEL</div>
              </div>
            </div>
            {/* Third Box */}
            <div className="flex items-center gap-[22px] flex-col col-span-2 mx-auto sm:col-span-1 lg:col-span-1">
              <div>
                <img src={TechExpImg} alt="Technical Expertise" />
              </div>
              <div className="text-[30px] leading-[36px] text-black" style={{ letterSpacing: "1.5px" }}>
                <div>TECHNICAL</div>
                <div>EXPERTISE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
