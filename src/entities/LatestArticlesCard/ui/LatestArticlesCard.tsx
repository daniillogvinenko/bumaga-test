import React from 'react'
import img1 from '../assets/CardImg1.png'
import './LatestArticlesCard.css'
import { LatestArticlesCardProps } from '../types'

const LatestArticlesCard = ({ title, subtitle }: LatestArticlesCardProps) => {
  return (
    <div className='font-VelaSans text-[20px] LatestArticlesCard w-[32.5%]'>
        <div className=''>
            <img className='w-full' src={img1} alt="img1" />
            <div className='mt-[15px] leading-[28px]'>
                <span className='font-bold'>{title}</span>
                <span>{subtitle}</span>
            </div>
        </div>
    </div>
  )
}

export default LatestArticlesCard;