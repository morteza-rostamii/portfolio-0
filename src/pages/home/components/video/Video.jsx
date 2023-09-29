import React, { useContext, useRef } from 'react'
import useIsInViewport from '../../hooks/useIsInViewport';
import ReactPlayer from 'react-player'
import { HomeContext } from '../../providers/HomeProvider';
import useVideoInView from '../../hooks/useVideoInView';

import {motion} from 'framer-motion'

const Video = () => {
  const ref = useRef(null);
  const [
    isIntersecting,
  ] = useIsInViewport(ref);

  //const {curSection} = useContext(HomeContext);
  const {
    isInView,
    videoRef,
  } = useVideoInView();

  return (
    <section
    id='video'
    className='
    grid place-items-center
    relative
    h-full w-full
    #bg-orange-50
    p-10
    '
    >
      
      <div
      className='
      flex flex-col items-center justify-center text-center gap-4
      mt-20
      '
      >
        <motion.div
        className='
        absolute top-24 text-center
        left-0 right-0 mx-auto
        flex flex-col items-center justify-center gap-2
        '
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        >
          <h2
          className='
          text-2xl text-gray-800 font-bold
          self-center
          border-b-4 border-emerald-400

          uppercase tracking-[20px] text-center
          '
          
          >
            my message
          </h2>
          <p
          className='
          text-gray-500 tracking-[3px] text-sm
          '
          >
            message to all employers
          </p>
        </motion.div>

        <div
        
        className='
        rounded-md overflow-hidden
        object-cover bg-gray-100 border-2  
        '
        >

          <ReactPlayer 
          
          loop={true}
          ref={videoRef}
          //playing={curSection === 'video' ? true : false}
          //muted={true}
          volume={.5}
          style={{
            backgroundColor: 'gray',
            aspectRatio: '3/2',
            objectFit: 'cover',
            borderRadius: "2px",
            overflow: 'hidden',

            
          }}
          //light={true}
          playIcon={true}
          controls={true}
          url='/home/me_video.mp4' 
          
          width={'320px'}
          height={'450px'}
          />

        </div>
      </div>

    <div
    className='
    absolute bottom-10 left-0
    '
    ref={ref}
    ></div>
    </section>
  )
}

export default Video