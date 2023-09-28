import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const BetterCard = ({
  item,
}) => {
  return (
    /* 
    w-full flex-shrink-0 snap-center
    flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-full
    */
    <motion.div
    id={`proj-${item.id}`}
    className='
    flex flex-col space-y-5 items-center justify-center
    #p-20
    flex-shrink-0 snap-center 
    w-full mt-20
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
      <Link
      className='
      block #h-[100px] #w-[100px]
      '
      to={item.link}
      target='_blank'
      >
      <img 
      className='
      #h-[200px] #w-[200px]
      max-h-[200px]
      object-cover rounded-md
      '
      src={item.image} 
      alt={item.name} 

      /* initial={{
        y: -300,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1, 
      }}
      transition={{
        duration: 1.2,
      }}
      viewport={{
        //once: true,
      }} */
      />
      </Link>
      <Link
      className='
      text-xl font-semibold text-gray-700 underline
      '
      to={item.link}
      target='_blank'
      >
        {item.name}
      </Link>
      <p
      className='
      max-w-md p-0 m-0
      text-gray-600
      '
      >
        {item.description}
      </p>
    </motion.div>
  )
}

export default BetterCard