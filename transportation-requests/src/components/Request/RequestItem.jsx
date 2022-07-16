import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import RequestWindow from "./RequestWindow";

const RequestItem = (props) => {
  const [showEditWindow, setShowEditWindow] = useState(false);
  const handleCloseEditWindow = () => setShowEditWindow(false);
  const handleShowEditWindow = () => setShowEditWindow(true);

  const [showDeleteWindow, setShowDeleteWindow] = useState(false);
  const handleCloseDeleteWindow = () => setShowDeleteWindow(false);
  const handleShowDeleteWindow = () => setShowDeleteWindow(true);

  const DeleteAndClose = () => {
    props.delete(props.request);
    handleCloseDeleteWindow
  }
  
  return (
    <React.Fragment>
      <ListGroup.Item
        as='li'
        className='d-flex justify-content-between align-items-start'
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
        <Badge bg='primary' pill onClick={handleShowEditWindow}>
          Edit
        </Badge>
        <Badge bg='danger' pill onClick={handleShowDeleteWindow}>
          Delete
        </Badge>
      </ListGroup.Item>
      <RequestWindow
        showEdit={showEditWindow}
        closeEdit={handleCloseEditWindow}
        edit={props.edit}
        request={props.request}
        showDelete={showDeleteWindow}
        closeDelete={handleCloseDeleteWindow}
        closeDeleteRequest={DeleteAndClose}
      />
    </React.Fragment>
  );
};

export default RequestItem;
