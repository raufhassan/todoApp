import React from "react";

export default function ItemForm(props) {
  return (
    <div style={{ height: "100vh", overflowX: "hidden" }}>
      <div className="container">
        <div className="row ">
          <div className="col-12 col-sm-10">
            <h2>Add Items </h2>
            <form onSubmit={props.onSubmit} style={{ marginTop: "50px" }}>
              <div className="form-group mt-5">
                <label>Name:</label>
                <input
                  type="text"
                  value={props.name}
                  onChange={props.onChange}
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="form-group mt-5">
                <label>Type</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type"
                  onChange={props.onChange}
                  value={props.type}
                  name="type"
                />
              </div>
             
              {props.success ? (
                <div className="alert alert-success" role="alert">
                  {props.success}
                </div>
              ) : (
                <div className="alert alert-danger" role="alert">
                  {props.fail}
                </div>
              )}

              <input
                className="btn btn-fill btn-info"
                type="submit"
                value="Add Item"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
