import React from 'react'
import ProgressBar from './ProgressBar'

const SkillItem = ({
  item,
}) => {
  return (
    <div
    id='skill-item'
    className='
    flex gap-2 items-center
    bg-neutral-900 p-2 rounded-md
    '
    >
      <span
      className={`
      text-5xl
      `}

      style={{
        color: item.color
      }}
      >
        {item.icon}
      </span>

      <ProgressBar
      name={item.name}
      progress={item.progress}
      />
    </div>
  )
}

export default SkillItem