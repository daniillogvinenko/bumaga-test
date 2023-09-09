import React from 'react'
import LatestProjectsCard from '../../entities/LatestProjectsCard/ui/LatestProjectsCard';
import classes from './LatestProjects.module.css'
import arrowImg from './assets/Arrow.svg'

const LatestProjects = () => {
  return (
    <div>
      <div className='flex justify-between mb-[30px] items-center'>
        <h2 className='uppercase font-Chava text-[28px] leading-[32px]'>Последние СТатьи</h2>
        <div className={`flex ${classes.Link}`}>
          <a className='text-[18px] leading-[22px] font-VelaSans font-bold opacity-60 mr-[10px] hover:text-[#1800FF] hover:opacity-100 duration-300' href="/">Показать все статьи</a>
          <img className={classes.arrowImg} src={arrowImg} alt="arrow" />
        </div>
      </div>
      <div className='flex justify-between pl-[101px] pr-[53px]'>
        <LatestProjectsCard 
          title='TOFU STUDIO'
          hashtag='#web-site'
        />
        <LatestProjectsCard 
          title='TOFU STUDIO'
          hashtag='#web-site'
        />
        <LatestProjectsCard 
          title='TOFU STUDIO'
          hashtag='#web-site'
        />
      </div>
    </div>
  )
}

export default LatestProjects;