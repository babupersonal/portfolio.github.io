import React, { useRef, useState } from 'react';
import Menu from "./object/Menu";
import MenuPage from "./object/MenuPage";
import Footer from './object/Footer';

import '../style/edu.scss';

const Edu3 = () => {
    return (  
        <div className='edu1'>
            <Menu />
            <MenuPage title='升學四季、二專' />
            <Footer />
        </div>
    );
};

export default Edu3;
