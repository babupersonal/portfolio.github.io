import React, { useRef, useState } from 'react';
import Menu from "./object/Menu";
import MenuPage from "./object/MenuPage";
import Footer from './object/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Mousewheel } from 'swiper/modules';  // 引入 Mousewheel 模組

import '../style/video.scss'; 

const Videos = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowButton(false);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowButton(true);
    }
  };

  return (
    <div className="videos">
      <Menu />
      <MenuPage title="最新影音" />
      <div className="introduce c">
        <div className="describe c">
          <p>影音內容介紹...影音內容介紹...影音內容介紹...影音內容介紹...</p>
          <div className="btn c">
            瞭解更多<img src='./img/right-arrow.png' className="more_btn" />
          </div>
        </div>
        <div className="video-container" onClick={togglePlayPause}>
          <video ref={videoRef} src="../img/video.mp4" className="video-element"></video>
          {showButton && (
            <button className="play-pause-btn c">
              <img 
                src={isPlaying ? "../img/pause.png" : "../img/play-button.png"} 
                alt={isPlaying ? "Pause" : "Play"} 
                className="play-pause-icon" 
              />
            </button>
          )}
        </div>
      </div>

      <div className="video-list">
        <div className="white-block-container">
            {[...Array(29)].map((_, index) => (
            <div key={index} className="white-block"></div>
            ))}
        </div>
        <div className="white-bottom-block-container">
            {[...Array(29)].map((_, index) => (
            <div key={index} className="white-block"></div>
            ))}
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          freeMode={true}
        //   pagination={{
        //     clickable: true,
        //   }}
          direction="horizontal"
          mousewheel={{ invert: false }} 
          modules={[FreeMode, Pagination, Mousewheel]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="vdo">
              <div className="img c">
                <img src="../img/introduce.png" alt="Video Thumbnail" />
              </div>
              <div className="content">
                <p>影片描述1</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="vdo">
              <div className="img c">
                <img src="../img/introduce.png" alt="Video Thumbnail" />
              </div>
              <div className="content">
                <p>影片描述2</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="vdo">
              <div className="img c">
                <img src="../img/introduce.png" alt="Video Thumbnail" />
              </div>
              <div className="content">
                <p>影片描述3</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="vdo">
              <div className="img c">
                <img src="../img/introduce.png" alt="Video Thumbnail" />
              </div>
              <div className="content">
                <p>影片描述3</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="vdo">
              <div className="img c">
                <img src="../img/introduce.png" alt="Video Thumbnail" />
              </div>
              <div className="content">
                <p>影片描述3</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <Footer />
    </div>
  );
};

export default Videos;
