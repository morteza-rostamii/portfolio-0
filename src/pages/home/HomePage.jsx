import React from 'react'
import Portfolio from './Portfolio'
import HomeProvider from './providers/HomeProvider'

const HomePage = () => {
  return (
    <HomeProvider>
    <Portfolio/>
    </HomeProvider>
  )
}

export default HomePage