import React from 'react';
import { Container, Progress, Row, Col, Button, Input } from 'reactstrap';
import '../assets/custom.scss';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { useState } from 'react';

function FunctionalCounter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        if(count < 100){
            setCount(prev => (prev + 1));
        }
    }
    const decrement = () => {
        if(count > 0){
            setCount(prev => (prev - 1));
        }
    }
    const handleChange = (e) => {
        let value = e.target.value;
        if(value === '') {
            setCount('');
            return;
        }
        value = value.replace(/^0+(?=\d)/, '');
        if (value.length > 3) {
            return;
        }
        const intVal = Number(value);
        if(!isNaN(intVal) && intVal >= 0 && intVal <= 100) {
            setCount(intVal);
        }    
    }
 
  return (
    <div className="d-flex justify-content-center align-items-center bg-custom vh-100 text-light">
      <Container fluid>
        <Row className="justify-content-center">
        <p className="custom-font"> Progress Bar </p>
          <Col sm="9" md="6" lg="6">
            <Progress color="orange" className="my-3 custom-progress rounded-pill" value={count}>
                {count}%
            </Progress>
          </Col>
        </Row>
        <Col sm="9" className="mx-auto">
            <Row xs={3} className="justify-content-center align-items-center">
                <Col className="text-end"> 
                    <Button className="bg-light text-dark border-0 custom-btn rounded-circle me-2" size="sm"
                    onClick={decrement}
                    aria-label="Decrement counter"> 
                        <FaMinus/> 
                    </Button>  
                </Col>
                <Col md="3" lg="2">
                    <Input type="number" 
                    onChange={handleChange}
                    className="custom-form" 
                    max={100} 
                    maxLength={3}
                    value={count}
                    aria-label="Counter value" />
                </Col>
                <Col className="text-start"> 
                    <Button className="bg-light text-dark border-0 custom-btn rounded-circle me-2" size="sm"
                    onClick={increment}
                    aria-label="Increment counter"> 
                        <FaPlus/> 
                    </Button>  
                </Col>
            </Row>
        </Col>
        
      </Container>
    </div>
  );
}

export default FunctionalCounter;
