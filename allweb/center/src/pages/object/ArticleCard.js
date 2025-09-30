import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/article.scss';

const ArticleCard = ({ id, img, label, title, describe, labels, date }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/article/${id}`);
    };

    return (
        <div className='card c' onClick={handleClick} style={{ cursor: 'pointer' }}>
            <div className='img-box'>
                <img src={img} alt="Article" />
            </div>
            
            <div className='item c'>
                <div className='contents'>
                    <div className='top'>
                        <div className='data'>{label}</div>
                        <div className='data'><span>●</span>{date}</div>
                    </div>
                    <div className='title'>
                        {title}
                    </div>
                    <div className='describe'>
                        {describe}
                    </div>
                </div>
                <div className='labels c'>
                    {labels.map((label, index) => (
                        <label key={index} className='label-item'>
                            {label}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
