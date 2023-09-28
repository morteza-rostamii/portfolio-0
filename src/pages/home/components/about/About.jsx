import React, { useEffect, useRef } from 'react'
import useIsInViewport from '../../hooks/useIsInViewport';
import SocialBtn from './SocialBtn';

import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {RiTwitterXLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';

import {motion} from 'framer-motion'

const socials = [
  {
    id: 0,
    name: 'Githhub',
    link: '',
    icon: <BsGithub size={28}/>
  },
  {
    id: 1,
    name: 'Linkedin',
    link: '',
    icon: <BsLinkedin size={28}/>
  },
  {
    id: 2,
    name: 'Twitter',
    link: '',
    icon: <RiTwitterXLine size={28}/>
  },
]

const About = () => {
  const ref = useRef(null);
  const [
    isIntersecting,
  ] = useIsInViewport(ref);

  function handGoContact() {
    const element = document.querySelector(`#contact`);
    element.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <section
    id='about'
    className='
    grid place-items-center
    relative
    h-full w-full
    #bg-orange-50
    p-10
    '
    >
      
      <div
      className='
      flex flex-col items-center justify-center text-center gap-4
      mt-20
      '
      >
        <h2
        className='
        text-2xl text-gray-500 font-bold
        border-b-4 border-emerald-400 
        
        absolute top-24
        uppercase tracking-[20px] text-center
        '
        >
          About Me
        </h2>

        <motion.img 
        className='
        block
        w-32 h-32 rounded-full
        object-cover
        '
        src="/home/me3.jpg" 
        alt="me" 
        
        initial={{
          x:-200,
        }}
        whileInView={{
          x: 0,
        }}
        viewport={{
          //once: true,
        }}
        
        />

        <p
        className='
        text-lg text-gray-600
        '
        style={{
          maxWidth: '500px'
        }}
        >
          i'm a <span className='text-purple-600 font-bold tracking-wider'>frontend developer</span> from iran. these days i am 100% focus on learning and working with <span className='text-purple-600 font-bold tracking-wider'>react js</span>. if your looking for a motivated person who loves programing and <span className='text-purple-600 font-bold tracking-wider'>hard work</span>, <button className='font-bold text-lg underline hover:text-blue-500' onClick={() => handGoContact()}>contact</button> me. hopfully i'm not hired yet! :)
        </p>

        {/* social btns */}
        <div
        className='
        flex gap-10 items-center
        '
        >
          {
            socials.map((x) => (
              <SocialBtn
              key={x.id}
              social={x}
              />
            ))
          }
        </div>
      </div>

    <div
    className='
    absolute bottom-10 left-0
    '
    ref={ref}
    ></div>
    </section>
  )
}

export default About