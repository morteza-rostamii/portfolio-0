import { faker } from '@faker-js/faker'
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import Logo from './Logo'
import Navigate from './Navigate'

import {HiMail, HiMenuAlt1} from 'react-icons/hi'
import SideMenu from './SideMenu'
import { AnimatePresence } from 'framer-motion'
import useWindowResize from '../../hooks/useWindowResize'
import {motion} from 'framer-motion'

const Header = () => {
  const [isSideActive, setIsSideActive] = useState(false);

  function handGoContact() {
    const element = document.querySelector(`#contact`);
    element.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <header
    
    className='
    fixed top-0 left-0 right-0
    flex items-center
    bg-white bg-opacity-70
    p-4 px-10
    h-16 z-30
    shadow-md
    '

    >
      <div
      className='
      flex items-center justify-between
      #container mx-auto max-w-7xl w-full
      '
      >
        {/* left */}
        <motion.div
        id='header-left'
        className='
        flex items-center gap-3
        '

        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1, 
          scale: 1,
        }}

        transition={{
          duration: 1,
        }}
        >
          <Logo/> 
        </motion.div>

        {/* right */}
        <motion.div
        className='
        flex items-center gap-3
        '

        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1, 
          scale: 1,
        }}

        transition={{
          duration: .5,
        }}
        >
          
          <Navigate/>

          {/* contact mobile */}
          <button
          //to={''}
          className='
          flex items-center gap-2
          md:hidden
          '
          onClick={() => handGoContact()}
          >
            <HiMail 
            color='gray'
            size={24}
            />
            <span
            className='
            text-sm text-gray-600
            '
            style={{
              fontFamily: 'space mono'
            }}
            >
              Get in touch
            </span>
          </button>

          {/* ham */}
          {/* <button
          className='
          flex
          bg-orange-200 p-1
          md:hidden
          '
          onClick={() => setIsSideActive(true)}
          >
            <HiMenuAlt1 size={24}/>
          </button> */}
        </motion.div>
      </div>

      {/* side menu */}
      {/* <AnimatePresence mode='wait'>
      {
        isSideActive &&
          <SideMenu
          setIsSideActive={setIsSideActive}
          />
      }
      </AnimatePresence> */}

    </header>
  )
}

export default Header