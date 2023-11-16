import React from 'react'
import '../style/sidebar.css'
import Logo from '../assets/Logo.gif';

const Sidebar = () => {
  return (
    <aside className="sidebar border border-dark">
      <nav className="nav d-flex flex-column mt-5 ms-5">
        <h2>Sidebar</h2>
        <img className="logo mt-5" src={Logo} alt="Journeyman logo"  />
      </nav>
    </aside>
  )
}

export default Sidebar;
