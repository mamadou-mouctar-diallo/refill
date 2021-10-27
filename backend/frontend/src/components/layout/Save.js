import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "../design/Header.css";

class Save extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className=" d-flex justify-content-start">
              <div
                className="d-flex justify-content-start"
                style={{
                  marginRight: "10px",
                  paddingBottom: "2px",
                }}
              >
                <Link to="/wallet">
                  <i
                    className="bi bi-arrow-left-short"
                    style={{
                      fontSize: "2rem",
                      color: "red",
                    }}
                  ></i>
                </Link>
              </div>
              <div className="d-flex mt-2">
                <h1 className="text-dark">Save</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row mb-4">
            <div className="col-md-8 m-auto">
              <div className="container">
                <div className="form-group mt-2 mb-4">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Value"
                  />
                </div>
                <div className="container-fluid m-auto p-2">
                  <div
                    className="d-flex justify-content-center p-2 text-danger border border-2 border-danger"
                    style={{
                      borderRadius: "10px",
                    }}
                  >
                    {"Ooredoo"}
                  </div>
                </div>
                <div className="container-fluid m-auto p-2">
                  <div
                    className="d-flex justify-content-center p-2 border border-2 border-warning text-warning"
                    style={{
                      borderRadius: "10px",
                    }}
                  >
                    {"Orange"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Save;
