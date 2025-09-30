import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ imgSrc, description, time, location, endTime }) => {
  return (
    <div className='card'>
      <div className='img c'>
        <img src={imgSrc} alt="Activity" />
      </div>
      <div className='describe'>
        <p>{description}</p>
        <div className='time'>
          <i className="fas fa-calendar-alt"></i> {time}
        </div>
        <div className='location'>
          <i className="fas fa-map-marker-alt"></i> {location}
        </div>
        <div className='end-time'>截止時間：{endTime}</div>
      </div>
      <div className='w100 c'>
        <div className='collect c'>
          <i className="fas fa-heart"></i> 收藏
        </div>
        <div className='sign-in c'>
          <i className="fas fa-plus-circle"></i> 報名
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
};

export default Card;
