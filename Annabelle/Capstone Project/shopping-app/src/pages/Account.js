import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import ChangeUsernameForm from '../components/ChangeUsernameForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/home.css';
import Navbar from "../components/Navbar";

function UserPage() {
  const { user, updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  //takes the user id from the backend and sets its value to null so it no longer exists.
  const handleDelete = () => {
    axios.delete(`http://localhost:8081/api/users/${user._id}`)
      .then(response => {
        updateUser(null);
        navigate('/home');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <body style={{fontFamily:'Montserrat',backgroundImage:'url("https://e1.pxfuel.com/desktop-wallpaper/28/336/desktop-wallpaper-pin-on-makeup-aesthetic-makeup.jpg")', height: '100%', width: '100%', backgroundSize: 'cover'}}>
      <Navbar />
      <Container className="d-flex justify-content-center mt-5">
        <Row style={{width:'500px'}}>
          <Col md={{ span: 12 }} style={{backgroundColor:'white'}}>
            <div className="border rounded p-4" style={{ textAlign: 'center' }}>
              <h1 className="text-center mb-4" style={{fontSize:'30px'}}>Welcome {user.name}</h1>
              <p style={{textAlign:'center'}}>Email: {user.email}</p>
              <div className="text-center">
                <Button variant="danger" onClick={handleDelete}>Delete Account</Button>
              </div><br/>
              <ChangeUsernameForm />
            </div>
          </Col>
        </Row>
      </Container>
    </body>
  );
}

export default UserPage;
