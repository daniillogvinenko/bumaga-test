import React from 'react'
import LatestArticlesCard from '../../entities/LatestArticlesCard/ui/LatestArticlesCard';
import arrowImg from './assets/Arrow.svg'
import classes from './LatestArticles.module.css'

const LatestArticles = () => {
  return (
    <div className='pl-[101px] pr-[53px]'>
      <div className='flex justify-between mb-[30px] items-center'>
        <h2 className='uppercase font-Chava text-[28px] leading-[32px]'>Последние СТатьи</h2>
        <div className={`flex ${classes.Link}`}>
          <a className='text-[18px] leading-[22px] font-VelaSans font-bold opacity-60 mr-[10px] hover:text-[#1800FF] hover:opacity-100 duration-300' href="/">Показать все статьи</a>
          <img className={classes.arrowImg} src={arrowImg} alt="arrow" />
        </div>
      </div>
      <div className='flex justify-between'>
        <LatestArticlesCard 
          title='Как дизайнеру найти для 
          себяновый стиль: '
          subtitle='Cпойлер 
          забыть все что знал раньше'
        />
        <LatestArticlesCard 
          title='Где искать клиентов с деньгами 
          и почему они прячутся: '
          subtitle='Cпойлер 
          Спойлер они среди нас'
        />
        <LatestArticlesCard 
          title='Куда деваются дизайнеры 
          с курсов и почему это важно: '
          subtitle='Спойлер они зарабатывают'
        />
      </div>
    </div>
  )
}

export default LatestArticles;