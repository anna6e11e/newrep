import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/home.css';

function Landing() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  if (user) {
    navigate('/user');
  }

  return (
  <body style={{fontFamily:'Montserrat',backgroundImage:'url("https://e1.pxfuel.com/desktop-wallpaper/28/336/desktop-wallpaper-pin-on-makeup-aesthetic-makeup.jpg")', height: '100%', width: '100%', backgroundSize: 'cover'}}>
    <Container className="d-flex justify-content-center mt-5">
      <Row style={{width:'500px'}}>
        <Col md={{ span: 12 }} style={{backgroundColor:'white'}}>
          <div className="border rounded p-4" style={{ textAlign: 'center' }}>
            <h1 className="text-center mb-4" style={{fontSize:'30px'}}>Welcome to Simply Makeup</h1>
            <div className="d-flex justify-content-center" style={{gap: '2rem'}}>
              <div className="text-center">
                <h2 style={{ fontSize: '24px' }}>New User?</h2>
                <Button variant="secondary" onClick={handleSignup} style={{ color: 'black', backgroundColor: '#ffecf2', borderColor: 'black', width: '10rem' }}>Sign up</Button>
                <div style={{marginTop: '2rem'}}>
                  <h3 style={{ fontSize: '24px' }}>Existing User?</h3>
                  <Button variant="primary" onClick={handleLogin} style={{ color: 'black', backgroundColor: '#ffecf2', borderColor: 'black', width: '10rem' }}>Log in</Button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </body>
);

  
}

export default Landing;
