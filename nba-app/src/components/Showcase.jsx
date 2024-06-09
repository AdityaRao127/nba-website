import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card.jsx';
import brainImage from '../images/brain.png';
import graphImage from '../images/graph.png';
import basketballImage from '../images/basketball.png';

const Showcase = () => {
  const navigate = useNavigate();

  const handleTeamAnalysisClick = () => {
    navigate('/team-analysis');
  };

  const handlePredictionClick = () => {
    navigate('/predictions')
  };

  const handleBreakdownClick = () => {
    navigate('/model-breakdown')
  };

  return (
    <div>
      <div className="showcase">
        <Card image={brainImage} text='Best Odds to Win 2024 NBA Championship' onClick={handlePredictionClick} />
        <Card image={graphImage} text='Team Analysis' onClick={handleTeamAnalysisClick} />
        <Card image={basketballImage} text='Model Breakdown' onClick={handleBreakdownClick} />
      </div>
    </div>
  );
};

export default Showcase;


