import React, { useRef, useState } from 'react';
import Menu from "./object/Menu";
import MenuPage from "./object/MenuPage";
import Footer from './object/Footer';
import GameItem from './object/GameItem';

import '../style/game.scss';

const Game = () => {
    return (  
        <div className='game'>
            <Menu />
            <MenuPage title='互動遊戲體驗' />
            <div className='content'>
                <div className='text text1'>INTERACTIVE GAMES</div>
                <div className='text text2'>INTERACTIVE GAMES</div>
                <div className='text text3'>INTERACTIVE GAMES</div>
                <div className='text text4'>INTERACTIVE GAMES</div>
                <div className='frame c'>
                    <div className='video'>
                    <video src="../img/video.mp4" className="video-element" controls></video>
                    </div>
                    <div className='img c'>
                        <img src='/img/game1.png'></img>
                        <img className='white-frame' src='/img/game3.png'></img>
                        <img src='/img/game2.png'></img>
                    </div>
                    <div className='game-list'>
                        <div className='row c'>
                            <GameItem img="/img/game4.png" title="夢話奇緣" />
                            <GameItem img="/img/game4.png" title="快門冒險" />
                            <GameItem img="/img/game4.png" title="魔法寶石大冒險" />
                            <GameItem img="/img/game4.png" title="經營大亨" />
                        </div>
                        <div className='row c'>
                            <GameItem img="/img/game4.png" title="夢話奇緣" />
                            <GameItem img="/img/game4.png" title="快門冒險" />
                            <GameItem img="/img/game4.png" title="魔法寶石大冒險" />
                            <GameItem img="/img/game4.png" title="經營大亨" />
                        </div>
                        <div className='row c'>
                            <GameItem img="/img/game4.png" title="夢話奇緣" />
                            <GameItem img="/img/game4.png" title="快門冒險" />
                            <GameItem img="/img/game4.png" title="魔法寶石大冒險" />
                            <GameItem img="/img/game4.png" title="經營大亨" />
                        </div>
                        <div className='row c'>
                            <GameItem img="/img/game4.png" title="夢話奇緣" />
                            <GameItem img="/img/game4.png" title="快門冒險" />
                            <GameItem img="/img/game4.png" title="魔法寶石大冒險" />
                            <GameItem img="/img/game4.png" title="經營大亨" />
                        </div>
                        <div className='row c'>
                            <GameItem img="/img/game4.png" title="夢話奇緣" />
                            <GameItem img="/img/game4.png" title="快門冒險" />
                            <GameItem img="/img/game4.png" title="魔法寶石大冒險" />
                            <GameItem img="/img/game4.png" title="經營大亨" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Game;
