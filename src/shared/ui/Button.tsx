import React from 'react'
import { ButtonProps } from '../types'

const Button = ({ title, styles }:ButtonProps) => {

  return (
    <button className={`${styles} MyButton `}
    >
      <span>
        {title}
      </span>
      <svg className='ml-[18.75px]'
        width="15" 
        height="15" 
        viewBox="0 0 15 15" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.75 1.25V13.75M13.75 13.75H1.25M13.75 13.75L1.25 1.25" stroke="#76FF03" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

    </button>
  )
}

export default Button