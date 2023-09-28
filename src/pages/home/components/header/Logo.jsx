import React, { useState } from 'react'
import { SiReactos } from 'react-icons/si'
import {RiJavascriptFill} from 'react-icons/ri'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  function handGoHome() {
    const element = document.querySelector(`#home`);
    element.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <button
    id='logo'
    className='
    flex items-center gap-3
    cursor-pointer
    '
    
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}

    onClick={handGoHome}
    >
      <motion.div
      className='
      text-emerald-400
      '

      animate={{
        scale: isHovered ? 1.2 : 1,
      }}
      transition={{
        duration: .2,
      }}
      
      >
        {/* <SiReactos
        size={28}
        /> */}
        {/* <RiJavascriptFill size={40}/> */}
        <svg 
        style={{
          width: '40px'
        }}
        viewBox="0 0 900 900" >
        <defs>
          <style>{`.cls-1{fill:#0f9;}`}</style>
        </defs>
        <g id="Layer_2-2" data-name="Layer 2">
          <g>
            <polygon
              className="cls-1"
              points="362.37 642.14 87.89 642.14 87.89 227.36 315.25 0 0 0 0 900 362.37 900 362.37 642.14"
            />
            <polygon
              className="cls-1"
              points="812.11 0 812.11 642.14 556.77 900 900 900 900 0 812.11 0"
            />
          </g>
        </g>
      </svg>
      </motion.div>

      <div
      className='
      flex flex-col items-center
      text-neutral-700 text-xl font-bold
      #bg-pink-100
      overflow-hidden
      h-7
      '
      >
        <motion.div
        className='
        shrink-0
        '
        animate={{
          y: isHovered ? -30 : 0,
        }}
        transition={{
          duration: .2,
        }}
        >
        rostami
        </motion.div>
        <motion.div
        className='
        shrink-0
        '
        animate={{
          y: isHovered ? -30 : 0,
        }}
        transition={{
          duration: .2,
        }}
        >
          home
        </motion.div>
      </div>
    </button>
  )
}

export default Logo