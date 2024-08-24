import React from 'react'
import {Link} from 'react-router-dom'

const navbar = () => {
  return (

   <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
      <ul className="navbar-nav ">
        <li className="nav-item" style={{ color: 'white' }}>
        
          <Link className="nav-link active" to="/aboutus">About Us</Link>
          <Link className="nav-link active"  to="/feature">Features</Link>
        <Link className="nav-link active" to="/services">Services</Link>
        <Link className="nav-link active"  to="/process">Process</Link>
          <Link className="nav-link active"  to="/wtf">Contact</Link>
          <Link className="nav-link active"  to="/what">Faq</Link>

          
        </li>
       
      </ul>
      
       
        <button className="btn" >Join Us</button>
    
    </div>
  </div>
</nav>
  )
}

export default navbar