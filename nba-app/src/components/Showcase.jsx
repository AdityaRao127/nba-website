import React from 'react'
import Card from './Card.jsx'
import brainImage from '../images/brain.png';
import graphImage from '../images/graph.png';
import basketballImage from '../images/basketball.png';

const Showcase = () => {
  return (
    <div>
      <div className="showcase">
        <Card image = {brainImage} text = 'Created a deep learning model using decision trees that was fed training data from web scraped nba statistics. I dont know what to say I am not gonna do this'/>
        <Card image = {graphImage} text = 'Created a deep learning model using decision trees that was fed training data from web scraped nba statistics. I dont know what to say I am not gonna do this'/>
        <Card image = {basketballImage} text = 'Created a deep learning model using decision trees that was fed training data from web scraped nba statistics. I dont know what to say I am not gonna do this'/>
      </div>
    </div>
  )
}

export default Showcase