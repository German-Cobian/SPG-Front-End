import React from 'react'
import { NavLink } from 'react-router-dom'
import contacts from './data';
import '../style/sidebar.css'

const Sidebar = () => {
  
  return (
    <aside className="sidebar border border-dark">
      <nav className="nav d-flex flex-column mt-5 ms-5">
        <h2>Contacts:</h2>
        <ul className="my-5">
          {contacts.map((contact) => (
            <li key={contact.id} className="rounded-4">
              <NavLink
                to={`/chat/${contact.id}`}
                id={contact.id}
                activeClassName="active-link"
                className="mt-5">
                <span><small>{contact.name}</small></span>
              </NavLink>
            </li>
          ))}
        </ul>
        <NavLink to="/" activeClassName="active-link" className="mt-5"><span><small>Back</small></span></NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar;
