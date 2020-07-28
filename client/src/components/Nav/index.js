import React, { Component } from "react";
import NavbarStyle from "./Navbar"
import { connect } from "react-redux";
import {logoutUser} from "../../redux/actions/authActions"


class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isNavOpen: false,
      };
      this.toggleNav = this.toggleNav.bind(this);
      this.onLogoutClick = this.onLogoutClick.bind(this);
    }
    toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen,
      });
    }
    onLogoutClick(e) {
      e.preventDefault();
      this.props.logoutUser();
    }
    render(){
      const { isAuthenticated } = this.props.auth;
      return(
        <div>
          <NavbarStyle
            isNavOpen={this.state.isNavOpen}
            toggleNav={this.toggleNav}
            onLogoutClick={this.onLogoutClick}
            isAuthenticated={isAuthenticated}
          />
        </div>
      )
    }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps,{logoutUser})(
    Home
  );