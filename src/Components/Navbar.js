import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


import logo from '../logo.svg'
import { StyledButton } from './styled/button'


class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
       {/* 
          https://www.iconfinder.com/icons/1243689/call_phone_icon
          Creative Commons (Attribution 3.0 Unported);
          https://www.iconfinder.com/Makoto_msk */}
          <Link to='/'>
            <img src={logo} alt="home" className="navbar-brand"/>
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link"> Products </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <StyledButton>
            <span className="mr-2"><i className="fas fa-cart-plus" /></span>
              My Cart
            </StyledButton>
          </Link>
      </Nav>
    )
  }
}

const Nav = styled.nav`
  background: var(--mainBlue);

  .nav-link {
    color: var(--mainWhite)!important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`


export default Navbar