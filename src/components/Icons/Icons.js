import React from 'react';
import IconsSvg from './icons.svg';

export default function Icons(props) {
  const {color, size,id} = props

  return(
    <svg 
        className={id} 
        fill={color} 
        stroke={color} 
        width={size} 
        height={size}
        >
      <use xlinkHref={`${IconsSvg}#${id}`} />
    </svg>
  )
}

