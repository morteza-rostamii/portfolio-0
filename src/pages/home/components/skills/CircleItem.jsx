import React from 'react'
import {motion} from 'framer-motion'

const CircleItem = ({
  item,
  directionLeft=null,
}) => {

  // icon clone
  const iconClone = React.cloneElement(item.icon, {
    color: item.color,
  });

  if (directionLeft === null) return <></>  

  return (
    <div
    className='
    #relative
    cursor-pointer
    group
    '

    
    >
      <motion.div
      className='
      relative
      flex items-center justify-center
      text-[40px] border border-gray-300 rounded-full w-16 h-16
      #filter #group-hover:bg-gray-100
      transition duration-300 ease-in-out z-20
      ' 

      initial={{
        //directionLeft ? -200 : 200
        x: directionLeft ? '-100%' : '100%',
        opacity: 0,
      }}
      whileInView={{
        x: '0%',
        opacity: 1, 
      }}
      transition={{
        duration: 1,
      }}
      >
      {iconClone}

      {/* overlay */}
      <div
      className='
      absolute top-0 bottom-0 left-0 right-0 
      flex items-center justify-center h-full
      rounded-full
      opacity-0
      transition duration-300 ease-in-out
      group-hover:opacity-80
      group-hover:bg-gray-100
      '
      >
        <p
        className='
        text-xl font-bold text-black opacity-100
        '
        >
          {item.progress}%
        </p>
      </div>
      </motion.div>

    </div>
  )
}

export default CircleItem