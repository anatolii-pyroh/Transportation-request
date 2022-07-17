import React, { useState, useRef } from "react";
import ReactDom from "react-dom";
import classes from "./RequestWindow.module.css";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EditWindow = (props) => {
  const [showList, setShowList] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [inputType, setInputType] = useState();
  const inputRef = useRef();
  // getting what exact part of request we are editing from dialog window and
  // sending the information to App.jsx to editRequest() function
  const [whichPartEdit, setWhichPartEdit] = useState()
  const editPartIsFrom = () => {
    setWhichPartEdit("from");
    setInputType("text");
    closeListAndShowInput();
  };
  const editPartIsTo = () => {
    setWhichPartEdit("to");
    setInputType("text");
    closeListAndShowInput();
  };
  const editPartIsType = () => {
    setWhichPartEdit("type");
    setInputType("text");
    closeListAndShowInput();
  };
  const editPartIsDate = () => {
    setWhichPartEdit("date");
    setInputType("date");
    closeListAndShowInput();
  };
  const editPartIsDescription = () => {
    setWhichPartEdit("description");
    setInputType("text");
    closeListAndShowInput();
  };

  // close list of buttons and show input when user select what part to edit
  const closeListAndShowInput = (part) => {
    setShowList(false);
    setShowInput(true);
  };
  // save input value and send it to App.jsx to editRequest function, show list of buttons after
  // information is sent
  const saveAndSend = (editedPart) => {
    if (editedPart.trim().length < 1) {
      inputRef.current.value = "";
      return;
    }
    setShowInput(false);
    setShowList(true);
    props.edit(whichPartEdit, editedPart, props.request);
  };
  // close window when user press "X" button or click outside window
  const hideWindow = () => {
    props.close();
    setShowInput(false);
    setShowList(true);
  };
  
  return (
    <React.Fragment>
      <Modal show={props.showEdit} onHide={hideWindow} centered>
        {/* first show up list of request parts */}
        {showList && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>What do you want to Edit?</Modal.Title>
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
          </>
        )}

        {/* the second show up input to enter new value of selected request part */}
        {showInput && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Enter new value</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Control type={inputType} ref={inputRef}></Form.Control>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant='primary'
                onClick={() => saveAndSend(inputRef.current.value)}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </>
        )}
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

// depends on what user select, that window will show up on screen (edit/delete)
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
