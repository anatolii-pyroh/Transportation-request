import React from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

const RequestItem = (props) => {
  return (
    <React.Fragment>
      <ListGroup.Item
        as='li'
        className='d-flex justify-content-between align-items-start'
        key={props.request.id}
      >
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>
            From {props.request.from} to {props.request.to}
          </div>
          <div>
            <span>Type: </span>
            {props.request.type}
          </div>
          <div>
            <span>Date of dispatch: </span>
            {props.request.date}
          </div>
          <div>
            <span>Description: </span>
            {props.request.description}
          </div>
        </div>
        <div style={{ cursor: "pointer" }}>
          <Badge bg='primary' pill onClick={() => console.log("edit")}>
            Edit
          </Badge>
          <Badge bg='danger' pill onClick={() => console.log("delete")}>
            Delete
          </Badge>
        </div>
      </ListGroup.Item>
    </React.Fragment>
  );
};

export default RequestItem;
