import React from "react";

const GameItem = ({img,title}) => {
    return(
        <div className='item c'>
            <img src={img}></img>
            <div className='name c'>
            {title}
            </div>
        </div>
    );
};

export default GameItem;