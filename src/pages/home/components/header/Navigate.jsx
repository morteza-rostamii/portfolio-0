import { faker } from '@faker-js/faker'
import React, { useContext, useEffect, useRef, useState } from 'react'
import useOnce from '../../../../hooks/useOnce';
import { styled } from 'styled-components';
import { HomeContext } from '../../providers/HomeProvider';

import { secIds } from '../../providers/HomeProvider'; 
import useWindowResize from '../../hooks/useWindowResize';

export const items = [
  {
    id: 0,
    name: 'home',
    text: 'Home',
  },
  {
    id: 1,
    name: 'about',
    text: 'About',
  },
  {
    id: 2,
    name: 'projects',
    text: 'Projects',
  },
  {
    id: 3,
    name: 'skills',
    text: 'Skills',
  },
  {
    id: 4,
    name: 'contact',
    text: 'Contact',
  },
]

const Navigate = () => {
  // width of each item
  const [itemWs, setItemWs] = useState({}); // [23 ,24, 56]
  // button position on x-axis
  const [activeLen, setActiveLen] = useState(0);
  // length of the active button
  const [activeW, setActiveW] = useState(null);

  // window resize
  const {windowWidth} = useWindowResize();

  const gap = 12; // 12px

  function handActiveTab(id) {
    
    setActiveW(itemWs[`${id}`]);

    const length = id;
    let sum = 0;
    const theGap = id * gap;

    // on i === 0 =: do nothing
    for (let i =0; i < length; i++) {
      //if (i === 0) break;
      //console.log('&&&&&&7', itemWs[id] + id * gap)
      sum += itemWs[`${i}`];
    }

    sum += theGap;

    setActiveLen(sum);
  }

  // init the width of active button
  useEffect(() => {
    if (!activeW) {
      setActiveW(itemWs['0']);
    }
  }, [itemWs])

  return (
    <nav
    className='
    hidden
    md:flex items-center gap-3
    #bg-red-100
    '
    >
      {
        items.map(x => (
          <NavItem
          key={x.id}
          item={x}
          itemWs={itemWs}
          activeW={activeW}
          setItemWs={setItemWs}
          activeLen={activeLen}
          handActiveTab={handActiveTab}
          />
        ))
      }
    </nav>
  )
}

// nav item
const NavItem = ({
  item,
  itemWs,
  setItemWs,
  activeLen,
  handActiveTab,
  activeW,
}) => {
  const {
    curSection, 
    //curSectionId,
  } = useContext(HomeContext);
  const {windowWidth} = useWindowResize();

  const ref = useRef(null);

  function scrollOnClick(name) {

    //console.log(item.id)
    console.log('curSec--ass:: ', curSection)
    //handActiveTab(curSectionId);

    const element = document.querySelector(`#${name}`);
    element.scrollIntoView({
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    if (!ref.current) return;
    //console.log(ref.getBoundingClientRect())

    const width = ref.current.offsetWidth;
    setItemWs(c => ({
      ...c,
      [item.id]: width,
    }));
  }, [windowWidth]);

  //console.log('-boob=', activeLen)
  //console.log(itemWs[activeLen - 1])

  // every time curSection changes => move nav-item animation
  useEffect(() => {
    console.log('love--', curSection)
    handActiveTab(secIds[curSection])
  }, [curSection, itemWs]);

  console.log('----google', activeW, item.id, itemWs)
  return (
    <CssNavItem
    id='nav-item'
    className='
    #bg-white rounded-md
    text-gray-700 font-semibold
    z-10
    py-1 
    transition-all
    hover:text-blue-600
    '
    style={{
      paddingLeft: '6px',
      paddingRight: '6px',
    }}
    
    itemId={item.id}
    item_width={activeW}
    itemWs={itemWs}
    active_len={activeLen}
    onClick={() => scrollOnClick(item.name)}
    ref={ref}
    >
      <span
      className='
      '
      >
      {item.text}
      </span>
    </CssNavItem>
  )
} 

const CssNavItem = styled.div`
  position: relative;
  cursor: pointer;
  ${({itemId, item_width, itemWs, active_len}) => itemId === 0 ? `
  &:after {
    content: '';
    width: ${item_width}px;
    height: 100%;
    background: #86efac;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transform: translateX(${active_len}px);
    transition: all .2s ease-in-out;
    padding-left: 6px;
    padding-right: 6px;
    border-radius: 30%;
  }
  ` : ''}
`

export default Navigate