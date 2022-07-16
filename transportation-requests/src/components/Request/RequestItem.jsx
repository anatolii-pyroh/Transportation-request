import React, {useState} from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import RequestEditWindow from "./RequestEditWindow";

const RequestItem = (props) => {

  const [showWindow, setShowWindow] = useState(false);
  const handleCloseWindow = () => setShowWindow(false);
  const handleShowWindow = () => setShowWindow(true);
  
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
        <Badge bg='primary' pill onClick={handleShowWindow}>
          Edit
        </Badge>
        <Badge bg='danger' pill onClick={() => props.delete(props.request)}>
          Delete
        </Badge>
      </ListGroup.Item>
      <RequestEditWindow show={showWindow} close={handleCloseWindow} edit={props.edit} request={props.request}/>
    </React.Fragment>
  );
};

export default RequestItem;
