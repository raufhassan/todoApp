import React, { Component } from "react";
import { LoginUser } from "../../../redux/actions/authActions";
import LoginStyle from "./Login";
import { connect } from "react-redux";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

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
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.LoginUser(user, this.props.history);
  }
  render() {
    return (
      <div>
        <LoginStyle
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          email={this.state.email}
          password={this.state.password}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { LoginUser })(Login);
