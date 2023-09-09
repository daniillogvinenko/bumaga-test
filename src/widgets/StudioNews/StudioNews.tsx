import React from 'react'
import News from '../../entities/News/News';
import picture from './media/Group 39929.png'

const StudioNews = () => {
  return (
    <div className='w-full border-2 border-solid border-black border-opacity-20 pl-[101px] border-l-0 border-r-0 flex justify-between'>
      <div>
        <h2 className='uppercase text-[38px] leading-[45px] font-bold text-white bg-[#111111] inline-block px-[25px] py-[7.5px]'>новости нашей студии</h2>
        
          <News
            date='12.05.2023'
            title='Создание сайта для бизнес коуча PROBUSINESS'
            hashtag='#проекты'
          />
      </div>
      <img src={picture} alt="" />
    </div>
  )
}

export default StudioNews;