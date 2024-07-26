// import {useState} from "react";
// import {Link} from 'react-router-dom';
// import {Form, Button, Row, Col} from 'react-bootstrap';
// import FormContainer from "../components/FormContainer";


// const LoginScreen = () => {
//   const[email, setEmail] = useState('')
//   const[password, setPassword] = useState('')

//   const submitHandler = (e) => {
//     e.preventDefault()
//     console.log('submit')
//    }
  
//     return (
//     <FormContainer>
//         <h1>Sign In</h1>

//         <Form onSubmit={submitHandler}>
//             <Form.Group controlId='email' className="my-3">
//                 <Form.Label>Email Address</Form.Label>
//                 <Form.Control
//                     type="email"
//                     placeholder='Enter email'
//                     value={email}
//                     onChange={(e)=> setEmail(e.target.value)}>
//                 </Form.Control>
//             </Form.Group>
//             <Form.Group controlId='password' className="my-3">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                     type="password"
//                     placeholder='Enter password'
//                     value={password}
//                     onChange={(e)=> setPassword(e.target.value)}>
//                 </Form.Control>
//             </Form.Group>
//          <Button type='submit' variant='primary' className="mt-2">
//             Sign In
//             </Button>   
//         </Form>
//         <Row className='py-3'>
//             <Col>
//             New User? <Link to='/register'>Register</Link>
//             </Col>
//         </Row>
//     </FormContainer>
//   )
// }

// export default LoginScreen;

// import { useState } from "react";
// import { Link } from 'react-router-dom';
// import { Form, Button, Row, Col, Container, Card } from 'react-bootstrap';

// const LoginScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log('submit');
//   }

//   return (
//     <div style={{ 
//       minHeight: '100vh', 
//       background: 'linear-gradient(135deg, #f0f0f0, #a0a0a0)', 
//       display: 'flex', 
//       alignItems: 'center', 
//       justifyContent: 'center' 
//     }}>
//       <Container className="d-flex align-items-center justify-content-center">
//         <Card className="p-4 shadow-lg" style={{ maxWidth: '500px', width: '100%', borderRadius: '15px' }}>
//           <Card.Body>
//             <h1 className="text-center mb-4" style={{ color: '#007bff' }}>Sign In</h1>

//             <Form onSubmit={submitHandler}>
//               <Form.Group controlId="email" className="mb-3">
//                 <Form.Label>Email Address</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   style={{ borderRadius: '10px' }}
//                 />
//               </Form.Group>

//               <Form.Group controlId="password" className="mb-3">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   placeholder="Enter password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   style={{ borderRadius: '10px' }}
//                 />
//               </Form.Group>

//               <Button type="submit" variant="primary" className="w-100 mt-2" style={{ borderRadius: '10px' }}>
//                 Sign In
//               </Button>
//             </Form>

//             <Row className="py-3">
//               <Col className="text-center">
//                 New User? <Link to="/register" style={{ color: '#007bff', textDecoration: 'underline' }}>Register</Link>
//               </Col>
//             </Row>
//           </Card.Body>
//         </Card>
//       </Container>
//     </div>
//   );
// }

// export default LoginScreen;

import { useState } from "react";
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, Container, Card, Modal } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(true);  // Set to true to show modal on page load
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert("Please verify the reCAPTCHA.");
      return;
    }
    console.log('submit');
  }

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f0f0f0, #a0a0a0)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <Container className="d-flex align-items-center justify-content-center">
        <Card className="p-4 shadow-lg" style={{ maxWidth: '500px', width: '100%', borderRadius: '15px' }}>
          <Card.Body>
            <h1 className="text-center mb-4" style={{ color: '#007bff' }}>Sign In</h1>

            <Form onSubmit={submitHandler}>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ borderRadius: '10px' }}
                />
              </Form.Group>

              <Form.Group controlId="password" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ borderRadius: '10px' }}
                />
              </Form.Group>

              <ReCAPTCHA
                sitekey="6Lei1RgqAAAAAHmAw6b4OdrIVHF0oimQocFXgcX6"
                onChange={handleCaptchaChange}
              />

              <Button type="submit" variant="primary" className="w-100 mt-2" style={{ borderRadius: '10px' }}>
                Sign In
              </Button>
            </Form>

            <Row className="py-3">
              <Col className="text-center">
                New User? <Link to="/register" style={{ color: '#007bff', textDecoration: 'underline' }}>Register</Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>

      <Modal show={showModal} onHide={() => {}} centered>
        <Modal.Header>
          <Modal.Title>IMPORTANT</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: '2rem',maxWidth: '1200px',  margin: '0 auto', width: '100%' }}>
          Vigilance department of National Capital Region Transport Corporation Limited is the nodal office for handling all vigilance related complaints into offences alleged to have been committed under the Prevention of Corruption Act, 1988 by the employees of National Capital Region Transport Corporation Limited. The Chief Vigilance Officer, heads this unit, assisted by Two full time Dy. Chief Vigilance Officers, Five senior Vigilance Officers and Seven Vigilance Inspectors.
          <br /><br />
          The NCRTC vigilance department acts as nodal office for liaison with Vigilance Unit of the Ministry of Urban Development and the Central Vigilance Commission in all vigilance matters. Vigilance department also advises system improvement where-ever necessary to improve the administrative functioning of National Capital Region Transport Corporation Limited.
          <br /><br />
          <strong>Note:</strong>
          <ol>
            <li>Please do not lodge complaints in respect of matters against officers of organisation(s) other than the National Capital Region Transport Corporation.</li>
            <li>The NCRTC Vigilance has no jurisdiction over private individuals and officials of other organisations.</li>
          </ol>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Accept & Proceed
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LoginScreen;



