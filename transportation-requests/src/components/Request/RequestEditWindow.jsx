import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./RequestEditWindow.module.css";
import ReactDom from "react-dom";

const EditWindow = (props) => {
  // getting what exact part of request we are editing from dialogue window and 
  // sending the information to App.jsx to editRequest() function
  let whichPartEdit;
  const editPartIsFrom = () => {
    whichPartEdit = "from"
    props.edit(whichPartEdit, props.request)
  }
  const editPartIsTo = () => {
    whichPartEdit = "to"
    props.edit(whichPartEdit, props.request)
  }
  const editPartIsType = () => {
    whichPartEdit = "type"
    props.edit(whichPartEdit, props.request)
  }
  const editPartIsDate = () => {
    whichPartEdit = "date"
    props.edit(whichPartEdit, props.request)
  }
  const editPartIsDescription = () => {
    whichPartEdit = "description"
    props.edit(whichPartEdit, props.request)
  }
  
  return (
    <Modal show={props.show} onHide={props.close} centered>
      <Modal.Header closeButton>
        <Modal.Title>What do you want to edit?</Modal.Title>
      </Modal.Header>
      <Modal.Body className='show-grid'>
        <div className={classes.buttons}>
          <Container>
            <Row>
              <Col sm={12} md={12}>
                <Button variant='primary' type='button' className='m-1 w-50' onClick={editPartIsFrom}>
                  City from
                </Button>
              </Col>
              <Col sm={12} md={12}>
                <Button variant='primary' type='button' className='m-1 w-50' onClick={editPartIsTo}>
                  City to
                </Button>
              </Col>
              <Col sm={12} md={12}>
                <Button variant='primary' type='button' className='m-1 w-50' onClick={editPartIsType}>
                  Type of parcel
                </Button>
              </Col>
              <Col sm={12} md={12}>
                <Button variant='primary' type='button' className='m-1 w-50' onClick={editPartIsDate}>
                  Date of dispatch
                </Button>
              </Col>
              <Col sm={12} md={12}>
                <Button variant='primary' type='button' className='m-1 w-50' onClick={editPartIsDescription}>
                  Description
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const RequestEditWindow = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <EditWindow show={props.show} close={props.close} edit={props.edit} request={props.request}/>,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

export default RequestEditWindow;
