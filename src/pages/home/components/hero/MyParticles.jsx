import React from 'react'

import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

import {particles_options} from '../../utils/particles'

const MyParticles = () => {

  const initParticles = async (main) => {

    await loadFull(main);
  } 

  return (
    <div
    className='
    absolute top-0 bottom-0 left-0 right-0 
    flex
    bg-red-100 w-full h-full
    '
    >
      <Particles
      
      id='particles-compo'
      init={initParticles}
      options={particles_options}
      height='100%'
      width='100%'
      />

    </div>
  )
}

export default MyParticles