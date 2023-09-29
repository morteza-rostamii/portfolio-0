import { useEffect, useMemo, useRef, useState } from "react";

function useVideoInView() {

  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef(null);

  const player = useMemo(() => {
    if (!videoRef.current) return;
    return videoRef.current.getInternalPlayer();
  }, [videoRef.current]);

  const handleIntersection = (entries) => {
    const entry = entries[0];
  
    if (entry.isIntersecting) {
      setIsInView(true);
      player.muted = true;
      player.play();
    } else {
      setIsInView(false);
      player.pause();
    }
  };

  useEffect(() => {
    if (!videoRef.current) return;

    // get the actual video element

    console.log(player)

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    });
  
    if (player) {
      observer.observe(player);
    }
  
    return () => {
      if (player) {
        observer.unobserve(player);
      }
    };
  }, [videoRef.current]);

  return {
    isInView,
    videoRef,
  }
}

export default useVideoInView;