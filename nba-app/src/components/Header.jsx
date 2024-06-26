import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header container">
      <div className='header'>
        <h1 className='title' style={{ marginLeft: '3px', color: 'white' }}>NBA Prediction Project</h1>
        <nav>
          <ul className='navbar'>
            <li style={{ marginLeft: '15px'}}><Link to="/">Home</Link></li>
            <li style={{ marginLeft: '15px' }}><Link to="/predictions">Prediction</Link></li>
            <li style={{ marginLeft: '15px' }}><Link to="/team-analysis">Team Analysis</Link></li>
            <li style={{ marginLeft: '15px' }}><Link to="/model-breakdown">Model</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;