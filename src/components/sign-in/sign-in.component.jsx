import React, { Component } from "react";
import PropTypes from "prop-types";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./sign-in.styles.scss";

const TITLE = "I already have an account";
const SUBTITLE = "Sign in with your email and password";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">{TITLE}</h2>
        <span className="subtitle">{SUBTITLE}</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Sign in</CustomButton>
        </form>
      </div>
    );
  }
}
