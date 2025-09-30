import React, { useRef, useState } from 'react';
import Menu from "./object/Menu";
import MenuPage from "./object/MenuPage";
import Footer from './object/Footer';

import '../style/edu.scss';

const Edu2 = () => {
    return (
        <div className='edu2'>
            <Menu />
            <MenuPage title='升學五專' />
            <div className='item1 c'>
                <div className='img c'>
                    <img src='../img/news.png'></img>
                </div>
                <div className='describe c'>
                    五專為「專科學校五年制」簡稱，招收國中畢業生，修業5年，畢業後可取得副學士學位，為培育中級技術人力的重要管道之一。
                    <br></br><br></br>
                    五專落實專業證照制度，幾乎所有科別皆有其對應之專業證照，除了證明學生們的專業能力及提升職場的競爭力外，有許多證照甚至是進入職場必備的入場券，在學期間亦將安排校外實習，因此具多元且彈性的五專學制，可提早體驗工作職場、壓力小但更有捷徑的升學進路、快速選擇人生方向優點。
                    <br></br><br></br>
                    配合實施十二年國民基本教育，五專各校科以「免試入學」為主要招生管道，另有七年一貫制系組採「特色招生入學」辦理招生，希望引導國中畢業生依其性向、興趣與能力發展，輔導學生適性發展。
                </div>
            </div>
            <div className='item2 c'>
                <h4>此外，為鼓勵就近入學、照顧弱勢學生，且使職業志向較強之學生提早就定位，目前五專辦理之主要招生管道如下</h4>
                <div className='content c'>
                    <span className='c'><p className='c'>五專完全<br></br>免試入學</p></span>
                    <p>教育部於113學年度起試辦「五專完全免試入學」，招收國中應屆畢業生，由各五專招生學校辦理單獨招生，完全不採計國中教育會考成績，學生不受地區限制，只要選擇想升讀的1個學校科組志願並由所屬國中學校辦理集體報名，經由五專招生學校錄取，便可在升學路上提早就定位。</p>
                </div>
                <div className='content c'>
                    <span className='c'><p className='c'>五專優先<br></br>免試入學</p></span>
                    <p>教育部於107學年度起辦理「五專優先免試入學」招生管道，辦理時間在國中教育會考後、五專聯合免試入學報名與各就學區高級中等學校志願選填之前，其特色為全國一區、採網路選填志願統一分發，至多可選填30個五專招生校科志願。</p>
                </div>
                <div className='content c'>
                    <span className='c'><p className='c'>五專聯合<br></br>免試入學</p></span>
                    <p>北、中、南區五專聯合免試入學是在五專優先免試入學結束後辦理，各區可擇一所五專招生學校報名申請，錄取方式採現場登記分發報到。
 </p>
                </div>
                <div className='content c'>
                    <span className='c'><p className='c'>五專免試<br></br>入學續招</p></span>
                    <p>若經由優先免試入學、各區聯合免試入學招生後，尚有待招生名額之五專招生學校，得經教育部核准辦理續招，並依續招學校自行訂定之招生規定辦理續招。</p>
                </div>
            </div>
            <div className='item3 c'>
                <div className='describe c'>
                    五專為「專科學校五年制」簡稱，招收國中畢業生，修業5年，畢業後可取得副學士學位，為培育中級技術人力的重要管道之一。
                    <br></br><br></br>
                    五專落實專業證照制度，幾乎所有科別皆有其對應之專業證照，除了證明學生們的專業能力及提升職場的競爭力外，有許多證照甚至是進入職場必備的入場券，在學期間亦將安排校外實習，因此具多元且彈性的五專學制，可提早體驗工作職場、壓力小但更有捷徑的升學進路、快速選擇人生方向優點。
                    <br></br><br></br>
                    配合實施十二年國民基本教育，五專各校科以「免試入學」為主要招生管道，另有七年一貫制系組採「特色招生入學」辦理招生，希望引導國中畢業生依其性向、興趣與能力發展，輔導學生適性發展。
                </div>
                <div className='img c'>
                    <img src='../img/edu2.png'></img>
                </div>
            </div>
            <Footer />
        </div>
    );

};

export default Edu2;
