import {useState,useEffect} from 'react'
import { Alert, Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import './SignupSection.css';


function SignupSection() {
  const [userDetails, setuserDetails] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    // tNC: false
  })

  const [error, setError] = useState({
    fullName: false,
    email: false,
    password: false,
    confirmPassword: false,
  })

  const [submit, setSubmit] = useState(false)
  const [sucess, setSucess] = useState(false)
    

  useEffect(() => {
    if(submit && !Object.values(error).includes(true)){
        setSucess(true)
        setuserDetails({
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            // tNC: false
          })
    }
  }, [submit, error])
 
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true)
        
    const {fullName, email, password, confirmPassword} = userDetails
       
      if(fullName.length >= 2) { 
           setError((previousError) => ({
             ...previousError,
             fullName: false
           }))
       }
       else{
        setError((previousError) => ({
            ...previousError,
            fullName: true
          }))
       }
       
       if(email.includes("@")&&
          email.includes(".")){
            setError((previousError) => ({
                ...previousError,
                email: false
              }))
           
          }else{
            setError((previousError) => ({
                ...previousError,
                email: true
              }))
          }
        
        if(password.length>=2){
            setError((previousError) => ({
                ...previousError,
                password: false
              }))
        }else{
            setError((previousError) => ({
                ...previousError,
                password: true
              }))
        }
        if(confirmPassword===password){
            setError((previousError) => ({
                ...previousError,
                confirmPassword: false
              }))
        }else{
            setError((previousError) => ({
                ...previousError,
                confirmPassword: true
              }))
        }
       
    };

    return (
        <div className='container'>
           
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3 box">
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label className='name'>Full Name</Form.Label>
                        <Form.Control
                            
                            type="text"
                            placeholder="Full name"
                            value= {userDetails.fullName}
                            onChange={(e) => setuserDetails({
                                ...userDetails,
                                fullName: e.target.value
                            })}
                        />
                        {/* {submit && !sucess && (error.fullName ? (<Form.Control.Feedback type="invalid">
                                Please enter a valid full name.
                            </Form.Control.Feedback>) : (<Form.Control.Feedback>Looks good!</Form.Control.Feedback>))}
                         */}
                        
                    </Form.Group>
                    
                    <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                        <Form.Label className='name'>Email</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                value= {userDetails.email}
                                onChange={(e) => setuserDetails({
                                ...userDetails,
                                email : e.target.value
                            })}
                            />
                             {/* {submit && !sucess && (error.email ? (<Form.Control.Feedback type="invalid">
                                Please enter a valid email.
                            </Form.Control.Feedback>) : (<Form.Control.Feedback>Looks good!</Form.Control.Feedback>))} */}

                            
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom03" >
                        <Form.Label className='name'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                        value= {userDetails.password}
                        onChange={(e) => setuserDetails({
                            ...userDetails,
                            password : e.target.value
                        })} />
                        {/* {submit && !sucess && (error.password ? (<Form.Control.Feedback type="invalid">
                                Please enter a password.
                            </Form.Control.Feedback>) : (<Form.Control.Feedback>Looks good!</Form.Control.Feedback>))}
                        */}
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom04" className='name'>
                        <Form.Label className='name'>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="confirm Password"
                        value= {userDetails.confirmPassword}
                        onChange={(e) => setuserDetails({
                            ...userDetails,
                            confirmPassword: e.target.value
                        })} />
                          
                        
                        
                    </Form.Group>
                    
                </Row>
                <Form.Group className="mb-3 name" >
                    {/* <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    /> */}

                    {submit && !sucess && (error ?  ( <Form.Control.Feedback type="invalid" className='button'>
                           Error: All The fields Are mendatory.</Form.Control.Feedback>):
                            (<Alert varient="sucess">
                             Signup Sucessfully</Alert>)) }
                     
                    
                </Form.Group>
                
               { sucess && <Form.Control.Feedback className='button'>Sucessfully Signed Up!</Form.Control.Feedback>}
              
                <Button type="submit" className='button' variant='light'>Sign Up</Button>
                
            </Form>
            
            
        </div>
    );
}

export default SignupSection;