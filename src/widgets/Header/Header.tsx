import React from 'react'
import Marquee from 'react-fast-marquee';
import { headerText } from './constants';

const Header = () => {
  return (
    <div>
        <Marquee className='' speed={120}>
            <span className = 'font-Chava text-[22px] leading-[26px] bg-[#76FF03] py-[12px] inline-block'>
                {headerText}
            </span>
        </Marquee>
    </div>
  )
}

export default Header;