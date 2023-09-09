import React from 'react'
import StudioNews from '../../widgets/StudioNews/StudioNews';
import Header from '../../widgets/Header/Header';
import Sidebar from '../../widgets/Sidebar/Sidebar';
import IntroBlock from '../../widgets/IntroBlock/IntroBlock';

const MainPage = () => {
    return (
        <div className='bg-paperBackground'>
            <Header />
            <main className='flex'>
                <Sidebar />
                <div className='pt-[60px] w-full'>
                    <IntroBlock />
                    <StudioNews />
                </div>
            </main>
        </div>
    )
}

export default MainPage;