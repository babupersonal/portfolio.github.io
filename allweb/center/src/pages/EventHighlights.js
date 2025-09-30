import React, { useRef, useState } from 'react';
import Menu from "./object/Menu";
import MenuPage from "./object/MenuPage";
import Footer from './object/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../style/event-highlights.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const EventHigh = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}">${index + 1}</span>`;
        },
    };    
    return (
        <div className='event-highlights'>
            <Menu />
            <MenuPage title='活動剪影' />
            <div className='content c'>
                <div className='frame c'>
                    <div className='bg c' style={{ backgroundImage: `url(/img/highlight2.png)`, backgroundSize: 'cover' }}>
                    <img className='image' src='/img/highlight1.png'></img>
                    <img className='image2' src='/img/highlight1.png'></img>
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className=" "
                    >
                        <SwiperSlide>
                            <div className='img c'>
                                <img src='/img/highlight3.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='img c'>
                                <img src='/img/highlight3.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='img c'>
                                <img src='/img/highlight3.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='img c'>
                                <img src='/img/highlight3.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='img c'>
                                <img src='/img/highlight3.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='img c'>
                                <img src='/img/highlight3.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='img c'>
                                <img src='/img/highlight3.png'></img>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                </div>
                <div className='describe'>
                    <h3>OOXX活動</h3>
                    <p>活動剪影介紹嗚嗚嗚嗚嗚嗚活動剪影介紹嗚嗚嗚嗚嗚嗚活動剪影介紹嗚嗚嗚嗚嗚嗚活動剪影介紹嗚嗚嗚嗚嗚嗚活動剪影介紹嗚嗚嗚嗚嗚嗚活動剪影介紹嗚嗚嗚嗚嗚嗚
                        活動剪影介紹嗚嗚嗚嗚嗚嗚活動剪影介紹嗚嗚嗚嗚嗚嗚
                        活動剪影介紹嗚嗚嗚嗚嗚嗚活動剪影介紹嗚嗚嗚嗚嗚嗚
                        活動剪影介紹嗚嗚嗚嗚嗚嗚活動剪影介紹嗚嗚嗚嗚嗚嗚
                        活動剪影介紹嗚嗚嗚嗚嗚嗚活動剪影介紹嗚嗚嗚嗚嗚嗚
                        活動剪影介紹嗚嗚嗚嗚嗚嗚</p>
                </div>
            </div>
            <div className='content c'>
                <div className='describe'>
                    <h3>OOXX活動</h3>
                    <p>活動剪影介紹嗚嗚嗚嗚嗚嗚活動剪影介紹嗚嗚嗚嗚嗚嗚活動剪影介紹嗚嗚嗚嗚嗚嗚活動剪影介紹嗚嗚嗚嗚嗚嗚活動剪影介紹嗚嗚嗚嗚嗚嗚活動剪影介紹嗚嗚嗚嗚嗚嗚
                        活動剪影介紹嗚嗚嗚嗚嗚嗚活動剪影介紹嗚嗚嗚嗚嗚嗚
                        活動剪影介紹嗚嗚嗚嗚嗚嗚活動剪影介紹嗚嗚嗚嗚嗚嗚
                        活動剪影介紹嗚嗚嗚嗚嗚嗚活動剪影介紹嗚嗚嗚嗚嗚嗚
                        活動剪影介紹嗚嗚嗚嗚嗚嗚活動剪影介紹嗚嗚嗚嗚嗚嗚
                        活動剪影介紹嗚嗚嗚嗚嗚嗚</p>
                </div>
                <div className='frame c'>
                    <div className='bg bg2 c' style={{ backgroundImage: `url(/img/highlight2.png)`, backgroundSize: 'cover' }}>
                    <img className='image' src='/img/highlight1.png'></img>
                    <img className='image3' src='/img/highlight1.png'></img>
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className=" "
                    >
                        <SwiperSlide>
                            <div className='img c'>
                                <img src='/img/highlight3.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='img c'>
                                <img src='/img/highlight3.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='img c'>
                                <img src='/img/highlight3.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='img c'>
                                <img src='/img/highlight3.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='img c'>
                                <img src='/img/highlight3.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='img c'>
                                <img src='/img/highlight3.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='img c'>
                                <img src='/img/highlight3.png'></img>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default EventHigh;
