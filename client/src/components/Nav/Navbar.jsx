import React, { useState }  from "react";
import { Link } from "react-router-dom";

export default function NavbarStyle(props) {


  const authLinks = (
 
        <>
               <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="">Add items</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="">Items List</Link>
                </li>
                <li className="nav-item dropdown">
                    <span className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Account
                    </span>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <span className="dropdown-item" onClick={props.onLogoutClick} >LogOut</span>
                    </div>
                </li>
               
                </ul>
        </>
  
 
  );
  const guestLinks = (
    <>
      <ul className="navbar-nav ml-auto">
               
                <li className="nav-item">
                    <Link className="nav-link" to="login">Sign In</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>

        </ul>
    </>
  );
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">TODO APP</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {props.isAuthenticated ? authLinks : guestLinks}
            </div>
        </nav>
    </div>
  );
}
