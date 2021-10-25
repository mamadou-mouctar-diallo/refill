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
                marginRight: "130px",
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
      </div>
    );
  }
}

export default Wallet;
