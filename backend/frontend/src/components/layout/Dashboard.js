import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  onClickLogin = (event) => {
    event.preventDefault();
    this.props.history.push("/login");
  };
  onClikSignup = (event) => {
    event.preventDefault();
    this.props.history.push("/signup");
  };
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="form-group mt-3 d-flex justify-content-center p-5">
              <Link
                className="navbar-brand color-logo text-light text-cener logo"
                to="/"
                title="Refill"
              >
                Re <span>fill</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row mb-4">
            <div className="col-md-8 m-auto">
              <div className="container">
                <div className="form-group mt-2 mb-4">
                  <label className="container">
                    <h1 className="display-4 text-center mt-4">
                      Welcome to Refill App
                    </h1>
                  </label>
                </div>
                <div className="container-fluid m-auto p-2">
                  <Link
                    className="d-flex justify-content-center p-2 border border-2 btn-outline-success"
                    style={{
                      borderRadius: "10px",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                    onClick={this.onClickLogin}
                  >
                    <i
                      className="bi bi-person"
                      style={{
                        marginRight: "10px",
                      }}
                    ></i>
                    Login
                  </Link>
                </div>
                <div className="container-fluid m-auto p-2">
                  <Link
                    className="d-flex justify-content-center p-2 border border-2 btn-outline-primary"
                    style={{
                      borderRadius: "10px",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                    onClick={this.onClikSignup}
                  >
                    <i
                      className="bi bi-person-plus"
                      style={{
                        marginRight: "10px",
                      }}
                    ></i>
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
