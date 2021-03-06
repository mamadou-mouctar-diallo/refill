import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../design/Header.css";

class Camera extends Component {
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
                <Link to="/settings">
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
                <h1 className="text-dark">Camera</h1>
              </div>
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
              <div className="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      borderRadius: "5px",
                    }}
                    placeholder="Scratch code"
                  />
                  <div className="input-group-append">
                    <Link
                      className="input-group-text "
                      style={{
                        borderRadius: "5px",
                        marginLeft: "5px",
                      }}
                      to="/save"
                    >
                      <i
                        className="bi bi-arrow-right-short"
                        style={{
                          fontSize: "1.5rem",
                          color: "red",
                          fontWeight: "4rem",
                        }}
                      ></i>
                    </Link>
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

export default Camera;
