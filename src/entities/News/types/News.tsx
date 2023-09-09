import React from 'react'
import { NewsProps } from '.';

const News = ({ date, title, hashtag }:NewsProps) => {
  return (
    <div className='flex items-center'>
        <div className='font-normal text-[16px] leading-[22px] text-[#111111] opacity-70'>{date}</div>
        <div className='font-bold text-[20px] leading-[22px]'>{title}</div>
        <div className='font-semibold text-[16px] leading-[22px] text-[#111111]'>{hashtag}</div>
    </div>
  )
}

export default News;