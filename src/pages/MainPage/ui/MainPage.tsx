import React from 'react'
import StudioNews from '../../../widgets/StudioNews/StudioNews';
import Header from '../../../widgets/Header/Header';
import Sidebar from '../../../widgets/Sidebar/Sidebar';
import IntroBlock from '../../../widgets/IntroBlock/IntroBlock';
import LatestArticles from '../../../widgets/LatestArticles/LatestArticles';
import LatestProjects from '../../../widgets/LatestProjects/LatestProjects';

const MainPage = () => {
    return (
        <div className='bg-paperBackground bg-fixed'>
            <Header />
            <main className='flex'>
                <Sidebar />
                <div className='pt-[60px] w-full'>
                    <LatestProjects />
                    <IntroBlock />
                    <StudioNews />
                    <LatestArticles />
                </div>
            </main>
        </div>
    )
}

export default MainPage;