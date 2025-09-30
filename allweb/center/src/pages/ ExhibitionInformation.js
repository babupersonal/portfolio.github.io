import React, { useState } from 'react';
import Menu from "./object/Menu";
import MenuPage from "./object/MenuPage";
import Footer from './object/Footer';
import '../style/ex-information.scss';

const Information = () => {
    const [region, setRegion] = useState("北部");

    const regionData = {
        "北部": {
            title: "台北科技博物館",
            title2: "常設展",
            description: "這裡是北部展示的介紹內容，可以根據需要修改內容。",
            description2: "常設展...常設展...常設展...",
            img: "/img/introduce.png"
        },
        "中部": {
            title: "台中科學館",
            title2: "常設展",
            description: "這裡是中部展示的介紹內容，可以根據需要修改內容。",
            description2: "常設展...常設展...常設展...",
            img: "/img/introduce.png"
        },
        "南部": {
            title: "科學工藝博物館",
            title2: "常設展",
            description: "這裡是南部展示的介紹內容，可以根據需要修改內容。",
            description2: "常設展...常設展...常設展...",
            img: "/img/introduce.png"
        }
    };

    return (  
        <div className='ex-info'>
            <Menu />
            <MenuPage title='展場資訊' />
            <div className='content c' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/bg.png'})` }}>
                <div className='btns c'>
                    <div className='btn c' onClick={() => setRegion("北部")}>北部</div>
                    <div className='btn c' onClick={() => setRegion("中部")}>中部</div>
                    <div className='btn c' onClick={() => setRegion("南部")}>南部</div>
                </div>
                <img src={regionData[region].img} alt={regionData[region].title} />
                <div className='describe'>
                    <h3>{regionData[region].title}</h3>
                    <p>{regionData[region].description}</p>
                    <h3>{regionData[region].title2}</h3>
                    <p>{regionData[region].description2}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Information;
