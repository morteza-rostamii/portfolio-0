import { useEffect, useState } from "react";

function useWindowResize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handResize);

    return () => window.removeEventListener('resize', handResize);
  },[]);

  return {windowWidth};
}

export default useWindowResize;