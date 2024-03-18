import React from 'react'

const Header = () => {
  return (
    <div className="header container">
      <div className = 'header'>
          <h1 className = 'title'>NBA Prediction Project</h1>
          <nav>
              <ul className = 'navbar'>
                  <li><a href='#'>Home</a></li>
                  <li><a href='#'>Statistics</a></li>
                  <li><a href='#'>Predictions</a></li>
                  <li><a href='#'>Model</a></li>
              </ul>
          </nav>
      </div>
    </div>
  )
}

export default Header