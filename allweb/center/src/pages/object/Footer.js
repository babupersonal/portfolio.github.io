import React from 'react';
import '../../style/object/footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>關於我們</h3>
                </div>
                <div className="footer-section">
                    <h3>最新資訊</h3>
                    <ul>
                        <li>最新文章</li>
                        <li>最新影音</li>
                        <li>最新消息</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>展場介紹</h3>
                    <ul>
                        <li>展場資訊</li>
                        <li>活動影音</li>
                        <li>活動剪影</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>入學管道</h3>
                    <ul>
                        <li>升學技高</li>
                        <li>升學五專</li>
                        <li>升學四技&二專</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>虛擬瀏覽</h3>
                </div>
                <div className="footer-section">
                    <h3>互動遊戲體驗</h3>
                </div>
                <div className="footer-section">
                    <h3>聯絡我們</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Line</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>網站安全政策  隱私權政策 | 版權聲明 (2022 教育部版權所有)</p>
            </div>
        </footer>
    );
};

export default Footer;
