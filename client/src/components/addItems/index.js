import React, { Component } from "react";
import { connect } from "react-redux";
import { additem } from "../../redux/actions/itemActions";
import ItemForm from "./ItemForm"

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      success: "",
      fail: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
//   componentDidMount() {
//     if (!this.props.auth.isAuthenticated) {
//       this.props.history.push("/");
//     }
//   }
 /*  componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
      console.log(this.props.history);
    }
    if (nextProps.items.itemAdded) {
      this.setState({ success: nextProps.items.itemAdded, fail: "" });
    }
    if (nextProps.items.errMess) {
      this.setState({ fail: nextProps.errors, success: "" });
    }
  } */
  validate() {
    if (this.state.name === "") {
      this.setState({ fail: "field is empty" });
      return false;
    } else {
      return true;
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      const item = {
        name: this.state.name,
        type: this.state.type,
      };
      this.props.additem(item);
    }
  }
  render() {
    console.log(this.state);
    var type;
    if (this.props.items.type) {
      type = this.props.items.type;
      //  console.log(type[0].value);
      // this.setState({ type: type[0].value });
    }
    return (
      <div>
          <ItemForm
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            name={this.state.name}
            type={this.state.type}
            // errors={this.state.errors}
            success={this.state.success}
            fail={this.state.fail}
          />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  items: state.items,
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { additem })(
  AddItem
);
