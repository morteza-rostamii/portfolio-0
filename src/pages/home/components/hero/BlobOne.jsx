import React from 'react'

const BlobOne = ({
  color,
  size,
  position,
}) => {
  return (
    <div
    className={`
    ${position}
    absolute 
    -translate-y-1/2
    
    `}
    >
      <div
      className={`
      ${color} 
      ${size}
       
      rounded-full
      mix-blend-multiply filter blur-md
      opacity-60
      animate-blob
      `}
      >
      </div>
    </div>
  )
}

export default BlobOne