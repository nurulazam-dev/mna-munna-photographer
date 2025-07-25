import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCameraRetro,
  faUsers,
  faClock,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import brandLogo from "../../assets/images/mna-munna-photographer.png";

const About = () => {
  return (
    <div>
      <section className="bg-success text-white py-5 text-center">
        <Container>
          <h1 className="display-4 fw-bold">About MNA Munna Photographer</h1>
          <p className="lead">Capturing Moments, Creating Memories</p>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={4} className="bg-primary shadow rounded py-5">
              <Image src={brandLogo} fluid alt="MNA Munna Photographer" />
            </Col>
            <Col md={8} className="ps-5">
              <h2 className="fw-bold mb-3">Meet Munna</h2>
              <p style={{ fontSize: "17px" }}>
                I’m <strong>Munna</strong>, a passionate photographer dedicated
                to capturing your most precious moments. With years of
                experience in wedding, event, and portrait photography, I blend
                creativity with professionalism to deliver photos that tell a
                story.
              </p>
              <p>
                Whether it's your big day, a corporate event, or a family
                portrait, I strive to make every shot count.
              </p>
              <Button variant="success" className="mt-2">
                Contact Me
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="fw-bold">Mission & Vision</h2>
              <p className="text-muted">Why I do what I do</p>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Card className="mb-4 shadow-sm border-0">
                <Card.Body>
                  <h4 className="fw-bold">🎯 My Mission</h4>
                  <p>
                    To capture heartfelt and timeless photographs that reflect
                    the beauty, emotion, and story of every individual and
                    occasion.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-4 shadow-sm border-0">
                <Card.Body>
                  <h4 className="fw-bold">🚀 My Vision</h4>
                  <p>
                    To become one of the most trusted names in photography by
                    consistently delivering creative, high-quality, and
                    memorable imagery.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-primary text-white py-5">
        <Container>
          <Row className="text-center">
            <Col md={3} sm={6} className="mb-4">
              <FontAwesomeIcon icon={faCameraRetro} size="2x" />
              <h3 className="fw-bold mt-2">500+</h3>
              <p>Photoshoots</p>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <FontAwesomeIcon icon={faUsers} size="2x" />
              <h3 className="fw-bold mt-2">300+</h3>
              <p>Happy Clients</p>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <FontAwesomeIcon icon={faClock} size="2x" />
              <h3 className="fw-bold mt-2">7+ Years</h3>
              <p>Experience</p>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <FontAwesomeIcon icon={faAward} size="2x" />
              <h3 className="fw-bold mt-2">15</h3>
              <p>Awards Won</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 text-center">
        <Container>
          <h2 className="fw-bold mb-3">Let’s Make Your Moments Memorable</h2>
          <p className="mb-4 text-muted">
            Ready to book a session or discuss your event?
          </p>
          <Button variant="success" size="lg">
            Book a Session
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default About;
