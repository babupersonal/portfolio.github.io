import React from 'react';
import '../../style/object/MenuPage.scss';
import { Link } from 'react-router-dom';

const MenuPage = ({ title }) => {
    return (
        <div className='menupage page'>
            <div className='icon'>
                <div className='img c'><img src='./img/facebook.png' alt='Facebook Icon' /></div>
                <div className='img c'><img src='./img/youtube.png' alt='YouTube Icon' /></div>
                <div className='img c'><img src='./img/line.png' alt='Line Icon' /></div>
            </div>
            <div className='img'>
                <img src='../img/menupage.png' alt="Menu Page" />
            </div>
            <div className='title'>
                {title}
            </div>
        </div>
    );
};

export default MenuPage;
