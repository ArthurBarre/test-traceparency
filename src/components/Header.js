import React from 'react';
import '../styles/style.css'
import logo from "../assets/logo.png"
import Account from "./Account"
const Header = () => {
  return (
    <header className="header">
      <div className="headerWrapper">
        <img alt="logo" className="headerLogo" src={logo} />
        <div className="accountContainer">
          <Account />
        </div>
      </div>

    </header>

  )
}
export default Header;