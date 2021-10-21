import React, {Component} from 'react';
import {connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUSer } from '../../actions/authentificationActions';


import classNames from 'classnames';




class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.authentification.isAuthenticated){
      this.props.history.push('/gofast')
    }

    if(nextProps.errors){
      this.setState({errors: nextProps.errors})
    }
  }
 onSubmit(event){
  event.preventDefault();
  const user = {
    email: this.state.email,
    password: this.state.password
  }
  
  this.props.loginUSer(user);
}

 onChange(event){
  this.setState({[event.target.name]: event.target.value});
}

  render(){
    return (
      <div className="container mt-4">
        <div className="row" >
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center mt-4" >Log In</h1>
              <p className="lead text-center" >Connect to your Refill acount
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group mt-4">
                  <input type="text" 
                    className={classNames("form-control form-control-lg", 
                    {"is-invalid": this.state.errors.email})} 
                    placeholder="Email Adress" name="email" 
                    value={this.state.email} onChange={this.onChange}
                  />
                  {this.state.errors.email && (<div className="invalid-feedback">{this.state.errors.email}</div>
                  )}
                </div>
                <div className="form-group mt-4">
                  <input type="password" 
                    className={classNames("form-control form-control-lg", 
                    {"is-invalid": this.state.errors.password})}
                    placeholder="Password" name="password" 
                    value={this.state.password} onChange={this.onChange} 
                  />
                  {this.state.errors.password && (<div className="invalid-feedback">{this.state.errors.password}</div>
                  )}
                </div>
                <div className="d-grid gap-2">
                  <input className="btn btn-info btn-block mt-4 text-light"
                    type="submit" value="Submit" />
                </div>
              </form>
            </div>
        </div>
      </div>
    )
  }
}

Login.prototypes ={
  addUser: PropTypes.func.isRequired,
  authentification: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  authentification: state.authentification,
  errors: state.errors
})
export default connect(mapStateToProps, {loginUSer})(withRouter(Login))