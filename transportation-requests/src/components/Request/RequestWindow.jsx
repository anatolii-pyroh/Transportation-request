import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./RequestWindow.module.css";
import ReactDom from "react-dom";

const EditWindow = (props) => {
  // getting what exact part of request we are editing from dialog window and
  // sending the information to App.jsx to editRequest() function
  let whichPartEdit;
  const editPartIsFrom = () => {
    whichPartEdit = "from";
    props.edit(whichPartEdit, props.request);
  };
  const editPartIsTo = () => {
    whichPartEdit = "to";
    props.edit(whichPartEdit, props.request);
  };
  const editPartIsType = () => {
    whichPartEdit = "type";
    props.edit(whichPartEdit, props.request);
  };
  const editPartIsDate = () => {
    whichPartEdit = "date";
    props.edit(whichPartEdit, props.request);
  };
  const editPartIsDescription = () => {
    whichPartEdit = "description";
    props.edit(whichPartEdit, props.request);
  };

  return (
    <React.Fragment>
      <Modal show={props.showEdit} onHide={props.close} centered>
        <Modal.Header closeButton>
          <Modal.Title>What do you want to edit?</Modal.Title>
        </Modal.Header>
        <Modal.Body className='show-grid'>
          <div className={classes.centered}>
            <Container>
              <Row>
                <Col sm={12} md={12}>
                  <Button
                    variant='primary'
                    type='button'
                    className='m-1 w-50'
                    onClick={editPartIsFrom}
                  >
                    City from
                  </Button>
                </Col>
                <Col sm={12} md={12}>
                  <Button
                    variant='primary'
                    type='button'
                    className='m-1 w-50'
                    onClick={editPartIsTo}
                  >
                    City to
                  </Button>
                </Col>
                <Col sm={12} md={12}>
                  <Button
                    variant='primary'
                    type='button'
                    className='m-1 w-50'
                    onClick={editPartIsType}
                  >
                    Type of parcel
                  </Button>
                </Col>
                <Col sm={12} md={12}>
                  <Button
                    variant='primary'
                    type='button'
                    className='m-1 w-50'
                    onClick={editPartIsDate}
                  >
                    Date of dispatch
                  </Button>
                </Col>
                <Col sm={12} md={12}>
                  <Button
                    variant='primary'
                    type='button'
                    className='m-1 w-50'
                    onClick={editPartIsDescription}
                  >
                    Description
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

const DeleteWindow = (props) => {
  return (
    <React.Fragment>
      <Modal show={props.showDelete} onHide={props.closeDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete request?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={classes.centered}>
            <Container>
              <Row>
                <Col sm={6} md={6}>
                <Button variant='secondary' onClick={props.closeDelete}>
                  No
                </Button>
                </Col>
                <Col sm={6} md={6}>
                <Button variant='danger' onClick={props.closeDeleteRequest}>
                  Yes
                </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

const RequestWindow = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <EditWindow
          showEdit={props.showEdit}
          close={props.closeEdit}
          edit={props.edit}
          request={props.request}
        />,
        document.getElementById("modal")
      )}

      {ReactDom.createPortal(
        <DeleteWindow
          showDelete={props.showDelete}
          closeDelete={props.closeDelete}
          closeDeleteRequest={props.closeDeleteRequest}        
          />,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

export default RequestWindow;
