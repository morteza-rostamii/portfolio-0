import React, { useEffect, useRef } from 'react'

import {motion} from 'framer-motion'

import { useInView } from 'framer-motion'

const ProgressBar = ({
  name,
  progress,
}) => {
  const elementRef = useRef(null);
  const isInView = useInView(elementRef);

  useEffect(() => {
  
    if (isInView && elementRef.current) {
      console.log('--in view');
      /* setTimeout(() => {
        console.log('--animate')
        elementRef.current.animate({
          opacity: 1,
          width: '100%',
          transition: {
            duration: 1,
            type: 'spring',
          }
        })
      }, 1000); */
    }
  }, [isInView]);

  return (
    <div
    className='
    relative
    flex-1
    bg-white
    overflow-hidden rounded-sm
    '
    >
      <span
      className='
      text-black
      '
      >
      {name}
      </span>

      <motion.div
      id='progress-bar'
      className='
      absolute top-0 left-0
      bg-emerald-500
      #w-0 h-full bg-opacity-50
      '
      ref={elementRef}

      style={{
        width: isInView ? `${progress}%` : "0%",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
      /* initial={{
        opacity: 0,
        width: '0%',
      }} */
      /* animate={{
        width: '90%',
      }} */
      >
      </motion.div>
    </div>
  )
}

export default ProgressBar