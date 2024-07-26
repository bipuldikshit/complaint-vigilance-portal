import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { complaints, users } from '../data/dummyData';
import axios from 'axios';

const HomeScreen = () => {
  const [complaints, setComplaints] = useState ([]);

  useEffect(() => {
    const fetchComplaints = async () => {
        const {data} = await axios.get('/api/dummyData/complaints');
        setComplaints(data);
    };
    fetchComplaints();
  }, []);

  const containerStyle = {
    backgroundImage: 'url(/NCRTC.jpg)', // Ensure the image is in the public directory
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    margin: 0,
    padding: 0,
  };

  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    position: 'relative',
    zIndex: 1,
    width: '80%',
    maxWidth: '600px',
    margin: 0, // Remove default margin
    padding: 0, // Remove default padding
  };

  const titleStyle = {
    marginLeft: '20px',
    marginBottom: '30px',
    fontSize: '2.5rem',
  };

  const subTitleStyle = {
    marginLeft: '20px',
    fontSize: '2rem',
  };

  const descriptionStyle = {
    marginLeft: '20px',
    fontSize: '1rem',
  };

  return (
    <div style={containerStyle}>
        <Container style={contentStyle}>
          <h1 style={titleStyle}>Welcome to NCRTC</h1>
          <Row>
            <Col>
              <h1 style={subTitleStyle}>Vigilance Complaint Portal</h1>
              <h5 style={descriptionStyle}>
                National Capital Region Transport Corporation vigilance is the nodal organisation for
                handling all vigilance matters of the National Capital Region Transport Corporation
                including its Operations outside Delhi. The Chief Vigilance Officer,
                heads this unit. The CVO is assisted by Three full time Dy. Chief
                Vigilance Officers, Five senior Vigilance Officers and Seven
                Vigilance Inspectors.
              </h5>
            </Col>
          </Row>
        </Container>
      
    </div>
  );
};

export default HomeScreen;
