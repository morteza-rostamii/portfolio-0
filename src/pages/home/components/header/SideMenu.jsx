import React from 'react'
import { HiX } from 'react-icons/hi'

import {motion} from 'framer-motion'
import { menuSlide, slide } from '../../animate/animate'
import { Link } from 'react-router-dom'
import Logo from './Logo'

import { items } from './Navigate'

const SideMenu = ({
  setIsSideActive,
}) => {
  return (
    <motion.div
    className='
    fixed top-0 right-0 bottom-0
    flex flex-col items-center gap-10
    h-screen bg-neutral-900 text-gray-100
    p-28
    '
    initial={{ 
      x: 200,
      //opacity: 0, 
    }}
    animate={{ 
      x: 5,
      /* transition: {
        duration: 0.2,
        ease: [0.83, 0, 0.17, 1],
      } */
      //opacity: 1  
    }}
    exit={{ 
      //opacity: .5 
      x: 300,
    }}
 
    >
      
      <button
      className='
      absolute top-10 right-10
      bg-white text-black
      '
      onClick={() => setIsSideActive(false)}
      >
        <HiX size={24}/>
      </button>
      
      <div>
      <Logo/>
      </div>
    
      {
        items && items.length
        ?(
          items.map((x) => (
            <SideItem
            item={x}
            />
          ))
        ):('')
      }
    </motion.div>
  )
}

const SideItem = ({
  item,
}) => {
  return (
    <motion.div
    variants={slide}
    animate={'enter'}
    exit={'exit'}
    >
      <Link
      to={'#home'}
      >
        {item.text}
      </Link>
    </motion.div>
  )
}

export default SideMenu