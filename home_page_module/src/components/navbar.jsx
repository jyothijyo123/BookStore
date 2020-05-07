import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const NavBar = props => {
    return (
        <div>
            <NavLink className="navbar navbar-expand-lg navbar-dark bg-dark" to="/">
            <a class="navbar-brand" href="#">
    <img src="/img/obs.png" width="30" height="30" alt=""/>
  </a>
  <span class="navbar-brand mb-0 h1">Online Book Store</span>
  <NavLink to="/cart" className="ml-auto">
      <button>
          <span className="mr-2">
          <i className="fas fa-shopping-cart"/>
          </span>
          My Cart
      </button>
  </NavLink>
  </NavLink>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               {/*  className="navbar-brand" to="/">
                Online Book Store
        </NavLink>*/} 
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" style={{ float: "right" }}>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/books">
                                Home <span className="sr-only"></span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/admin">
                                Admin
              </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/user">
                                User
              </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
              </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contactus">
                                Contact Us
              </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/logout">
                                LogOut
              </NavLink>
                        </li>

                    </ul>
                    
                </div>
                
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
  </form>

            </nav>
            
        </div>
    );
};
export default NavBar;

