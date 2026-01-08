import React from 'react';
import { Container, Progress, Row, Col, Button, Input } from 'reactstrap';
import '../assests/custom.scss';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

function SimpleCounter() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-custom vh-100 text-light">
      <Container fluid>
        <Row className="justify-content-center">
        <p className="custom-font"> Progress Bar </p>
          <Col sm="9" md="6" lg="6">
            <Progress color="orange" className="my-3 custom-progress rounded-pill" value={10}>
                10%
            </Progress>
          </Col>
        </Row>
        <Col sm="9" className="mx-auto">
            <Row xs={3} className="justify-content-center align-items-center">
                <Col className="text-end"> 
                    <Button className="bg-light text-dark border-0 custom-btn rounded-circle me-2" size="sm"> 
                        <FaMinus/> 
                    </Button> Decrement 
                </Col>
                <Col sm="2">
                    <Input type="number" className="custom-form" max={100} maxLength={3} />
                </Col>
                <Col className="text-start"> 
                    <Button className="bg-light text-dark border-0 custom-btn rounded-circle me-2" size="sm"> 
                        <FaPlus/> 
                    </Button> Increment 
                </Col>
            </Row>
        </Col>
        
      </Container>
    </div>
  );
}

export default SimpleCounter;
