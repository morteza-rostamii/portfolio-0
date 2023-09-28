import React from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import {motion} from 'framer-motion'

const ProjectCard = ({
  item,
  handNextSlide,
  handPrevSlide,
  changeSlide,
}) => {
  return (
    <motion.div
    className='
    relative
    #flex #flex-col
    h-96
    overflow-hidden rounded-md
    '
    /* style={{
      transform: "translateX(-20%)",
    }} */
    initial={{ 
      opacity: 0,
      scale: 0,
    }}
    animate={{ 
      opacity: changeSlide ? 1 : 0,
      scale: changeSlide ? 1 : 0,
    }}
    >

      <Link
      to={item.link}
      target='_blank'
      className='
      flex
      h-full w-full
      flex-1 #grow-0
      '
      style={{
        //height: '400px'
      }}
      >
        <img 
          className='
          block
          max-w-full
          h-full w-full
          object-cover
          hover:opacity-90 transition-all
          '
          src={item.image} 
          alt={item.name} 
          />
      </Link>
      <Link
      to={item.link}
      target='_blank'

      className='
      absolute bottom-0 left-0 right-0 
      flex items-center justify-center text-center
      bg-emerald-300
      p-4 text-lg font-semibold tracking-wider
      cursor-pointer hover:underline hover:text-purple-500 transition-all
      '
      >
        {item.name}
      </Link>

      {/* buttons */}
      {/* prev and next */}
      <div
      className='
      absolute left-0 right-0
      flex items-center justify-between
      px-10
      top-1/2
      z-20
      #bg-red-500
      text-emerald-400
      '
      >
      <button
      className='
      bg-white bg-opacity-60 rounded-md
      '
      onClick={handPrevSlide}
      >
        <HiChevronLeft size={40}/>
      </button>
      <button
      className='
      bg-white bg-opacity-60 rounded-md
      '
      onClick={handNextSlide}
      >
        <HiChevronRight size={40}/>
      </button>
      </div>
    </motion.div>
  )
}

export default ProjectCard

/* 
{<img 
      className='
      max-w-full
      h-full w-full
      object-cover
      '
      src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" 
      alt="" />}
*/