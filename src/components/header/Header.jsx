import React from 'react'
import "./Header.css"
import Header_logo from "../../assets/react.svg"

const Header = () => {
  return (
    <header>
        <div className='container header__container'>
            <a href="#">
              <img src={Header_logo} alt="header logo" />
            </a>
        </div>
    </header>
  )
}

export default Header