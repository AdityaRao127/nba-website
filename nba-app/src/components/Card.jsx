import React from 'react';

const Card = ({ image, text, onClick }) => {
  return (
    <div className='card' style={{ backgroundColor: 'lightgrey' }} onClick={onClick}>
      <img src={image} alt="Card" width='200px' />
      <p style={{ color: 'red' }}>{text}</p>
    </div>
  );
};

export default Card;
