import React from 'react'
import { LangSwitchProps } from '../types';

const LangSwitch = ({ active, styles }: LangSwitchProps) => {
  return (
    <div className={`${styles} rounded-full border-2 border-solid border-[#111111] inline-flex flex-auto items-center font-VelaSans text-[18px] leading-[22px] p-[5px]`}>
        <div className={`duration-300 py-[5px] px-[29px] bg-[#ffffff] text-[#111111] rounded-full ${active === 'eng' ? 'LangSwitchActive' : ''}`}>Eng</div>
        <div className={`duration-300 py-[5px] px-[29px] bg-[#ffffff] text-[#111111] rounded-full ${active === 'rus' ? 'LangSwitchActive' : ''}`}>Rus</div>
    </div>
  )
}

export default LangSwitch;