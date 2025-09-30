import React from 'react';
import '../../style/news.scss';

const NewList = ({ img, title, describe, label, date }) => {
  return (
    <div className='item c'>
      <img src={img} alt={title} />
      <div className='describe'>
        <h3 className="news-title">{title}</h3>
        <p>{describe}</p>
      </div>
      <div className='right c'>
        <label className='c'>{label}</label>
        <div className='date'>{date}</div>
      </div>
    </div>
  )
}

export default NewList;
