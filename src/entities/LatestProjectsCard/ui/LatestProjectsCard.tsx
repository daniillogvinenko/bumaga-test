import React from 'react'
import img1 from '../assets/img1.png'
import { LatestProjectsCardProps } from '../types';
import classes from './LatestProjectsCard.module.css'

const LatestProjectsCard = ({ title, hashtag }: LatestProjectsCardProps) => {
  return (
    <div className={classes.LatestProjectsCard}>
        <img className={``} src={img1} alt="img1" />
        <div className='mt-[15px] leading-[28px]'>
            <span className='font-bold'>{title}</span><br />
            <span>{hashtag}</span>
        </div>
    </div>
  )
}

export default LatestProjectsCard;