import { useState } from "react";
import { Link } from "react-router-dom";

export default function ServicePopOver({ isOpen = false, setFlyer }: { isOpen: boolean; setFlyer: (value: boolean) => void }) {
  const [isOpenThirdService1, setIsOpenThirdService1] = useState(false);
  const [isOpenThirdService2, setIsOpenThirdService2] = useState(false);
  const [isOpenManagedService, setIsOpenManagedService] = useState(false);
  const [isOpenEnhancement, setIsOpenEnhancement] = useState(false);

  return (
    <div
      onMouseLeave={() => {
        setFlyer(false);
        setTimeout(() => {
          setIsOpenThirdService1(false);
          setIsOpenThirdService2(false);
          setIsOpenManagedService(false);
          setIsOpenEnhancement(false);
        }, 300);
      }}
      className={`transition-all ease-in-out duration-300 transform absolute z-10 -ml-4 px-2 w-screen sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 ${isOpen ? "opacity-100 translate-y-0 mt-5" : "opacity-0 translate-y-2 mt-3 hidden"}`}
    >
      <div className="shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden xl:ml-[96px] w-fit">
        <div className="flex bg-body-bg border border-white">
          {/* Left Section */}
          <div className="border-r border-white py-9 px-8 flex flex-col min-w-52 bg-body-bg">
            <div className="text-[var(--popover-color)] text-[40px] italic pb-[57px] pr-5 max-w-[410px]">
              Timeless traditions, with cutting-edge technology to forge innovative ideas, we are Mana’o Pili.
            </div>
          </div>

          {/* Main Categories */}
          <div className="border-white py-9 px-8 flex flex-col min-w-[386px] max-w-[410px] bg-body-bg">
            <div
              className="hover:cursor-pointer hover:text-yellow-text text-[20px] leading-[34px] font-semibold underline tracking-[1.5px]"
              onMouseEnter={() => {
                setIsOpenThirdService1(true);
                setIsOpenThirdService2(false);
                setIsOpenManagedService(false);
                setIsOpenEnhancement(false);
              }}
            >
              IMPLEMENTATIONS
            </div>
            <div
              className="hover:cursor-pointer hover:text-yellow-text text-[20px] leading-[34px] font-semibold underline tracking-[1.5px]"
              onMouseEnter={() => {
                setIsOpenThirdService2(true);
                setIsOpenThirdService1(false);
                setIsOpenManagedService(false);
                setIsOpenEnhancement(false);
              }}
            >
              CONSULTING
            </div>
            <div
              className="cursor-pointer text-[20px] text-white font-semibold leading-[34px] underline tracking-[1.5px] uppercase hover:text-yellow-text"
              onMouseEnter={() => {
                setIsOpenManagedService(true);
                setIsOpenThirdService1(false);
                setIsOpenThirdService2(false);
                
                setIsOpenEnhancement(false);
              }}
            >
              
                Managed Services
             
            </div>
            <div className="cursor-pointer text-[20px] text-white font-semibold leading-[34px] underline tracking-[1.5px] hover:text-yellow-text"
               onMouseEnter={() => {
                setIsOpenEnhancement(true);
                setIsOpenThirdService1(false);
                setIsOpenThirdService2(false);
                setIsOpenManagedService(false);
                
              }}
            >
              ENHANCEMENTS & OPTIMIZATIONS
            </div>
          </div>

          {/* Subcategories for IMPLEMENTATIONS */}
          <div
            className={`bg-body-bg border-l border-white transition-all duration-500 ease-in-out overflow-hidden transform text-[20px] leading-[27px] ${isOpenThirdService1
              ? "opacity-100 translate-x-0 max-h-[1000px]"
              : "opacity-0 -translate-x-full max-h-0"
              } py-9 px-8 flex flex-col min-w-[386px] max-w-[410px] ${!isOpenThirdService1 && "hidden"}`}
          >
            <div className=" text-[20px] leading-[34px] tracking-[1.5px] underline hover:cursor-pointer hover:text-yellow-text"><Link to="/technology">Technology Workflows (Tx)</Link></div>
            <div className=" text-[20px] leading-[34px] tracking-[1.5px] underline hover:cursor-pointer hover:text-yellow-text"><Link to="/customer-workflow">Customer Workflows (Cx)</Link></div>
            <div className=" text-[20px] leading-[34px] tracking-[1.5px] underline hover:cursor-pointer hover:text-yellow-text"><Link to="/it-operations">IT Operations Management (ITOM)</Link></div>
            <div className=" text-[20px] leading-[34px] tracking-[1.5px] underline hover:cursor-pointer hover:text-yellow-text"><Link to="/It-Asset">IT Asset Management (ITAM)</Link></div>
            <div className=" text-[20px] leading-[34px] tracking-[1.5px] underline hover:cursor-pointer hover:text-yellow-text"><Link to="/integrated">Integrated Risk Management (IRM)</Link></div>
            <div className=" text-[20px] leading-[34px] tracking-[1.5px] underline hover:cursor-pointer hover:text-yellow-text"><Link to="/GenAI">AI and GenAI</Link></div>
            <div className=" text-[20px] leading-[34px] tracking-[1.5px] underline hover:cursor-pointer hover:text-yellow-text"><Link to="/StratagicPortfolio">Strategic Portfolio Management (SPM)</Link></div>
          </div>

          {/* Subcategories for CONSULTING */}
          <div
            className={`bg-body-bg border-l border-white  transition-all duration-500 ease-in-out overflow-hidden transform text-[20px] leading-[27px] ${isOpenThirdService2
              ? "opacity-100 translate-x-0 max-h-[1000px]"
              : "opacity-0 -translate-x-full max-h-0"
              } py-9 px-8 flex flex-col min-w-[386px] max-w-[410px] ${!isOpenThirdService2 && "hidden"}`}
          >
            <div className=" text-[20px] leading-[34px] tracking-[1.5px] underline hover:cursor-pointer hover:text-yellow-text"><Link to="/StratagicPlanning">Strategic Planning</Link></div>
            <div className=" text-[20px] leading-[34px] tracking-[1.5px] underline hover:cursor-pointer hover:text-yellow-text"><Link to="/Business-analysis">Business Analysis</Link></div>
            <div className=" text-[20px] leading-[34px] tracking-[1.5px] underline hover:cursor-pointer hover:text-yellow-text"><Link to="/Process-improvements">Process Improvement </Link></div>
            <div className=" text-[20px] leading-[34px] tracking-[1.5px] underline hover:cursor-pointer hover:text-yellow-text"><Link to="/TechnologyStrategy">Technology Strategy</Link></div>
            
          </div>

          {/* Subcategories for Services */}
          <div
            className={`bg-body-bg border-l border-white  transition-all duration-500 ease-in-out overflow-hidden transform text-[20px] leading-[27px] ${isOpenManagedService
              ? "opacity-100 translate-x-0 max-h-[1000px]"
              : "opacity-0 -translate-x-full max-h-0"
              } py-9 px-8 flex flex-col min-w-[386px] max-w-[410px] ${!isOpenManagedService && "hidden"}`}
          >
            <div className=" text-[20px] leading-[34px] tracking-[1.5px] underline hover:cursor-pointer hover:text-yellow-text"><Link to="/fully-managed">Fully Managed Platform</Link></div>
            <div className=" text-[20px] leading-[34px] tracking-[1.5px] underline hover:cursor-pointer hover:text-yellow-text"><Link to="/upgrade-support">Upgrade Support</Link></div>
            <div className=" text-[20px] leading-[34px] tracking-[1.5px] underline hover:cursor-pointer hover:text-yellow-text"><Link to="/Staff-Augmentation">Staff Augmentation </Link></div>
            
            
          </div>
          {/* Subcategories for enhancement */}
          <div
            className={`bg-body-bg border-l border-white  transition-all duration-500 ease-in-out overflow-hidden transform text-[20px] leading-[27px] ${isOpenEnhancement
              ? "opacity-100 translate-x-0 max-h-[1000px]"
              : "opacity-0 -translate-x-full max-h-0"
              } py-9 px-8 flex flex-col min-w-[386px] max-w-[410px] ${!isOpenEnhancement && "hidden"}`}
          >
             <div className=" text-[20px] leading-[34px] tracking-[1.5px] underline hover:cursor-pointer hover:text-yellow-text"><Link to="/System-Enhancements">System Enhancements</Link></div>
            <div className=" text-[20px] leading-[34px] tracking-[1.5px] underline hover:cursor-pointer hover:text-yellow-text"><Link to="/Performance-Tuning">Performance Tuning</Link></div>
            <div className=" text-[20px] leading-[34px] tracking-[1.5px] underline hover:cursor-pointer hover:text-yellow-text"><Link to="/IntegrationServices">Integration Services </Link></div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
