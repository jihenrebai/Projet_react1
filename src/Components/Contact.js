import React from 'react'
import {Form,Button} from 'react-bootstrap';

const Contact = () => {
  return (
    <div>  
    <h1>hello </h1>
    <Form>
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label > Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form>
  <Button variant="dark">Send</Button>
    </div>
  )
}

export default Contact