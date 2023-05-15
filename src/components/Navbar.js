import React from 'react';
import planet from './assets/planet.png';

const Navbar = () => (
  <header>
    <nav className="navbar">
      <div className="logo-title">
        <img className="logo" src={planet} alt="Planet logo" />
        <h1 className="title">Space traveler&apos;s Hub</h1>
      </div>
      <ul className="link_list">
        <li><a href="/">Rockets</a></li>
        <li><a href="/">Missions</a></li>
        <span>|</span>
        <li><a href="/profile">My profile</a></li>
      </ul>
    </nav>
    <hr className="bar" />
  </header>
);

export default Navbar;
