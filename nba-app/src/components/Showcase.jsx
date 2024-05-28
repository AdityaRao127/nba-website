import React from 'react'
import Card from './Card.jsx'
import brainImage from '../images/brain.png';
import graphImage from '../images/graph.png';
import basketballImage from '../images/basketball.png';

const Showcase = () => {
  return (
    <div>
      <div className="showcase">
        <Card image = {brainImage} text = 'Best Odds to Win 2024 NBA Championship'/>
        <Card image = {graphImage} text = 'Team Analysis'/>
        <Card image = {basketballImage} text = 'Model Breakdown'/>
      </div>
    </div>
  )
}

export default Showcase