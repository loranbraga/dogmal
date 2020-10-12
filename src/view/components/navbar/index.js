import React from 'react'
import {Link} from 'react-router-dom'

import './navbar.css'

function Navbar(){
  return (
    <nav className="navbar navbar-expand-lg">
      <Link to="/" className="navbar-brand text-white">Dog Mal</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link to="new-user"className="nav-link">Cadastar<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link to="login" className="nav-link">Login<span className="sr-only">(current)</span></Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar