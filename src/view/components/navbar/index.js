import React from 'react'
import {Link} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import './navbar.css'

function Navbar(){
  const dispatch = useDispatch()
  
  const logout = () => {
    dispatch({type: 'LOGOUT'})
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <Link to="/" className="navbar-brand text-white"><i class="fas fa-beer fa-2x"></i></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {
            useSelector(state => state.loggedUser)? 
              <>
                <li className="nav-item active"><Link to="#" className="nav-link">Meus Post<span className="sr-only">(current)</span></Link></li>
                <li className="nav-item active"><Link to="#"className="nav-link">Publicar<span className="sr-only">(current)</span></Link></li>
                <li className="nav-item active"><Link onClick={() => logout()} className="nav-link">Sair<span className="sr-only">(current)</span></Link></li>
              </>  
            :
              <>
                <li className="nav-item active"><Link to="/" className="nav-link">Home<span className="sr-only">(current)</span></Link></li>
                <li className="nav-item active"><Link to="new-user"className="nav-link">Cadastar<span className="sr-only">(current)</span></Link></li>
                <li className="nav-item active"><Link to="login" className="nav-link">Login<span className="sr-only">(current)</span></Link></li>
              </>  
          }
          
        </ul>
      </div>
    </nav>
  )
}

export default Navbar