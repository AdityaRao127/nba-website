import React from 'react'

const Card = ({image, text}) => {
  return (
    <div className='card' style={{backgroundColor: 'white'}}>
      <img src={image} alt="Card" width='200px'/>
      <p>{text}</p>
    </div>
  )
}

export default Card