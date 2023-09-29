import { faker } from "@faker-js/faker";

import {FaCss3Alt, FaHtml5, FaNodeJs, FaReact} from 'react-icons/fa'
import {BiLogoTailwindCss} from 'react-icons/bi'
import {TbBrandJavascript, TbBrandNextjs} from 'react-icons/tb'
import {SiMui, SiRedux, SiTypescript} from 'react-icons/si'
import {PiFramerLogoFill} from 'react-icons/pi'
import {BsFillBootstrapFill} from 'react-icons/bs'

export const projects = [
  {
    id: 0,
    name: 'Quiz App',
    description: faker.lorem.words(10),
    image: 'https://placehold.co/400',
    link: ''
  },
  {
    id: 1,
    name: 'Poll App',
    description: faker.lorem.words(10),
    image: 'https://placehold.co/400',
    link: '',
  },
  {
    id: 2,
    name: 'Mad Libs Game',
    description: faker.lorem.words(10),
    image: 'https://placehold.co/400',
    link: `${process.env.REACT_APP_URL}/mad-libs`,
  },
  {
    id: 3,
    name: 'Pinterest',
    description: faker.lorem.words(10),
    image: 'https://placehold.co/400',
    link: `${process.env.REACT_APP_URL}/pinterest`,
  },
  {
    id: 4,
    name: 'Carousel',
    description: faker.lorem.words(10),
    image: 'https://placehold.co/400',
    link: ''
  },
]

export const skills = [
  {
    id: 0,
    name: 'html',
    color: '#DF4D26',
    progress: 90,
    icon: <FaHtml5/>
  },
  {
    id: 1,
    name: 'css',
    color: '#1C87C3',
    progress: 90,
    icon: <FaCss3Alt/>
  },
  {
    id: 2,
    name: 'javascript',
    color: '#F0DA1E',
    progress: 90,
    icon: <TbBrandJavascript/>
  },
  {
    id: 3,
    name: 'react',
    color: '#61D5F4',
    progress: 90,
    icon: <FaReact/>
  },
  {
    id: 4,
    name: 'redux',
    color: '#7D50BB',
    progress: 70,
    icon: <SiRedux/>
  },
  {
    id: 5,
    name: 'tailwind',
    color: '#39B9F3',
    progress: 80,
    icon: <BiLogoTailwindCss/>
  },
  {
    id: 6,
    name: 'node js',
    color: '#73AB62',
    progress: 60,
    icon: <FaNodeJs/>
  },
  {
    id: 7,
    name: 'material ui',
    color: '#007EFE',
    progress: 60,
    icon: <SiMui/>
  },
  {
    id: 8,
    name: 'bootstrap',
    color: '#8A15FC',
    progress: 50,
    icon: <BsFillBootstrapFill/>
  },
  {
    id: 9,
    name: 'framer motion',
    color: '#010100',
    progress: 40,
    icon: <PiFramerLogoFill/>
  },
  {
    id: 10,
    name: 'typescript',
    color: '#3175C0',
    progress: 80,
    icon: <SiTypescript/>
  },
  {
    id: 11,
    name: 'next js',
    color: '#333',
    progress: 80,
    icon: <TbBrandNextjs/>
  },
]