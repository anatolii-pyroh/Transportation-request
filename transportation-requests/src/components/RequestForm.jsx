import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const requestForm = (props) => {
  const [symbolsCount, setSymbolsCount] = useState(100);
  const calculateSymbolsLeftHandler = (event) => {
    setSymbolsCount(100 - event.target.value.length);
  };
  
  const cityFrom = useRef()
  const cityTo = useRef()
  const parcelType = useRef()
  const dispatchDate = useRef()
  const parcelDescription = useRef()

  const submitFormHandler = (e) => {
    e.preventDefault();
    const newRequest = {
      from: cityFrom.current.value,
      to: cityTo.current.value,
      type: parcelType.current.value,
      date: dispatchDate.current.value,
      description: parcelDescription.current.value
    }
    props.addNewRequest(newRequest)
  };
  return (
    <Form>
      <Container>
        {/* Parcel city from and city to */}
        <Row>
          <Col sm={12} md={6}>
            <Form.Group className='mb-3'>
              <Form.Label>City from which the parcel is sent</Form.Label>
              <Form.Control type='text' placeholder='enter city' ref={cityFrom}/>
            </Form.Group>
          </Col>
          <Col sm={12} md={6}>
            <Form.Group className='mb-3'>
              <Form.Label>City to which the parcel is sent</Form.Label>
              <Form.Control type='text' placeholder='enter city' ref={cityTo}/>
            </Form.Group>
          </Col>
        </Row>
        {/* Type of parcel */}
        <Row>
          <Col sm={12} md={12}>
            <Form.Group className='mb-3'>
              <Form.Label>Type of parcel</Form.Label>
              <Form.Control
                type='text'
                list='select-parcel-type'
                placeholder='select or write parcel type'
                ref={parcelType}
              />
              <datalist id='select-parcel-type'>
                <option value='Gadgets' />
                <option value='Drinks' />
                <option value='Clothes' />
                <option value='Medicines' />
              </datalist>
            </Form.Group>
          </Col>
        </Row>
        {/* Date of dispatch */}
        <Row>
          <Col sm={12} md={12}>
            <Form.Group className='mb-3'>
              <Form.Label>Date of dispatch</Form.Label>
              <Form.Control
                type='text'
                placeholder='select dispatch date'
                onFocus={(e) => (e.target.type = "date")}
                ref={dispatchDate}
              />
            </Form.Group>
          </Col>
        </Row>
        {/* Parcel description */}
        <Row>
          <Col sm={12} md={12}>
            <Form.Group>
              <Form.Label>Parcel description ({symbolsCount} symbols left)</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='leave comment here'
                maxLength='100'
                onChange={calculateSymbolsLeftHandler}
                style={{ minHeight: "80px", maxHeight: "80px" }}
                ref={parcelDescription}
              />
            </Form.Group>
          </Col>
        </Row>
        {/* Submit button */}
        <Button
          variant='primary'
          type='submit'
          className='mt-3'
          onClick={submitFormHandler}
        >
          Submit
        </Button>
      </Container>
    </Form>
  );
};

export default requestForm;
