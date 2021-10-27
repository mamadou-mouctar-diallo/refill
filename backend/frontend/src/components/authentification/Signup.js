import React, { Component } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
      password2: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      password2: this.state.password2,
    };
    axios
      .post("/api/views/users/register", newUser)
      .then((res) => {
        this.setState(res.data);
        this.props.history.push("/login");
      })
      .catch((err) => this.setState({ errors: err.response.data }));
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center mt-2">Sign Up</h1>
            <p className="lead text-center">Create your Refill acount</p>
            <form onSubmit={this.onSubmit}>
              <div className="form-group mt-2 b-none">
                <input
                  type="text"
                  className={classNames("form-control form-control-lg", {
                    "is-invalid": errors.name,
                  })}
                  id="validationServer01"
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
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
                  type="text"
                  className={classNames("form-control form-control-lg", {
                    "is-invalid": errors.phone,
                  })}
                  placeholder="Pone Number"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                />
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone}</div>
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
              <div className="form-group mt-4">
                <input
                  type="password"
                  className={classNames("form-control form-control-lg", {
                    "is-invalid": errors.password2,
                  })}
                  placeholder="Confirm password"
                  name="password2"
                  value={this.state.password2}
                  onChange={this.onChange}
                />
                {errors.password2 && (
                  <div className="invalid-feedback">{errors.password2}</div>
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
                  className="btn btn-danger btn-block mt-4 text-light"
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

export default Signup;
