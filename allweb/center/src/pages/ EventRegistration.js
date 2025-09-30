import React, { useState, useEffect } from 'react';
import Menu from "./object/Menu";
import MenuPage from "./object/MenuPage";
import Footer from './object/Footer';
import Card from './object/Card';

import '../style/eventReg.scss';

const EventReg = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) { 
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='event-registration'>
            <Menu />
            <MenuPage title='活動報名' />
            <div className='content'>
                <img className={`reg1 ${scrolling ? 'show' : ''}`} src='/img/reg1.png' alt='Reg1' />
                <img className={`reg2 ${scrolling ? 'show' : ''}`} src='/img/reg2.png' alt='Reg2' />
                <div className='card-row c'>
                    <Card
                        imgSrc='./img/about.png'
                        description='Clicbot程式教育機器人 技術體驗+職業試探體驗課程'
                        time='2024-7-19 ~ 2024-7-19'
                        location='國資圖本館二樓第一會議室'
                        endTime='當天報名'
                    />
                    <Card
                        imgSrc='./img/about.png'
                        description='Clicbot程式教育機器人 技術體驗+職業試探體驗課程'
                        time='2024-7-19 ~ 2024-7-19'
                        location='國資圖本館二樓第一會議室'
                        endTime='當天報名'
                    />
                    <Card
                        imgSrc='./img/about.png'
                        description='Clicbot程式教育機器人 技術體驗+職業試探體驗課程'
                        time='2024-7-19 ~ 2024-7-19'
                        location='國資圖本館二樓第一會議室'
                        endTime='當天報名'
                    />
                </div>
                <div className='card-row c'>
                    <Card
                        imgSrc='./img/about.png'
                        description='Clicbot程式教育機器人 技術體驗+職業試探體驗課程'
                        time='2024-7-19 ~ 2024-7-19'
                        location='國資圖本館二樓第一會議室'
                        endTime='當天報名'
                    />
                    <Card
                        imgSrc='./img/about.png'
                        description='Clicbot程式教育機器人 技術體驗+職業試探體驗課程'
                        time='2024-7-19 ~ 2024-7-19'
                        location='國資圖本館二樓第一會議室'
                        endTime='當天報名'
                    />
                    <Card
                        imgSrc='./img/about.png'
                        description='Clicbot程式教育機器人 技術體驗+職業試探體驗課程'
                        time='2024-7-19 ~ 2024-7-19'
                        location='國資圖本館二樓第一會議室'
                        endTime='當天報名'
                    />
                </div>
                <div className='card-row c'>
                    <Card
                        imgSrc='./img/about.png'
                        description='Clicbot程式教育機器人 技術體驗+職業試探體驗課程'
                        time='2024-7-19 ~ 2024-7-19'
                        location='國資圖本館二樓第一會議室'
                        endTime='當天報名'
                    />
                    <Card
                        imgSrc='./img/about.png'
                        description='Clicbot程式教育機器人 技術體驗+職業試探體驗課程'
                        time='2024-7-19 ~ 2024-7-19'
                        location='國資圖本館二樓第一會議室'
                        endTime='當天報名'
                    />
                    <Card
                        imgSrc='./img/about.png'
                        description='Clicbot程式教育機器人 技術體驗+職業試探體驗課程'
                        time='2024-7-19 ~ 2024-7-19'
                        location='國資圖本館二樓第一會議室'
                        endTime='當天報名'
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EventReg;
