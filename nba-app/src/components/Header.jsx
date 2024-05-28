import React from 'react'

const Header = () => {
  return (
    <div className="header container">
      <div className='header'>
      <h1 className='title' style={{ marginLeft: '3px' }}>NBA Prediction Project</h1>
        <nav>
          <ul className='navbar'>
            <li style={{ marginLeft: '15px' }}><a href='#'>Home</a></li>
            <li style={{ marginLeft: '15px' }}><a href='#'>Prediction</a></li>
            <li style={{ marginLeft: '15px' }}><a href='#'>Team Analysis</a></li>
            <li style={{ marginLeft: '15px' }}><a href='#'>Model</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header