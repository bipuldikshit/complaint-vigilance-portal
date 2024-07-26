import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ComplaintHandlingPolicy = () => {
  const containerStyle = {
    backgroundColor: '#f8f9fa',
    paddingTop: '20px',
    paddingBottom: '20px',
  };

  const cardStyle = {
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <Container style={containerStyle}>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card style={cardStyle}>
            <Card.Body>
              <h2 className="text-center mb-4">Complaint Handling Policy</h2>
              <p>
                National Capital Region Transport Corporation (NCRTC) vigilance department is the nodal office for handling all complaints into offences alleged to have been committed under the Prevention of Corruption Act, 1988 by the employees of NCRTC.
              </p>
              <h4>Jurisdiction of the NCRTC Vigilance Department</h4>
              <ol>
                <li>Complaints can be lodged only against the officials of NCRTC.</li>
                <li>The NCRTC Vigilance has no jurisdiction over private individuals and officials of other organisations.</li>
              </ol>
              <h4>Lodging of Complaints</h4>
              <p>
                Complaints can be lodged by addressing the written communication/letter directly to the CVO/NCRTC, Metro Bhawan, Fire Brigade Lane, Barakhamba Road, New Delhi – 110001 or on NCRTC’s Vigilance Complaint Portal.
              </p>
              <p>
                Complaints sent through written communication/letter should contain complete postal address (including mobile/telephone number, if any) of the sender with specific details/information of the matter. Complaints sent on any e-mail ID of officials of the NCRTC Vigilance department will not be entertained or taken cognizance of by the NCRTC Vigilance.
              </p>
              <h4>Action Taken on Complaints in the NCRTC Vigilance</h4>
              <ol>
                <li>Only those complaints which are against NCRTC officials and contain allegations of corruption will be investigated by the NCRTC Vigilance.</li>
                <li>Once the complainant registers a complaint on NCRTC’s Vigilance Complaint Portal, a complaint number would be provided to the complainant. The complainant can use this complaint number to see the status of the complaint on the Vigilance Complaint Portal on NCRTC website.</li>
                <li>Once a complaint is registered in the Vigilance department, further correspondence in the matter will not be entertained unless warranted by the vigilance department. However, NCRTC Vigilance will ensure that the complaints are investigated and action taken to its logical conclusion.</li>
                <li>As regards complaints against tenders, while the NCRTC Vigilance would get the matter investigated, it would not interfere in the tendering process as such. The intention is not to stop the work in the organisation.</li>
                <li>The NCRTC Vigilance deals only with matters of corruption; redressal of grievances should not be the focus of complaints to the Vigilance department.</li>
                <li>Complaints must contain factual details, verifiable facts, and related matters. They should not be vague or contain sweeping general allegations.</li>
                <li>The NCRTC Vigilance does not entertain anonymous/pseudonymous complaints.</li>
                <li>Complaints that do not meet the above criteria will either be filed or referred to the concerned NCRTC department for necessary action. Complainants should then find out the status of those complaints from the concerned NCRTC department.</li>
              </ol>
              <h4>Whistle Blower Complaints (Public Interest Disclosure and Protection of Informer’s Resolution)</h4>
              <p>
                If a complainant while exposing a case of corruption wants their identity to be kept secret, they should lodge a complaint under the Public Interest Disclosure and Protection of Informers Resolution (PIDPIR) – popularly known as Whistle Blower Provision directly to the Secretary, CVC.
              </p>
              <h4>Procedure for Lodging Complaint Under PIDPIR</h4>
              <p>
                Complaint under Public Interest Disclosure and Protection of Informer Resolution can be made only by post. The complaints should be addressed to Secretary, CVC, and the envelope should be superscribed PIDPI or Whistle Blower. The complainant should not mention their name or address on the body of the envelope. The personal detail should be separately given or given at the top or end of the complaint letter placed inside the envelope so that they can be easily blocked out.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ComplaintHandlingPolicy;
