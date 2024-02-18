import React from 'react'
import logo from '../icones/logo.svg'
import { NavLink } from 'react-router-dom'
import compteSvg from '../icones/compte.svg'

const Header = () => {
  return (
    <header>
        <div><img src={logo} alt="Logo"/></div>
        <nav>
            <ul>
                <li> <NavLink to={"/"}>Accueil</NavLink></li>
                <li><NavLink to={"/produit"}>Produit</NavLink></li>
                <li><NavLink to={"/documentation"}>Documentation</NavLink></li>
                <li><NavLink to={"/help"}>Centre d'aide</NavLink></li>
                <li><NavLink to={"/login"}><img src={compteSvg} alt=''/> </NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header