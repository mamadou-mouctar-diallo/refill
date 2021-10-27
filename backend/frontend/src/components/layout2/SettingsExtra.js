import React, { Component } from "react";

import { Link } from "react-router-dom";
import "../design/Header.css";
class SettingsExtra extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className=" d-flex justify-content-start">
              <div
                className="d-flex justify-content-start"
                style={{
                  marginRight: "110px",
                  paddingBottom: "2px",
                }}
              >
                <Link to="/gofast">
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
                <h1 className="text-danger">Refill</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div
            className="row mb-4 "
            style={{
              marginTop: "80px",
            }}
          >
            <div className="col-md-8 m-auto">
              <div className="container">
                <div className="form-group mt-3 mb-4">
                  <h1>Operators</h1>
                  <p>Manage your list of operators.</p>
                </div>
              </div>
            </div>
            <div className="col-md-8 m-auto">
              <div className="container">
                <div className="input-group  mb-4 ">
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      borderRadius: "5px",
                    }}
                  />
                  <div className="input-group-append">
                    <Link
                      className="input-group-text "
                      style={{
                        borderRadius: "5px",
                        marginLeft: "5px",
                        backgroundColor: "#EEDCA2",
                      }}
                      to="/updateoperator"
                    >
                      <i
                        className="bi bi-pencil-square"
                        style={{
                          fontSize: "1.5rem",
                          color: "black",
                          fontWeight: "4rem",
                        }}
                      ></i>
                    </Link>
                  </div>
                </div>
                <div className="form-group mt-2 mb-4">
                  <input type="text" className="form-control form-control-lg" />
                </div>
                <div className="input-group">
                  <div className="input-group-append">
                    <Link
                      className="input-group-text "
                      style={{
                        borderRadius: "5px",
                        marginRight: "5px",
                        backgroundColor: "#C53F1C",
                      }}
                      to="/settings"
                    >
                      <i
                        className="bi bi-trash-fill"
                        style={{
                          fontSize: "1.5rem",
                          color: "red",
                          fontWeight: "4rem",
                        }}
                        to="/settingsextra"
                      ></i>
                    </Link>
                  </div>
                  <input
                    type="text"
                    className="form-control outline-danger"
                    style={{
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div className="form-group mt-3 mb-4">
                  <h1>Clear data</h1>
                  <p>Clean up cache in history, wallet and operators.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SettingsExtra;
