import React from 'react';
import { Link } from 'react-router-dom';

const HeaderPages = () => {
  return (
<div className="header container" style={{backgroundImage: 'none', paddingTop: '0'}}>
      <div className='header' style={{paddingBottom: '160px'}}>
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

export default HeaderPages;