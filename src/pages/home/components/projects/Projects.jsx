import React, { useEffect, useRef, useState } from 'react'
import useIsInViewport from '../../hooks/useIsInViewport';

import { projects } from '../../datas/data';
//import ManSlider from './ManSlider';
//import ProjectCard from './ProjectCard';
//import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { AnimatePresence } from 'framer-motion';

import {motion} from 'framer-motion'
//import BetterCard from './BetterCard';
//import ProjList from './ProjList';
import RSlider from './react-slider/RSlider';

const Projects = () => {
  // slide change
  const [projNum, setProjNum] = useState(0);
  const [changeSlide, setChangeSlide] = useState(true);

  const ref = useRef(null);
  
  // reference to project horiz scroll_container
  const scrollContainRef = useRef(null);

  const [
    isIntersecting,
  ] = useIsInViewport(ref);

  function changeSlideAnime() {
    setChangeSlide(false);

    setTimeout(() => {
      setChangeSlide(true);
    }, 800);
  }

  function handNextSlide() {
    console.log('asdsa', projNum, projects.length)
    if (projNum < projects.length - 1) {
      setProjNum(c => c + 1);
      changeSlideAnime();
    }
  }

  function handPrevSlide() {
    if (projNum > 0) {
      setProjNum(c => c - 1);
      changeSlideAnime();
    }
  }

  // projectContainer scroll event
  /* useEffect(() => {
    if (!scrollContainRef) return;

    function rotateProjects() {
      console.log('rotate');
    }

    scrollContainRef.addEventListener('scroll', rotateProjects);

    return () => scrollContainRef.removeEventListener('scroll', rotateProjects);
  }, [scrollContainRef]); */

  return (
    <div
    id='projects'
    className='
    relative
    grid place-items-center
    w-full h-full
    #bg-neutral-50 p-8
    overflow-hidden
    '
    >
      
      {/* center */}
      <div
      id='projects-center'
      className='
      #relative
      flex flex-col items-center justify-center text-center gap-4
      overflow-hidden
      '
      >
        <motion.h2
        className='
        text-2xl text-gray-800 font-bold
        border-b-4 border-emerald-400

        absolute top-24
        uppercase tracking-[20px] text-center
        '

        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        >
          Projects
        </motion.h2>

        <RSlider/>

        {/* <ProjList/> */}
        
        {/* background */}
        {/* bg-[#F7AB0A]/10 */}
        <div
        className='
        w-full absolute top-[30%] bg-emerald-50 left-0 h-[300px]
        -skew-y-12
        '
        ></div>
      </div>

      {/* api observer */}
      <div
      className='
      absolute bottom-10 left-0
      '
      ref={ref}
      ></div>
    </div>
  )
}

export default Projects