import React, { useEffect, useState } from 'react'

import { projects } from '../../datas/data'
import BetterCard from './BetterCard'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const ProjList = () => {

  //const [hasScrolled, setHasScrolled] = useState(false);
  const [projs, setProjs] = useState(projects);
  const [currentProj, setCurrentProj] = useState(0);

  /* function rotateLeft(arr, k=-1) {
    arr = [...arr];

    const arrFirst = arr.shift();
    arr.push(arrFirst);
    setProjs(arr);
  }

  function rotateRight(arr, k=1) {
    arr = [...arr];
    console.log('enter: ', arr)
    const arrLast = arr.pop();
    arr.unshift(arrLast);
    console.log('exit: ', arr);
    setProjs(arr);
  }

  // projects-container scroll and rotate
  function handScroll(e) {

    //setHasScrolled(true);
    // how much scrolled from the left of screen
    const scrollLeft = e.target.scrollLeft;
    const scrollWidth = e.target.scrollWidth;
    const clientWidth = e.target.clientWidth;

    //console.log(scrollLeft, scrollWidth, clientWidth)
    if (scrollLeft + clientWidth >= scrollWidth) {
      console.log('the end from rigth');
      setTimeout(() => {
        rotateRight(projs);
      }, 200);
    }

    if (scrollLeft === 0) {
      console.log('end of left');
      setTimeout(() => {
        rotateLeft(projs);
      }, 200);
    }
  } */

  function handGoRight() {
    if (currentProj < projs.length - 1) {
      console.log(`#proj-${currentProj + 1}`)
      setCurrentProj(c => c + 1);
      
    }
  }

  function handGoLeft() {
    if (currentProj > 0) {
      setCurrentProj(c => c - 1);
    }
  }

  useEffect(() => {
    const element = document.querySelector(`#proj-${currentProj}`);
    element.scrollIntoView({
      behavior: 'smooth',
    });
  }, [currentProj])
  
  return (
    <div
    id='projects-list'
    /* 
    relative
    flex overflow-x-scroll overflow-y-hidden
    snap-x snap-mandatory z-20
    w-full bg-red-200
    */
    className='
    flex #relative
    z-20
    overflow-x-scroll overflow-y-hidden
    snap-x snap-mandatory
    h-screen w-screen
    '
    /* style={{
      //overflow: 'hidden !important',
      minWidth: 0,
      flex: '1 0 auto',
      //flexWrap: 'wrap',
      maxWidth: '300px'
    }} */
    //ref={scrollContainRef}

    //onScroll={(e) => handScroll(e)}
    >
      {
        projs.map((x) => (
          <BetterCard
          key={x.id}
          item={x}
          directionLeft={x.id < 8 ? true : false}

          setCurrentProj={setCurrentProj}
          />
        ))
      }

      {/* <div
      className='
      absolute top-1/2 left-4 right-4
      flex items-center justify-between
      bg-orange-100 #w-full #max-w-[800px]
      h-0
      '
     
      >
        <button
        className='
        bg-emerald-500 p-4
        rounded-full bg-opacity-50
        text-white
        '
        onClick={handGoLeft}
        >
          <HiChevronLeft size={24}/>
        </button>
        <button
        className='
        bg-emerald-500 p-4
        rounded-full bg-opacity-50
        text-white

        '
        onClick={handGoRight}
        >
          <HiChevronRight size={24}/>
        </button>
      </div> */}
    </div>
  )
}

export default ProjList