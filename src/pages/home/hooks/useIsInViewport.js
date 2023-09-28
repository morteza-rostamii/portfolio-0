import { useEffect, useState, useMemo, useContext } from 'react';
import useOnce from '../../../hooks/useOnce'
import { HomeContext } from '../providers/HomeProvider';

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const {curSection, setCurSection} = useContext(HomeContext);

  const observer = useMemo(() => {
    //if (!ref) return;
    return new IntersectionObserver((entries, observer) =>
      //setIsIntersecting(entries.entry.isIntersecting),
      //console.log(entries[0].isIntersecting)
      entries.forEach(entry => {
        const intersecting = entry.isIntersecting;
        const ratio = entry.intersectionRatio;

        //entry.target.style.backgroundColor = intersecting ? 'orange' : 'red';
        //console.log(entry)
        setIsIntersecting(intersecting);
        if (intersecting) {
          //console.log('--', entry.target.parentElement.id)
          setCurSection(entry.target.parentElement.id);
          //console.log('shit!')
        } else {
          //console.log('fuck!')
        }
        
      }, {
        //options
        //threshold: .1,
        //rootMargin: '300px'
      })
    );
  }, [])

    useEffect(() => {
    if (!ref.current) return;
      //console.log('boob', ref)
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return [
    isIntersecting,
    //curSection,
  ];
}

export default useIsInViewport;