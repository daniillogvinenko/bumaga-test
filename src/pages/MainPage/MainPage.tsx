import React from 'react'
import StudioNews from '../../widgets/StudioNews/StudioNews';
import Header from '../../widgets/Header/Header';
import Sidebar from '../../widgets/Sidebar/Sidebar';

const MainPage = () => {
    return (
        <div className='bg-paperBackground'>
            <Header />
            <div className='flex'>
                <Sidebar />
                <StudioNews />
            </div>
        </div>
    )
}

export default MainPage;