import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      
      <div className="footer">
        <nav id="social-icons" className="icons">
        <NavLink className="icon" to="https://www.facebook.com/"><i className="fab fa-facebook"></i></NavLink>
        <NavLink className="icon" to="https://www.instagram.com/"><i className="fab fa-instagram"></i></NavLink>
        <NavLink className="icon" to="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></NavLink>
        <NavLink className="icon" to="https://www.twitter.com/"><i className="fab fa-twitter"></i></NavLink>
        <NavLink className="icon" to="https://www.google.com/"><i className="fab fa-google"></i></NavLink>
        </nav>
        <nav className='rights'>
            <NavLink className="link" href="#">© 2023 Fixxo. all rigths reserved</NavLink>
        </nav>
      </div>
    </footer>
  )
}

export default Footer