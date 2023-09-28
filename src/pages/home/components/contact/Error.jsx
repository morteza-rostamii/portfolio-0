import React from 'react'

const Error = ({
  err,
}) => {
  return (
    <p
    className='
    mt-2 text-red-400 font-semibold
    #bg-red-100 p-2 py-0 rounded-md underline
    '
    >
      {err}
    </p>
  )
}

export default Error