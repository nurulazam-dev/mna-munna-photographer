import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import contactImg from "../../assets/images/contact-img.jpg";

const Contact = () => {
  return (
    <Container className="py-4">
      <h2 className="text-center fw-bold text-primary mb-4">Get in Touch</h2>
      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100 shadow-lg p-4 pt-0">
            <Card.Img variant="top" src={contactImg} />
            <h4 className="mb-2 text-center fw-bold">Contact Details</h4>
            <p className="mb-2">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="me-2 text-danger"
              />
              123 Photographer St, Dhaka, Bangladesh
            </p>
            <p className="mb-2">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className="me-2 text-success"
              />
              +880 1234 567890
            </p>
            <p className="mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="me-2 text-info" />
              info@mnaphotography.com
            </p>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="h-100 shadow-lg p-4">
            <h4 className="mb-3 text-center fw-bold">Send a Message</h4>
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  required
                  className="shadow-sm px-3"
                  style={{ height: "45px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  required
                  className="shadow-sm px-3"
                  style={{ height: "45px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="subject">
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  required
                  className="shadow-sm px-3"
                  style={{ height: "45px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="message">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your Message"
                  required
                  className="shadow-sm"
                  style={{ padding: "15px 18px" }}
                />
              </Form.Group>

              <div className="d-grid mt-4">
                <Button variant="success" className="fw-bold shadow py-2">
                  Send Message
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
