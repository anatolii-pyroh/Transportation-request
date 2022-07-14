import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const requestForm = () => {
  const [count, setCount] = useState(100);
  const calculateSymbolsLeftHandler = (event) => {
    setCount(100 - event.target.value.length);
  };
  return (
    <Form>
      <Container>
        {/* Parcel city from and city to */}
        <Row>
          <Col sm={12} md={6}>
            <Form.Group className='mb-3'>
              <Form.Label>City from which the parcel is sent</Form.Label>
              <Form.Control type='text' placeholder='enter city' />
            </Form.Group>
          </Col>
          <Col sm={12} md={6}>
            <Form.Group className='mb-3'>
              <Form.Label>City to which the parcel is sent</Form.Label>
              <Form.Control type='text' placeholder='enter city' />
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
              />
            </Form.Group>
          </Col>
        </Row>
        {/* Parcel description */}
        <Row>
          <Col sm={12} md={12}>
            <Form.Group>
              <Form.Label>Parcel description ({count} symbols left)</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='leave comment here'
                maxLength='100'
                onChange={calculateSymbolsLeftHandler}
                style={{ minHeight: "80px", maxHeight: "80px" }}
              />
            </Form.Group>
          </Col>
        </Row>
        {/* Submit button */}
        <Button variant='primary' type='submit' className="mt-3" onClick={(e) => e.preventDefault()}>
          Submit
        </Button>
      </Container>
    </Form>
  );
};

export default requestForm;
