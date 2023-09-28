import React from 'react'

import {motion} from 'framer-motion'

const Circle = () => {
  return (
    <motion.div
    className='
    absolute top-0 bottom-0 left-0 right-0 
    flex items-center justify-center
    #bg-red-100 
    '
    initial={{
      //opacity: 0,
    }}

    animate={{
      scale: [1, 2, 2, 3, 1],
      //opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 0.1],
      borderRadius: ['20%', '20%', '50%', '80%', '20%'],
    }}

    transition={{
      duration: 2.5,
    }}
    >
      <div 
      className='
      absolute border border-gray-300 rounded-full h-[200px] w-[200px]
      animate-ping
      '
      />
      <div 
      className='
      absolute border border-gray-300 rounded-full h-[300px] w-[300px]
      animate-pulse opacity-10
      '
      />
      <div 
      className='
      absolute border border-gray-100 rounded-full h-[500px] w-[500px]
      '
      />
      <div 
      className='
      absolute border border-gray-300 rounded-full h-[650px] w-[650px]
      animate-pulse opacity-20
      '
      />
      {/* <div 
      className='
      absolute border border-gray-300 rounded-full h-[800px] w-[800px]

      '
      /> */}
    </motion.div>
  )
}

export default Circle