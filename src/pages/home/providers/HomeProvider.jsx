import React, { createContext, useEffect, useMemo, useState } from 'react'

const sections = ['home', 'about', 'projects', 'skills', 'contact'];
export const secIds = {
  'home': 0,
  'about': 1,
  'projects': 2,
  'skills': 3,
  'contact': 4,
};

export const HomeContext = createContext({});

//let curSectionId = 0;

const HomeProvider = ({
  children,
}) => {
  const [curSection, setCurSection] = useState(sections[0]);
  //const [curSectionId, setCurSectionId] = useState(0);

  function nextSection() {
    // find the index of current section + 1 = next section
    const curSecInx = sections.indexOf(curSection);
    //console.log(curSecInx)
    let nextSecInx = 0;
    if (curSecInx < sections.length - 1) {
      nextSecInx = curSecInx + 1;
    } else {
      // go back to first section
      nextSecInx = 0;
    }

    const element = document.querySelector(`#${sections[nextSecInx]}`);
    element.scrollIntoView({
      behavior: 'smooth'
    })
    
    //setCurSection(sections[nextSecInx]);
  }

  // this runs after next section is set:
  useEffect(() => {
    /* console.log('--cur section', curSection)

    const element = document.querySelector(`#${curSection}`);
    console.log(curSection === 'contact')

    // scroll through each section back to home

    if (curSection === 'home') {
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.querySelector(`#${sections[i]}`);
        element.scrollIntoView({
          behavior: 'smooth'
        })
      }
    } */

    // problem: if smooth scroll to the top: observer reads the sections in between coming into view and set the curSection again. 
    /* if (curSection === 'home') {
      element.scrollIntoView({
        behavior: 'instant',
      })
    } else {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    } */

    //curSectionId = secIds[curSection];
  }, [curSection]);

  /* useEffect(() => {
    console.log(curSectionId)
  }, [curSectionId]); */

  /* const contextObj = useMemo(() => {
    return {
      curSection: curSection,
      //curSectionId: curSectionId, 
      setCurSection: setCurSection,
      nextSection: nextSection,
    };
  }, [curSection]); */

  return (
    <HomeContext.Provider
    value={{
      curSection: curSection,
      //curSectionId: curSectionId, 
      setCurSection: setCurSection,
      nextSection: nextSection,
    }}
    >
      {children}
    </HomeContext.Provider>
  )
}

export default HomeProvider