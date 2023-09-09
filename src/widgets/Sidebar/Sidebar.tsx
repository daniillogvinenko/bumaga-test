import React from 'react'
import LangSwitch from '../../shared/ui/LangSwitch/LangSwitch';
import logo from './assets/logo.png'

const Sidebar = () => {
  return (
    <aside className='min-w-[357px] font-VelaSans text-[20px] leading-[22px] min-h-screen border-2 border-solid border-black border-opacity-20 border-t-0'>
      <img
        src={logo} 
        alt="BUMAGA-logo"
        className='absolute mt-[-50px] ml-[53px] z-10 w-[246px]'
      />
      <div className='h-[345px] '></div>
      <div className='py-[20px] pl-[53px] border-2 border-solid border-black border-opacity-20 border-r-0'>
        Проекты
      </div>
      <div className='py-[20px] pl-[53px] border-2 border-solid border-black border-opacity-20 border-t-0 border-r-0'>
        Статьи
      </div>
      <div className='py-[20px] pl-[53px] border-2 border-solid border-black border-opacity-20 border-t-0 border-r-0'>
        Контакты
      </div>
      <div className='py-[20px] pl-[53px] border-2 border-solid border-black border-opacity-20 border-t-0 border-r-0'>
        О нас
      </div>
      <div className='w-full border-solid border-black border-opacity-20  border-r-0'>
        <LangSwitch active='eng' styles='ml-[53px] mt-[50px]'/>
      </div>
    </aside>
  )
}

export default Sidebar;