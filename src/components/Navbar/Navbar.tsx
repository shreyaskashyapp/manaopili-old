import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppLogo from "./AppLogo";
import ToggleMenuClose from "../Svgs/ToggleMenuClose";
import ToggleMenuOpen from "../Svgs/ToggleMenuOpen";
import ServicePopOver from "./ServicePopOver";
import MobileMegaMenu from "./MobileMegaMenu";
type NavbarType = {
  bgImgUrl: string;
};

const Navbar: React.FC<NavbarType> = ({ bgImgUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShowImg, setIsImg] = useState(false);
  const [flyer, setFlyer] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15); // Set scrolled state based on scroll position
      setIsImg(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }

    return () => {
      document.body.style.removeProperty("overflow");

    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`p-4 top-0 z-50 w-full transition-all duration-300 ease-in-out fixed
                    ${isScrolled ? `${isShowImg ? "bg-body-bg" : ""} ` : "bg-transparent"} hover:bg-body-bg`} // Add hover:bg-white for background color change
        style={{
          transition:
            "background-color 0.5s ease-in-out, background-color 0.3s ease-in-out", // Add transition for background
        }}
      >
        <div className="flex justify-between items-center 3xl:mx-[20%] lg:mx-[80px] md:ml-[18px] mx-auto relative">
          {/* Logo Section */}
          <div
            className="flex xl:pr-32  "
            onMouseEnter={() => {
              setFlyer(false);
            }}
          >
            <AppLogo />
          </div>

          {/* Hamburger Menu Button for Mobile */}
          <button
            className="lg:hidden focus:outline-none relative w-10 h-10"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <div
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"
                }`}
            >
              <ToggleMenuOpen />
            </div>

            {/* Close Icon */}
            <div
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
            >
              <ToggleMenuClose />
            </div>
          </button>

          {/* Desktop Links Section */}
          <div className="hidden lg:flex lg:items-center lg:gap-8 w-full justify-between">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/services"
                  className="text-white hover:text-hover-yellow transition-colors duration-300 xl:text-[24px] sm:text-[18px] tracking-[1.5px]" // Change text to black on hover
                  onMouseEnter={() => {
                    setFlyer(true);
                  }}
                >
                  SERVICES
                </Link>
                <ServicePopOver isOpen={flyer} setFlyer={setFlyer} />
              </li>
              <li
                onMouseEnter={() => {
                  setFlyer(false);
                }}
              >
                <Link
                  to="/about"
                  className="text-white hover:text-yellow-text transition-colors duration-300 xl:text-[24px] sm:text-[18px] tracking-[1.5px]" // Change text to black on hover
                >
                  ABOUT
                </Link>
              </li>
              <li
                onMouseEnter={() => {
                  setFlyer(false);
                }}
              >
                <Link
                  to="/non-profit"
                  className="text-white hover:text-yellow-text transition-colors duration-300 xl:text-[24px] sm:text-[18px] tracking-[1.5px]" // Change text to black on hover
                >
                  NON-PROFIT
                </Link>
              </li>
            </ul>

            {/* Survey Button */}
            <ul
              className="ml-8"
              onMouseEnter={() => {
                setFlyer(false);
              }}
            >
              <li>
                <Link
                  to="/survey"
                  className="text-white hover:text-yellow-text transition-colors duration-300 flex items-center xl:text-[24px] sm:text-[18px] tracking-[1.5px]" // Adjust hover to black for contrast
                >
                  SURVEY{" "}
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                    >
                      <path
                        d="M1.81648 1.2057C1.42596 0.81518 0.792793 0.81518 0.402268 1.2057C0.0117439 1.59623 0.0117439 2.22939 0.402268 2.61992L1.81648 1.2057ZM13.9999 15.8034C14.5522 15.8034 14.9999 15.3556 14.9999 14.8034L14.9999 5.80335C14.9999 5.25107 14.5522 4.80335 13.9999 4.80335C13.4476 4.80335 12.9999 5.25107 12.9999 5.80335L12.9999 13.8034L4.99992 13.8034C4.44763 13.8034 3.99992 14.2511 3.99992 14.8034C3.99992 15.3556 4.44763 15.8034 4.99992 15.8034L13.9999 15.8034ZM0.402268 2.61992L13.2928 15.5105L14.707 14.0962L1.81648 1.2057L0.402268 2.61992Z"
                        fill="var(--arrow-color)"
                      />
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu Section */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out bg-body-bg overflow-hidden ml-[-16px] ${isOpen ? "h-screen opacity-100 w-full absolute z-50 top-[78px] pb-5" : "max-h-0 opacity-0"
            }`}
          style={{ transitionProperty: "max-height, opacity" }}
        >
          <ul className="flex flex-col space-y-4 mt-4 px-4 h-[calc(100vh-78px)] overflow-auto pb-14">
            <li>
              <MobileMegaMenu />
            </li>
          </ul>
        </div>
      </nav>
      {/* Backdrop for ServicePopOver */}
      {
        flyer && (
          <div
            className="fixed bg-black inset-0 z-40 body-bg bg-opacity-50"
            onClick={() => setFlyer(false)} // Close the popover when clicking the backdrop
          />
        )
      }
    </>

  );
};

export default Navbar;
