import React from 'react'

import loader from '../assets/loader.json'
import Lottie from 'lottie-react'

const PreLoader = () => {

  return (
    <div
    className='
    fixed top-0 left-0
    grid place-items-center
    bg-white bg-opacity-80
    z-50 w-screen h-screen
    '
    >
      <Lottie
      animationData={loader}
      loop={true}
      />
    </div>
  )
}

export default PreLoader