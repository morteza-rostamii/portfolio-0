import { useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

import {motion} from 'framer-motion'
import useIsInViewport from '../../hooks/useIsInViewport';
import BlobOne from './BlobOne';
import BlobTwo from './BlobTwo';

import {BsGithub} from 'react-icons/bs'
import {HiFaceSmile} from 'react-icons/hi2'
import { styled } from 'styled-components';
import TypeWriter from './TypeWriter';
import {FaReact} from 'react-icons/fa'
import MyParticles from './MyParticles';
import Rain from './Rain';

import { Link } from 'react-router-dom';
import Circle from './Circle';

const Hero = () => {
  const ref = useRef(null);
  const [
    isIntersecting,
  ] = useIsInViewport(ref);

  
  return (
    <section
    id='home'
    className={`
    relative
    grid place-items-center
    w-full h-full
    overflow-hidden
    #bg-neutral-50 p-8
    `}
    //ref={ref}

    /* style={{
      backgroundImage: "linear-gradient(to right top, #fafafa, #f9f9f9, #f7f8f7, #f6f6f6, #f5f5f5)",
    }} */
    >
    
      {/* content */}
      <div
      className='
      relative
      flex flex-col items-center justify-center gap-6

      #bg-gray-50 p-10  
      '
      >
        {/* text */}
        <div
        className='
        flex flex-col gap-4 items-center
        text-center
        z-10
        #w-1/2
        '
        >
          <h1
          className='
          inline-block relative
          text-xl
          md:text-3xl text-gray-800 capitalize
          '
          >
            {/* &nbsp; */}
            my name is <CssHighLight
            className='
            block
            leading-loose
            font-bold text-slate-800
            #border-b-4 border-emerald-400
            text-xl 
            md:text-3xl
            md:inline
            '
            
            >
            morteza rostami
            </CssHighLight>
          </h1>
          <h2
          className='
          flex flex-col items-center justify-center gap-2
          text-xl text-gray-600

          sm:flex-row
          md:text-2xl
          '
          >
            I am a <span className='text-blue-800 font-semibold text-xl md:2xl'><TypeWriter/></span>
          </h2>
          <p
          className='
          text-gray-500 text-lg
          w-full
          md:w-96
          '
          >
            i love to code <a 
            href='https://react.dev/' target='_blank'
            className='inline-flex items-center gap-2 border-b-2 border-cyan-500 text-cyan-600'>react js<FaReact/></a> applications, and i can't wait to join your team <span
            className='
            inline-flex
            text-amber-500
            translate-y-1
            '
            >
            <HiFaceSmile size={24}/>
            </span>
          </p>
        </div>
        {/* actions */}
        <div
        className='
        z-10
        '
        >
          <CssGitBtn
          className='
          
          bg-emerald-400 
          p-2 px-6 rounded-sm
          text-white

          transition-colors
          hover:bg-emerald-500
          ' 
          >
            <Link
            to='https://github.com/morteza-rostamii?tab=repositories'
            target='_blank'
            className='
            flex items-center gap-3
            '
            >
            <span
            className='
            font-bold
            '
            >
              Github
            </span>
            <span>
              <BsGithub
              size={24}
              />
            </span>
            </Link>
          </CssGitBtn>
        </div>

        <Circle/>
        {/* <BlobTwo/> */}
      </div>
      
      {/* api observer */}
      <div
      className='
      absolute bottom-10 left-0
      '
      ref={ref}
      ></div>

      {/* rain */}
      {/* <Rain/> */}
    </section>
  )
}

const CssGitBtn = styled.div`
  cursor: pointer;
  &:hover {
    transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
    animation: gelatine 0.5s 1;
  } 

  @keyframes gelatine {
  
    0%, 100% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(0.9, 1.1);
    }
    50% {
      transform: scale(1.1, 0.9);
    }
    75% {
      transform: scale(0.95, 1.05);
    }
  }
`

const CssHighLight = styled.div`
  position: relative;

  &:before {
    content: '';
    display: block;
    height: 90%;
    width: 100%;
    margin-left: -1px;
    margin-right: -3px;
    position: absolute;
    top: 3px;
    left: -1px;
    background: #d1fae5;
    border-radius: 20% 25% 20% 24%;
    padding: 20px 5px 5px 20px;
    z-index: -1;

    
  }
`

export default Hero