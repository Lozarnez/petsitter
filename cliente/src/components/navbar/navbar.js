import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div className='nav-container'>
      <ul className='nav-list'>
        {props.links.map((link, index) => (
          <li key={index} className='nav-item'>
            <Link style={{textDecoration: 'none', color: '#000'}} to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar;