import footerCircle from "@assets/images/footerCircle.png";
import useWindowSize from "../../hooks/useWindowSize";
import { Link } from "react-router-dom";
import HomeMobileFooter from "./HomeMobileFooter";
export default function HomeFooter({ isShowBgImage = true }) {
  const { width } = useWindowSize();
  return (<div
    style={width > 425 ? {
      backgroundImage: isShowBgImage ? `url(${footerCircle})` : '',
      backgroundSize: "cover", // This will ensure the image covers the entire div
      backgroundPosition: "center", // This will center the background image
      backgroundRepeat: "no-repeat", // Prevent the image from repeating
    } : {}}
  >
    <div className="md:px-0  py-16 3xl:mx-[20%] lg:mx-[80px] xs:mx-[30px]  "

    >
      <div className="flex justify-center items-center relative h-auto"
      >

        <div className="flex sm:justify-between w-full md:flex-row sm:flex-col sm:gap-8  xs:flex-col xs:gap-8">
          <div className='flex gap-5 flex-col '>
            <div className="italic font-light text-[40px] lg:leading-[53.8px] xs:leading-10 text-white ">
              <div>Transform your business</div>
              <div>with <span className='text-hover-yellow'>Mana’o Pili.</span></div>
            </div>
            <div>
              <button className="bg-transparent text-white border-white border tracking-[1.5px] text-[30px] leading-9 py-2 px-4 hover:bg-[#DEFF00] hover:text-black transition duration-300 ease-in-out w-[300px] h-[62px] rounded-full">
                <Link to="/survey">TAKE OUR SURVEY</Link>
              </button>
            </div>

          </div>

          <div className="flex gap-16 sm:flex-row  lg:gap-24 sm-md:flex-col xs:flex-col xs:hidden sm:flex">
            <div className="flex gap-3 flex-col">
              <div className=" text-[22px] leading-[29.7px] font-tahoma">Company</div>
              <div>
                <ul className="font-tahoma text-[var(--footerText-color)] text-[20px] leading-[27px]" >
                  <li>
                    <Link
                      to="/about"
                      className="text-white hover:text-yellow-text transition-colors duration-300 text-[22px]"
                    >
                      About Us
                    </Link>
                  </li>
                  <li> <Link to="/careers" className="text-white hover:text-yellow-text transition-colors duration-300 text-[22px]">Careers</Link></li>
                  {/* <li>Resources</li> */}
                  {/* <li>ServiceNow</li> */}
                  <li><Link to="/survey" className="text-white hover:text-yellow-text transition-colors duration-300 text-[22px]">Survey</Link></li>
                  {/* <li>FAQ</li> */}
                </ul>
              </div>

            </div>
            <div className="flex gap-3 flex-col">
              <div className=" text-[22px] leading-[29.7px] font-tahoma">Support</div>
              <div>
                <ul className="font-tahoma text-[var(--footerText-color)] text-[20px] leading-[27px]" >
                  <li><Link to="/faq" className="text-white hover:text-yellow-text transition-colors duration-300 text-[22px]">FAQ</Link></li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-white hover:text-yellow-text transition-colors duration-300 text-[22px]"
                    >
                      Contact Us
                    </Link></li>
                  <li><Link to="/privacy" className="text-white hover:text-yellow-text transition-colors duration-300 text-[22px]">Privacy Policy </Link></li>
                  <li><Link to="/cookies" className="text-white hover:text-yellow-text transition-colors duration-300 text-[22px]">Cookie Policy </Link></li>
                  <li><Link to="/terms" className="text-white hover:text-yellow-text transition-colors duration-300 text-[22px]">Terms of Service </Link></li>
                  {/* <li>Accessibility Statement</li> */}
                </ul>
              </div>

            </div>
          </div>

          {width <= 425 && <>
            <div>

              <div className="flex lg:px-4 py-4 xs:px-0  sm:hidden text-[32px] leading-[43.2px] font-tahoma  border-t border-white border-b">
                <div className=''>
                  {/* <div className='w-full flex gap-8 items-center '>
                                        Company
                    <ArrowDownIcon color="#ffff" />
                  </div> */}
                  <HomeMobileFooter />

                </div>

              </div>

              {/* <div className="flex px-4 py-4 sm:hidden text-[32px] leading-[43.2px] font-tahoma  border-t border-white border-b">
                <div className=''>
                  <div className='w-full flex gap-8 items-center '>
                    <div className='min-w-[130px]'>Support</div>
                    <ArrowDownIcon color="#ffff" />
                  </div>

                </div>

              </div> */}
            </div>

            <div className='px-4 flex justify-between sm:hidden'>
              <div><Link to="/privacy">Privacy Policy</Link></div>
              <div><Link to="/terms">Terms of Service</Link></div>
              
            </div></>}

        </div>
      </div>
    </div>

  </div>);
}