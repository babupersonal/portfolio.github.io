import React, { useState } from 'react';
import '../../style/about.scss';

const TextDropDown = ({ index, title, describe }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='textdrop'>
            <div className='w100 c'>
                <p><span>{index}.</span> {title}</p>
                <button className='dropdown-btn c' onClick={toggleDropdown}>
                    <img src='../img/right-arrow.png' alt="Toggle Arrow" className={isOpen ? 'rotate' : ''}/>
                </button>
            </div>
            {isOpen && (
                <div className='dorp-text'>
                    {describe}
                </div>
            )}
        </div>
    );
};

export default TextDropDown;
