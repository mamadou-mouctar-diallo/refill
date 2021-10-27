import React, { Component } from "react";
import { Link } from "react-router-dom";

class Wallet extends Component {
  render() {
    return (
      <div className="wallet">
        <div className="form-group p-3">
          <div className=" d-flex justify-content-end mb-5">
            <div
              className="d-flex"
              style={{
                marginRight: "110px",
              }}
            >
              <h1 className="text-light">Refill</h1>
            </div>
            <div className="d-flex justify-content-end">
              <Link to="/settings">
                <i
                  className="bi bi-gear-fill text-light"
                  style={{
                    fontSize: "1.5rem",
                  }}
                ></i>
              </Link>
            </div>
          </div>
          <div className="d-flex justify-content-start mb-5">
            <h1 className="text-light">Wallet</h1>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <h1 className="text-light">
              <span
                style={{
                  fontSize: "4rem",
                }}
              >
                15
              </span>
              DT
            </h1>
          </div>
        </div>
        <div className="col-md-8 m-auto">
          <div className="container mt">
            <div className="d-flex flex-column m-auto ">
              <div className="container-fluid m-auto p-2">
                <div className="d-flex justify-content-start m-auto mt-4">
                  <div
                    className="d-flex justify-content-center border border-2 border-danger text-danger rounded-circle"
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                    }}
                  >
                    <div className="d-flex flex-column"></div>
                  </div>
                  <div
                    className="d-flex justify-content-center border border-2 border-danger text-danger rounded-circle"
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  >
                    <div className="d-flex flex-column"></div>
                  </div>
                </div>
              </div>
              <div className="container-fluid m-auto p-2">
                <div className="d-flex justify-content-center text-danger border border-2 border-dark bg-dark"></div>
              </div>
              <div className="container-fluid m-auto p-2 m-auto">
                <div className="d-flex justify-content-start text-dark">
                  <h2>3 Cards</h2>
                </div>
              </div>
              <div className="container-fluid m-auto p-2">
                <div
                  className="d-flex justify-content-center p-4 text-danger border border-2 border-danger"
                  style={{
                    borderRadius: "10px",
                  }}
                ></div>
              </div>
              <div className="container-fluid m-auto p-2">
                <div
                  className="d-flex justify-content-center p-4 border border-2 border-warning text-warning"
                  style={{
                    borderRadius: "10px",
                  }}
                ></div>
              </div>
              <div className="container-fluid m-auto p-2">
                <div className="d-flex justify-content-center m-auto m-auto">
                  <div
                    className="d-flex justify-content-center border border-2 border-danger text-danger rounded-circle"
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  >
                    <Link to="/" className="text-danger">
                      <i
                        className="bi bi-lightning-charge-fill"
                        style={{
                          fontSize: "1.75rem",
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

export default Wallet;
