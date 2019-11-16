import React from "react"
import Link from "gatsby-link"
import "./CSS/header.css"

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require
      ('../images/logo-page.png')}
      width="160" /></Link>
      <Link to="/Galeria">GALERIA</Link>
      <Link to="/Animacion">ANIMACIÓN</Link>
    </div>
  </div>
)

export default Header
