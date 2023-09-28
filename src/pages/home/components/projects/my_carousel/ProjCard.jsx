import React, { forwardRef } from 'react'

// use forwardRef: 
  // to connect parent.ref to child_element 
const ProjCard = forwardRef((props, ref) => {
  const {item} = props;

  return (
    <div
    id='carousel-card'
    className='
    flex flex-col
    overflow-hidden rounded-md
    bg-neutral-100
    '
    style={styles.card}

    ref={ref}
    >
      
      <img 
      id='carousel-img'
      className='
      max-w-full
      object-cover
      h-auto
      '
      src={item.image} 
      alt={item.name}
      style={styles.img}
      />

      {/* <p>
        {item.name}
      </p> */}
    </div>
  )
})

// styles
const styles = {
  card: {
    margin: '0',
    padding: '0',
    width: 'inherit',
    height: 'inherit',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  img: {
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
}

export default ProjCard;