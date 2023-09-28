import { useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

import {motion} from 'framer-motion'
import useIsInViewport from '../hooks/useIsInViewport';

const Section = ({
  children,
}) => {

  /* const Child = React.cloneElement(children, {
    ref: ref,
  }) */

  return (
    <section
    className='
    home-section
    container mx-auto
    #bg-cyan-50
    h-screen
    '
    
    >
      {children}
    </section>
  )
}

export default Section