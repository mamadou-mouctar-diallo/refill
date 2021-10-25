import React, { Component } from "react";

import { Link } from "react-router-dom";
import "../design/Header.css";
class SettingsExtra extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid mx-5">
            <Link
              className="nav-link btn btn-lg"
              style={{
                marginLeft: "-40px",
              }}
              to="/save"
            >
              <i
                class="bi bi-arrow-left-short"
                style={{
                  fontSize: "2.5rem",
                  color: "red",
                  fontWeight: "4rem",
                }}
              ></i>
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <Link
                  className="navbar-brand color-logo text-light logo"
                  title="Refill"
                  to="/settingsextra"
                >
                  Re <span>fill</span>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div
            className="row mb-4 "
            style={{
              marginTop: "200px",
            }}
          >
            <div className="col-md-8 m-auto">
              <div className="container">
                <div className="input-group  mb-4 ">
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      borderRadius: "5px",
                    }}
                    placeholder="Search code"
                  />
                  <div className="input-group-append">
                    <Link
                      className="input-group-text "
                      style={{
                        borderRadius: "5px",
                        marginLeft: "5px",
                        backgroundColor: "#EEDCA2",
                      }}
                    >
                      <i
                        class="bi bi-pencil-square"
                        style={{
                          fontSize: "1.5rem",
                          color: "black",
                          fontWeight: "4rem",
                        }}
                        to="/settingsextra"
                      ></i>
                    </Link>
                  </div>
                </div>
                <div className="form-group mt-2 mb-4">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Value"
                  />
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
                      to="/settingsextra"
                    >
                      <i
                        class="bi bi-trash-fill"
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
                    className="form-control"
                    style={{
                      borderRadius: "5px",
                    }}
                    placeholder="Search code"
                  />
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
