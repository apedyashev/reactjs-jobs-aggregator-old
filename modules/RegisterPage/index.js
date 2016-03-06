import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {RaisedButton} from 'material-ui/lib'
import {TextField} from 'material-ui/lib'
import { submitRegisterForm } from './actions';
import './less/style';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm() {
    const email = this.refs['email'].getValue(),
          password = this.refs['password'].getValue(),
          firstName = this.refs['first-name'].getValue(),
          lastName = this.refs['last-name'].getValue(),
          username = this.refs['username'].getValue();
    this.props.submitRegisterForm({
      email,
      password,
      firstName,
      lastName,
      username
    });
  }

  render() {
    return (
      <form className="form-register">
        <div className="row">
          <div className="col-xs-12 text-center">
            <h3>Register</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <TextField
                hintText="Please, enter your firts name"
                floatingLabelText="Firt Name"
                ref="first-name"/>
            <TextField
                hintText="Please, enter your last name"
                floatingLabelText="Last Name"
                ref="last-name"/>
            <TextField
                hintText="Please, enter your username"
                floatingLabelText="Username"
                ref="username"/>
          </div>
          <div className="col-xs-6">
            <TextField
                hintText="Please, enter your email"
                floatingLabelText="Email"
                ref="email"/>
            <TextField
                hintText="Please, enter your password"
                floatingLabelText="Password"
                type="password"
                ref="password"/>
              <TextField
                  hintText="Please, type your password again"
                  floatingLabelText="Confirm Password"
                  type="password"
                  ref="confirm-password"/>

          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 text-center">
            <RaisedButton label="Submit" onClick={this.submitForm}/>
          </div>
        </div>
      </form>
      );
  }
}


function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, {
  submitRegisterForm
})(RegisterPage);
