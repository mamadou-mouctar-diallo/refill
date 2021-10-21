import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authentificationActions';


import '../design/Header.css'

class Header extends Component {
  onLogoutClick(e){
    e.preventDefault();
    this.props.logoutUser();
  }
 render(){

  const {isAuthenticated, user} = this.props.authentification;
  const authentificationLinks = (
    <div className="navbar-nav">
      <a href="" 
        onClick = {this.onLogoutClick.bind(this)}
        className="nav-link btn btn-outline-danger text-dark"
      >
        <img 
          src={user.avatar}
          alt ={user.name}
          style ={{width: '25px', marginRight: '5px'}}
          className="rounded-circle"
          title="Your email must gravatar connected"
        />{' '}
        Logout
      </a>
    </div>
  )
  const guestLinks = (
    <div className="navbar-nav">
        <Link type="button" className="btn btn-outline-success text-dark link-login" to="/login" title="Log in to be connected"><i className="bi-person-check" style={{
          fontSize: "1.5rem"
        }}></i>Login</Link>
        <Link type="button"  className="btn btn-info text-light link-signup" to="/signup" title="Sign in to get an acount"><i className="bi-person-plus" style={{
          fontSize: "1.5rem"
        }}></i>Sign Up</Link>
    </div>
  )

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid mx-5">
        <a className="nav-link btn"><i class="bi bi-arrow-left-circle-fill" style={{
          fontSize: '2.5rem',
          color: 'red'
        }}></i></a>
            <Link className="navbar-brand color-logo text-light logo" to="/" title="Refill">Re <span>fill</span></Link>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    { isAuthenticated ?authentificationLinks: guestLinks}
                </ul>
            </div>
        </div>
    </nav>
  )
 }
}
Header.prototypes = {
  logoutUser: PropTypes.func.isRequired,
  authentification: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  authentification: state.authentification
})

export default connect(mapStateToProps, {logoutUser})(Header);