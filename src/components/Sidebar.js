import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/sidebar.css'

const Sidebar = () => {
  return (
    <aside className="sidebar border border-dark">
      <nav className="nav d-flex flex-column mt-5 ms-5">
        <h2>Contacts:</h2>
        <NavLink to="/chat" activeClassName="active-link" className="mt-5"><span><small>Jerry Mathers</small></span></NavLink>
        <NavLink to="/" activeClassName="active-link" className="mt-5"><span><small>Back</small></span></NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar;
