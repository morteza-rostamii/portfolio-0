import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { projects } from '../../../datas/data';
import BetterCard from '../BetterCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const RSlider = () => {
  const [projs, setProjs] = useState(projects);

  return (
    <div
    className='
    relative
    z-10
    '
    >
      <Carousel
      //infiniteLoop={true}
      showArrows={true}
      showStatus={false}

      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <button 
        className='
        nav_btn nav_btn_left
        absolute top-1/2 left-32
        bg-purple-400 bg-opacity-60 rounded-full p-2
        cursor-pointer z-10 text-white
        hover:bg-purple-500 transition-all duration-100 ease-in-out
        '
        onClick={onClickHandler}>
          <HiChevronLeft size={24}/>
        </button>
      ) 
      }

      renderArrowNext={(onClickHandler, hasNext, label) => 
        <button 
        className='
        nav_btn nav_btn_right
        absolute top-1/2 right-32
        bg-purple-400 bg-opacity-60 rounded-full p-2
        cursor-pointer z-10 text-white
        hover:bg-purple-500 transition duration-75

        '
        onClick={onClickHandler}>
          <HiChevronRight size={24}/>
        </button>
      }

      showIndicators={false}
      >

        {
          projects.map((x) => (
            <BetterCard
            key={x.id}
            item={x}
            />
          ))
        }
        
      </Carousel>
    </div>
  )
}

export default RSlider