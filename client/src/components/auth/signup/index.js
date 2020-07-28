import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
//import classnames from "classnames";
import { registerUser } from "../../../redux/actions/authActions";
import SignupStyle from "./Signup";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    // console.log(newUser);

    this.props.registerUser(newUser, this.props.history);
  }
  render() {
    return (
      <div>
        <SignupStyle
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          name={this.state.name}
          email={this.state.email}
          password={this.state.password}
          password2={this.state.password2}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(
  withRouter(Signup)
);
