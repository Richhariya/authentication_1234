
import {Button, Col, Form, InputGroup,Row} from 'react-bootstrap';
import './Profile.css'

function Profile() {
  
  const handleSubmit = (event) => {
   
    event.preventDefault();
   
    
    

    
  };

  return (
    
    <div className='container'>
        <h1>Profile</h1>
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom01" className='name1'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          
          />
         
        </Form.Group>
        
        <Form.Group as={Col} md="12" controlId="validationCustomUsername" className='name1'>
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
            
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom03" className='name1'>
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Password" required />
          
        </Form.Group>
        
       
      </Row>
      
      <Button type="reset" className='button' variant='light'>Login</Button>
    </Form>
    </div>
  );
}



export default Profile;