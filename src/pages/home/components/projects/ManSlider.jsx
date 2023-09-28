import { Carousel } from '@mantine/carousel'
import React from 'react'
import ProjectCard from './ProjectCard'

import {HiChevronRight} from 'react-icons/hi'
import {HiChevronLeft} from 'react-icons/hi'

const ManSlider = ({
  projects,
}) => {
  return (
    <Carousel 
    maw={320} 
    mx="auto" 
    //withIndicators
    height={300}
    //maw={'100%'} 
    
    /* mx={'auto'}
    withIndicators
    height={300}
    slideSize="100%"
    slideGap="md"
    loop
    align="start"
    breakpoints={[
      { maxWidth: 'sm', slideGap: 0,   },
      { maxWidth: 'md',  },
      {maxWidth: 'lg', }
    ]} */
    /* slideSize={'100%'}
    slideGap={10}
    maw={'100%'} 
    mx="auto" 
    withIndicators 
    height={400}
    
    loop={true} */
    //dragFree={true}
    /* controlsOffset={33}
    controlSize={40}
    nextControlIcon={<HiChevronRight size={40} color='#6ee7b7'/>}
    previousControlIcon={<HiChevronLeft size={40} color='#6ee7b7'/>} */
    //align={'center'}
    /* containScroll='trimSnaps'
    styles={{
      control: {
        //backgroundColor: '#6ee7b7',
        //borderColor: '#6ee7b7',
        border: 'solid 3px #6ee7b7'
      }
    }} */
    >
      {
        projects && projects.length
        ?(
          projects.map(x => (
          <Carousel.Slide
          key={x.id}
          >
            <ProjectCard
            item={x}
            />
          </Carousel.Slide>
          ))
        ):('')
      }
    </Carousel>
  )
}

export default ManSlider