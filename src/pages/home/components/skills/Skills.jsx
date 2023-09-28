import React, { useRef } from 'react'
import useIsInViewport from '../../hooks/useIsInViewport';

import SkillItem from './SkillItem';

import { skills } from '../../datas/data';
import CircleItem from './CircleItem';
import {motion} from 'framer-motion'

const Skills = () => {
  const ref = useRef(null);
  const [
    isIntersecting,
  ] = useIsInViewport(ref);

  return (
    <div
    id='skills'
    className='
    relative
    grid place-items-center
    w-full h-full
    #bg-neutral-50 p-8 overflow-hidden
    '
    >
      <div
      id='skills-section-container'
      className='
      flex flex-col justify-center text-center gap-4
      w-full
      md:w-9/12 
      '
      >
        <motion.div
        className='
        absolute top-24 text-center
        left-0 right-0 mx-auto
        flex flex-col items-center justify-center gap-2
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
          <h2
          className='
          text-2xl text-gray-800 font-bold
          self-center
          border-b-4 border-emerald-400

          uppercase tracking-[20px] text-center
          '
          
          >
            Skills
          </h2>
          <p
          className='
          text-gray-500 tracking-[3px] text-sm
          '
          >
            Hover on a skill for proficiency
          </p>
        </motion.div>

        {/* skills */}
        <div
        className='
        grid grid-cols-4 gap-5 
        w-full justify-items-center max-w-lg mx-auto
        
        '
        >
          {
            skills.map(x => (
              <CircleItem
              key={x.id}
              item={x}
              directionLeft={x.id < 8 ? true : false}
              />
            ))
          }

          
        </div>

      </div>

      {/* api observer */}
      <div
      className='
      absolute bottom-10 left-0
      '
      ref={ref}
      ></div>
    </div>
  )
}

export default Skills