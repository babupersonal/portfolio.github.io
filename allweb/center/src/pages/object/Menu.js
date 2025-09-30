import React from 'react';
import '../../style/object/Menu.scss';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu">
            <Link to="/"><h1 className="menu-title">技職永續破風者</h1></Link>
            <ul className="menu-list">
                {/* <li className="menu-item">
                    <Link to="/about">關於我們</Link>
                </li> */}
                {/* <Link to="/news"><li className="menu-item">最新消息</li></Link> */}
                <Link to="/news"><li className="menu-item">最新消息</li></Link>
                {/* <li className="menu-item">
                    最新消息
                    <ul className="dropdown">
                        <Link to="/article"><li className="dropdown-item"></li></Link>
                        <Link to="/news"><li className="dropdown-item"></li></Link>
                        <Link to="/videos"><li className="dropdown-item">活動訊息+活動行事曆</li></Link>
                    </ul>
                </li> */}
                <li className="menu-item">
                    關於技職永續破風者
                    <ul className="dropdown">
                        <Link to="/news"><li className="dropdown-item">共育1</li></Link>
                        <Link to="/evenReg"><li className="dropdown-item">共育2</li></Link>
                        <Link to="/evenHigh"><li className="dropdown-item">共育3</li></Link>
                        <Link to="/information"><li className="dropdown-item">共育4</li></Link>
                        {/* <Link to="/evenReg"><li className="dropdown-item">活動報名</li></Link>
                        <Link to="/evenHigh"><li className="dropdown-item">活動剪影</li></Link> */}
                    </ul>
                </li>

                <Link to="/article"><li className="menu-item">活動訊息&日程</li></Link>
                {/* <li className="menu-item">
                    活動訊息
                    <ul className="dropdown">
                        <Link to="/edu1"><li className="dropdown-item">升學技高</li></Link>
                        <Link to="/edu2"><li className="dropdown-item">升學五專</li></Link>
                        <Link to="/edu3"><li className="dropdown-item">升學四技＆二專</li></Link>
                    </ul>
                </li> */}

                <li className="menu-item">
                    職業試探體驗展
                    <ul className="dropdown">
                        <Link to="/edu1"><li className="dropdown-item">技職FUN星際</li></Link>
                        <Link to="/edu2"><li className="dropdown-item">技之勇者</li></Link>
                        <Link to="/edu3"><li className="dropdown-item">技職永續方舟</li></Link>
                        <Link to="/edu3"><li className="dropdown-item">職探任意門</li></Link>
                    </ul>
                </li>
                
                <Link to="/videos"><li className="menu-item">轉科探索</li></Link>

                <li className="menu-item">
                    學習資源
                    <ul className="dropdown">
                        <Link to="/edu1"><li className="dropdown-item">職人報導/文章</li></Link>
                        <Link to="/edu2"><li className="dropdown-item">職人影音</li></Link>
                        <Link to="/edu3"><li className="dropdown-item">教案教材資源</li></Link>
                        <Link to="/edu3"><li className="dropdown-item">技職教育資源</li></Link>
                        <Link to="/edu3"><li className="dropdown-item">適性發展資源</li></Link>
                    </ul>
                </li>

                <li className="menu-item">
                    聯絡我們
                    <ul className="dropdown">
                        <Link to="/videos"><li className="dropdown-item">YouTube</li></Link>
                        <Link to="/videos"><li className="dropdown-item">Facebook</li></Link>
                        <Link to="/videos"><li className="dropdown-item">Line</li></Link>
                    </ul>
                </li>
            </ul>
            {/* <div className="logo c">加入/登入會員</div> */}

            <div className="logo c">
                <span>搜尋</span>
                <input type="text" placeholder="輸入關鍵字..." className="search-input" />
            </div>

        </div>
    );
};

export default Menu;
