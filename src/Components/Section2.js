import React from 'react'
import {Card,Button} from 'react-bootstrap'
import '../Css/CssSection2.css'
import {useNavigate} from 'react-router-dom';
const Section2 = (props) => {
  const navigate = useNavigate();
  const navigateToDetails = ()=> {
    // 👇️ navigate to /Details
    navigate('/Details');
  };
  return (
    <div className='MyCards'>   
     <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
      {props.description}
      </Card.Text>
       <Button onClick={navigateToDetails} variant="primary">Details</Button>
    </Card.Body>
  </Card>
    </div>
  )
}
export default Section2 ;