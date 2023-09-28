import { useEffect, useRef } from "react";

function useOnce(func) {
  const ref = useRef(true);

  useEffect(() => {
    if (ref.current) {
      func();
      ref.current = false;
    }
  }, []);
}

export default useOnce;