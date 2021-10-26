import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../design/GoFast.css";
import "../design/Header.css";
class GoFast extends Component {
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
                <h1 className="text-dark">Go Fast</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div
            className="row mb-4  "
            style={{
              marginTop: "200px",
            }}
          >
            <div className="col-md-8 m-auto">
              <div className="container">
                <div className="d-grid gap-2 mt-10 text-center ">
                  <button
                    type="button"
                    className="btn btn-lg"
                    style={{
                      borderColor: "red",
                      color: "red",
                    }}
                  >
                    {"Ooredoo"}
                  </button>
                </div>
                <div className="d-grid gap-2 mt-4 text-center">
                  <button
                    type="button"
                    className="btn btn-lg"
                    style={{
                      borderColor: "orange",
                      color: "orange",
                    }}
                  >
                    {"Orange"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoFast;
