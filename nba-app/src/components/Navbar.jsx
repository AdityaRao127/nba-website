import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='header'>
      <h1 className='title' style={{ marginLeft: '3px', color: 'white' }}>NBA Prediction Project</h1>
      <nav>
          <div className="navbar">
            <ul>
              <li style={{ marginLeft: '15px'}}><Link to="/">Home</Link></li>
              <li style={{ marginLeft: '15px' }}><Link to="/predictions">Prediction</Link></li>
              <li style={{ marginLeft: '15px' }}><Link to="/analysis">Team Analysis</Link></li>
              <li style={{ marginLeft: '15px' }}><Link to="/model-breakdown">Model</Link></li>
            </ul>
          </div>
      </nav>    
    </div>
  );
};

export default Navbar;