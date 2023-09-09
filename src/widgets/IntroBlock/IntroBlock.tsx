import React from 'react'
import Button from '../../shared/ui/Button/Button';
import comeInPicture from './assets/comein.png'
import someTailsPicture from './assets/sometails.png'

const IntroBlock = () => {
  return (
    <div className='pl-[101px] '>
        <div className='flex justify-between'>
            <h1 className='font-VelaSans text-[52px] leading-[72px] uppercase'>
                Освободите свой бизнес от <span className='font-bold'>рамок</span> и <span className='font-bold'>правил </span><br />
                с прорывными решениями, придающими <br />
                <span className='font-bold'> свежесть</span> и <span className='font-bold'>неординарность</span>
            </h1>
            <div className='absolute right-0'>
                <img src={comeInPicture} alt="" />
                <img className='relative bottom-[190px] right-[140px]' src={someTailsPicture} alt="" />
            </div>
        </div>
        <Button title='Оставить заявку' styles='mt-[20px] mb-[70px] px-[70.5px] py-[15px]'/>
    </div>
  )
}

export default IntroBlock;