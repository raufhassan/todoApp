import React, { Component } from "react";
import {
fetchitems,
deleteitem
} from "../../redux/actions/itemActions";
import { connect } from "react-redux";
import Itemstyle from "./ItemStyles";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
    this.onAfterDeleteRow = this.onAfterDeleteRow.bind(this);
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    this.props.fetchitems();
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
      console.log(this.props.history);
    }
  }
  onAfterDeleteRow(rowKeys) {
    alert("The rowkey you drop: " + rowKeys);
     this.props.deleteitem(rowKeys);
  }


  render() {
    const items = this.props.items.items;
    let data = [];

    if (items) {
      data = items.map((items, index) => {

        return {
          key: index,
          id: items._id,
          name: items.name,
          type: items.type,          
        };
      });
      console.log(data);

      return (
        <div>
            <Itemstyle
              data={data}
              onAfterDeleteRow={this.onAfterDeleteRow}
              onAfterSaveCell={this.onAfterSaveCell}
              onBeforeSaveCell={this.onBeforeSaveCell}
            />
        </div>
      );
    } else if (this.props.items.isLoading) {
      return <h1>Loading...</h1>;
    } else {
      return <h1>no items</h1>;
    }
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  items: state.items,
});

export default connect(mapStateToProps, {
  fetchitems,
  deleteitem,
})(Items);
