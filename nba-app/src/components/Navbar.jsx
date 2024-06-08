import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <div className="navbar">
          <ul>
            <li style={{ marginLeft: '15px'}}><Link to="/">Home</Link></li>
            <li style={{ marginLeft: '15px' }}><Link to="/predictions">Prediction</Link></li>
            <li style={{ marginLeft: '15px' }}><Link to="/team-analysis">Team Analysis</Link></li>
            <li style={{ marginLeft: '15px' }}><Link to="/model-breakdown">Model</Link></li>
          </ul>
        </div>
    </nav>    
  );
};

export default Navbar;