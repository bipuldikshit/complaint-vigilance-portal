import React, { useState, useEffect } from 'react';
import { Table, Container, Badge, Spinner } from 'react-bootstrap';
import axios from 'axios';

const ComplaintStatusScreen = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const { data } = await axios.get('/api/dummyData/complaints');
        setComplaints(data);
      } catch (error) {
        console.error('Error fetching complaints:', error);
      }
      setLoading(false);
    };
    fetchComplaints();
  }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Pending':
        return <Badge bg="warning">Pending</Badge>;
      case 'Resolved':
        return <Badge bg="success">Resolved</Badge>;
      case 'In Progress':
        return <Badge bg="info">In Progress</Badge>;
      default:
        return <Badge bg="secondary">Unknown</Badge>;
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f0f0, #a0a0a0)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Container className="p-4" style={{ backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <h1 className="text-center mb-4" style={{ color: '#007bff' }}>Complaint Status</h1>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Complaint</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint) => (
                <tr key={complaint.id}>
                  <td>{complaint.id}</td>
                  <td>{complaint.description}</td>
                  <td>{getStatusBadge(complaint.status)}</td>
                  <td>{new Date(complaint.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </div>
  );
};

export default ComplaintStatusScreen;
