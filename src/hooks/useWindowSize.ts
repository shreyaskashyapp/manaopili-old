import { useState, useEffect } from "react";

interface WindowSize {
    width: number;
    height: number;
}

function useWindowSize(): WindowSize {
  // State to store the window dimensions
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: screen.width,
        height: screen.height,
      });
    }

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets the initial window size
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures this effect runs only on mount

  return windowSize;
}

export default useWindowSize;
