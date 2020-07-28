import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

export default function Itemstyle(props) {
  const selectRowProp = {
    mode: "checkbox",
  };
  
  const options = {
    sizePerPage: 5,
    prePage: "Previous",
    nextPage: "Next",
    firstPage: "First",
    lastPage: "Last",
    hideSizePerPage: true,
    afterDeleteRow: props.onAfterDeleteRow,

  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="header">
              <h4>ITEMS'S LIST</h4>
              <p>
                Order's status is editable. valid fields of status are{" "}
                <strong>completed</strong> or <strong>pending</strong>
              </p>
            </div>
            <div className="content">
              <BootstrapTable
                data={props.data}
                bordered={false}
                striped
                pagination={true}
                selectRow={selectRowProp}
                options={options}
                deleteRow={true}
              >
                <TableHeaderColumn dataField="key" width="50px" dataSort>
                  ID
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataField="name"
                  width="15%"
                  filter={{ type: "TextFilter" }}
                  dataSort
                >
                  Name
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataField="type"
                  width="15%"
                  editable={false}
                  dataSort
                >
                  Type
                </TableHeaderColumn>
              
                <TableHeaderColumn
                  width="20%"
                  isKey
                  hidden={true}
                  dataField="id"
                >
                  ItemId
                </TableHeaderColumn>
              </BootstrapTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
