import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col >
            <p>NCRTC &copy; {currentYear} www.ncrtc.in. All Rights Reserved.All images on the website are representations.The actual assets may be different…</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
