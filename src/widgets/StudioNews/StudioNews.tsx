import React from 'react'
import News from '../../entities/News/News';
import picture from './media/Group 39929.png'

const StudioNews = () => {
  return (
    <div>
        <h2 className='uppercase text-[38px] leading-[45px] font-bold text-white bg-[#111111] inline-block px-[25px] py-[7.5px]'>новости нашей студии</h2>
        <div className='flex items-start'>
          <News
            date='12.05.2023'
            title='Создание сайта для бизнес коуча PROBUSINESS'
            hashtag='#проекты'
          />
          <img src={picture} alt="" />
        </div>
    </div>
  )
}

export default StudioNews;