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
                <Link to="/camera">
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
                <div className="d-flex flex-column mb-2 ">
                  <div className="container-fluid m-auto p-2">
                    <div className="d-flex justify-content-end p-2">
                      <Link
                        className="input-group-text rounded-circle"
                        style={{
                          backgroundColor: "white",
                          borderColor: "red",
                          marginRight: "20px",
                        }}
                      >
                        <i
                          class="bi bi-pencil-fill"
                          style={{
                            color: "red",
                            fontWeight: "4rem",
                          }}
                          to="/settingsextra"
                        ></i>
                      </Link>
                      <Link
                        className="input-group-text rounded-circle"
                        style={{
                          backgroundColor: "white",
                          borderColor: "red",
                        }}
                      >
                        <i
                          class="bi bi-trash-fill"
                          style={{
                            color: "red",
                            fontWeight: "4rem",
                          }}
                          to="/settingsextra"
                        ></i>
                      </Link>
                    </div>
                  </div>
                  <div className="container-fluid m-auto p-2">
                    <div
                      className="d-flex justify-content-end p-2 border border-2 border-danger"
                      style={{
                        borderColor: "red",
                        borderRadius: "10px",
                        border: "2px",
                      }}
                    >
                      <Link
                        className="input-group-text rounded-circle"
                        style={{
                          backgroundColor: "white",
                          borderColor: "red",
                          marginRight: "20px",
                        }}
                      >
                        <i
                          class="bi bi-pencil-fill"
                          style={{
                            color: "red",
                            fontWeight: "4rem",
                          }}
                          to="/settingsextra"
                        ></i>
                      </Link>
                      <Link
                        className="input-group-text rounded-circle"
                        style={{
                          backgroundColor: "white",
                          borderColor: "red",
                        }}
                      >
                        <i
                          class="bi bi-trash-fill"
                          style={{
                            color: "red",
                            fontWeight: "4rem",
                          }}
                          to="/settingsextra"
                        ></i>
                      </Link>
                    </div>
                  </div>
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
