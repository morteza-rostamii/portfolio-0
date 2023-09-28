import React from 'react'

import {RxDotFilled} from 'react-icons/rx'
import {AnimatePresence, delay, motion} from 'framer-motion'
import { styled } from 'styled-components'
/* 

dot-1: 
  # delay: 0
  # duration: 10

dot-2: 
  # delay: 10
  # duration: 10

dot-3:
  # delay: 20
  #duration: 10

*/

const dots = [
  {

  },
  {

  },
  {

  },
]

const TypingIndicator = () => {
  //const delay = 2;
  const duration = 5;

  return (
    <AnimatePresence>

    <div
    className='
    absolute bottom-10 left-10
    flex gap-2 items-center justify-center
    '
    >
      <span
      className='
      text-gray-700
      '
      >
        typing
      </span>
      {
        dots && dots.length
        ?(
          dots.map((d, i) => (
            <Dot 
            key={i}
            delay={i * duration}
            duration={duration}
            />
          ))
        ):('')
      }
    </div>
    </AnimatePresence>
  )
}

const Dot = ({
  delay,
  duration,
}) => {

  const dotVariants = {
    initial: { 
      y: 0,
      transition:{
        damping: 0, 
        delay: 0,
      }
    },
    animate: { 
      y: 5, 
      transition: { 
        duration: duration, 
        repeat: Infinity, 
        ease: 'easeIn', 
        type: 'spring', 
        damping: 8, 
        //stiffness: 100 ,
        delay: delay,
        //bounce: 0.5,
        //mass: .3,
      } 
    },
    exit: { 
      y: 0, 
      transition: { duration: 1 } }
  };

  console.log(delay)
  return (
    <motion.span
    className='
    #w-2 #h-2 #bg-purple-300
    '

    variants={dotVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    //transition={{ delay }}
    >
      <CssDot
      className='
      w-2 h-2 bg-neutral-800 rounded-full
      '
      duration={duration}
      delay={delay}
      >
      </CssDot>
    </motion.span>
  )
}

const CssDot = styled.div`
  animation: dotColor infinite;
  animation-delay: ${props => props.delay}s;
  animation-duration: ${props => props.duration}s;

  @keyframes dotColor {
    from {background-color: gray;}
    to {background-color: black;}
  }
`

export default TypingIndicator