import React, { Component } from "react";
import { Link } from "react-router-dom";
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
                <h1 className="text-dark">Create</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 m-auto mt-5">
          <div className="container">
            <div className="d-flex justify-content-center form-group m-auto mb-4">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Name"
              />
            </div>
            <div className="d-flex justify-content-center form-group m-auto mb-4">
              <input
                type="text"
                name=""
                className="form-control form-control-lg"
                placeholder="Activation code"
              />
            </div>
            <div className="d-flex justify-content-center form-group m-auto">
              <div>
                <input
                  type="checkbox"
                  className="form-check-input rounded-circle border border-2"
                  style={{
                    backgroundColor: "#F75B32",
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  className="form-check-input rounded-circle border border-2"
                  style={{
                    backgroundColor: "#E40505",
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  className="form-check-input rounded-circle border border-2"
                  style={{
                    backgroundColor: "#056B9A",
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  className="form-check-input rounded-circle border border-2"
                  style={{
                    backgroundColor: "#09EBB0",
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  className="form-check-input rounded-circle border border-2"
                  style={{
                    backgroundColor: "#EBB809",
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  className="form-check-input rounded-circle border border-2"
                  style={{
                    backgroundColor: "#070600",
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  className="form-check-input rounded-circle border border-2"
                  style={{
                    backgroundColor: "#8D08B7",
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center form-group m-auto">
              <div>
                <input
                  type="checkbox"
                  className="form-check-input rounded-circle border border-2"
                  style={{
                    backgroundColor: "#058D0F",
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  className="form-check-input rounded-circle border border-2"
                  style={{
                    backgroundColor: "#7A5092",
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  className="form-check-input rounded-circle border border-2"
                  style={{
                    backgroundColor: "#0EBFE2",
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Save;
