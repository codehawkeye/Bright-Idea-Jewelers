import React from 'react'
import { Link } from "react-router-dom";

 const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/home">Sparkels and Swirls</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
      <Link to="/Details">Details Page</Link>
      </li>
      <li className="nav-item">
      <Link to="/modus-create">Modus Create</Link>
      </li>      
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
 }

 export default Nav

