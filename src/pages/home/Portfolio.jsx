import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { motion } from "framer-motion";
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Header from './components/header/Header';
import Section from './components/Section';
import { HomeContext } from './providers/HomeProvider';

import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import { HiChevronDoubleDown, HiChevronDoubleUp, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { HiOutlineChevronDoubleDown, HiOutlineChevronDoubleUp } from 'react-icons/hi2';

const sections = [
  {
    id: 0,
    element: <Hero/>,
  },
  {
    id: 1,
    element: <About/>,
  },
  {
    id: 2,
    element: <Projects/>,
  },
  {
    id: 3,
    element: <Skills/>,
  },
  {
    id: 4,
    element: <Contact/>,
  },
]

const Portfolio = () => {

  const {
    curSection,
    nextSection
  } = useContext(HomeContext);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    body.style.overflow = 'hidden';
    html.style.overflow = 'hidden';
  }, [])

  return (
    <main
    className='
    scroll-container
    #mt-14
    '
    style={{
      scrollSnapType: 'y mandatory',
      //scrollPaddingTop: '10vh',
      //scrollPaddingBottom: '15vh',
      overflowY: 'scroll',
      height: '100vh',
    }}
    >
      <Header/>
      {
        sections.map(s => (
          <Section
          key={s.id}
          >
            {s.element}
          </Section>
        ))
      }

      {/* scroll next section */}
      <div
      className='
      absolute bottom-0 left-0 right-0
      flex items-center justify-center
      bg-green-300 h-0 
      '
      >
      <button
      className='
      flex items-center justify-center text-center
      bg-emerald-300
      p-2 px-6 
      w-14 h-14 rounded-full bg-opacity-50 #bg-transparent
      -translate-y-20 
      animate-bounce -mt-14
      '
      style={{
        zIndex: '9999'
      }}
      onClick={nextSection}
      >
        {
          curSection === 'contact'
          ?(
            <span
            className='
            
            '
            >
              <HiChevronUp
              className='
              '
              size={40}
              />
            </span>
          ):(
            <span
            className='
            
            '
            >
              <HiChevronDown
              className='
              '
              size={40}
              />
            </span>
          )
        }

      </button>

      </div>
    </main>
  )
}

export default Portfolio;