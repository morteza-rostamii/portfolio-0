import React from 'react'
import styled from 'styled-components'

const Rain = () => {
  const elements = [1, 2, 3];
  
  return (
    <CssRain
    id='rain'
    className='
    absolute top-0 bottom-0 left-0 right-0
    w-full h-full bg-red-50 bg-opacity-50
    '
    >
      {elements.map((_, index) => (
        <div className="glowing" key={index}>
          {elements.map(i => (
            <span style={{ '--i': i }} key={i}></span>
          ))}
        </div>
      ))}
    </CssRain>
  )
}

const CssRain = styled.div`

`

export default Rain