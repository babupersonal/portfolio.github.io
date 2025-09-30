import React, { useState } from 'react';
import Menu from "./object/Menu";
import MenuPage from "./object/MenuPage";
import Footer from './object/Footer';
import '../style/edu.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

const Edu1 = () => {
    const groups = [
        {
            title: '機械群1',
            content: '化工群現有4個科別，包括化工科、紡織科、染整科及環境檢驗科。學習內容與食衣住行育樂息息相關，為因應產業發展及就業市場需求，教學內容著重於化工機械操作、儀器分析檢驗、化學生活品製作、紡紗機與織布機操作、品質管制、染色、織物整理加工及環境檢驗分析等專業知能。',
            certifications: '化學、化工、石油化學等中華民國技術士證。工程技師、空氣污染防制專責人員、下水道設施操作維護、工業安全技師、勞工安全管理、勞工衛生管理等證照。',
            path: '化工群對應大專院校科系包含化學工程系、化學工程與材料工程系、分子科學與工程系、化學工程與生物科技系、環境與安全衛生工程系、應用化學系、生物技術系、文化資產維護系、醫學檢驗生物技術系、醫藥化學系、製劑製造工程系、生活應用科技系、海洋環境工程系、水產食品科學系、化妝品與時尚彩妝系、材料與纖維系等。',
            employment: '就業市場包含石化產業、塑膠業、化學材料產業、醫藥化學研發、環境檢驗、紡織工業及染整工業等，也可以從事精密陶瓷工業、半導體工業、高分子材料工業、生化科技領域、電子材料、影像顯示領域、精密化工製程領域、高值化科技產業等行業，升學管道及就業市場十分廣泛，提供多元管道升學及就業選擇。'
        },
        {
            title: '機械群2',
            content: '這是機械群2的內容。',
            certifications: '相關證照2',
            path: '升學路徑2',
            employment: '就業發展2'
        },
        {
            title: '機械群3',
            content: '這是機械群2的內容。',
            certifications: '相關證照2',
            path: '升學路徑2',
            employment: '就業發展2'
        },
        {
            title: '機械群4',
            content: '這是機械群2的內容。',
            certifications: '相關證照2',
            path: '升學路徑2',
            employment: '就業發展2'
        },
        {
            title: '機械群5',
            content: '這是機械群2的內容。',
            certifications: '相關證照2',
            path: '升學路徑2',
            employment: '就業發展2'
        },
        {
            title: '機械群6',
            content: '這是機械群2的內容。',
            certifications: '相關證照2',
            path: '升學路徑2',
            employment: '就業發展2'
        },
        {
            title: '機械群7',
            content: '這是機械群2的內容。',
            certifications: '相關證照2',
            path: '升學路徑2',
            employment: '就業發展2'
        },
        
    ];

    const [selectedGroup, setSelectedGroup] = useState(groups[0]);

    return (
        <div className='edu1'>
            <Menu />
            <MenuPage title='升學技高' />
            <div className='types'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={40}
                    slidesPerGroup={5}
                    navigation={true}
                    modules={[FreeMode, Navigation]}
                >
                    {groups.map((group, index) => (
                        <SwiperSlide key={index} onClick={() => setSelectedGroup(group)}>
                            <div className="icon c">
                                <img src='../img/edu-icon.png' alt={group.title} />
                                <p>{group.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='type-title c'>
                    {selectedGroup.title}
                </div>
            </div>
            <div className='content c'>
                <div className='describe'>
                    <h3>{selectedGroup.content}</h3>
                    <div className='item'>
                        <span className='c'>相關證照</span>
                        <p>{selectedGroup.certifications}</p>
                    </div>
                    <div className='item'>
                        <span className='c'>升學路徑</span>
                        <p>{selectedGroup.path}</p>
                    </div>
                    <div className='item'>
                        <span className='c'>就業發展</span>
                        <p>{selectedGroup.employment}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Edu1;
