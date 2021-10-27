import React, { Component } from "react";
import axios from "axios";

import classNames from "classnames";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("/api/views/users/login", user)
      .then((res) => this.props.history.push("/wallet"))
      .catch((err) => this.setState({ errors: err.response.data }));
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center mt-4">Log In</h1>
            <p className="lead text-center">Connect to your Refill acount</p>
            <form onSubmit={this.onSubmit}>
              <div className="form-group mt-4">
                <input
                  type="text"
                  className={classNames("form-control form-control-lg", {
                    "is-invalid": errors.email,
                  })}
                  placeholder="Email Adress"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="form-group mt-4">
                <input
                  type="password"
                  className={classNames("form-control form-control-lg", {
                    "is-invalid": errors.password,
                  })}
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
              <div className="d-grid gap-2">
                <input
                  className="btn btn-info btn-block mt-4 text-light"
                  type="submit"
                  value="Submit"
                />
              </div>
              <div className="d-grid gap-2">
                <Link
                  className="btn btn-danger btn-block mt-4 mb-4 text-light"
                  to="/"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
