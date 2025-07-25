import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCamera,
  faFeather,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { teamMembers } from "../../assets/data/teamMembersData";

const Team = () => {
  return (
    <Container className="py-4">
      <h2 className="fw-bold mb-4 text-primary text-center">Meet Our Team</h2>

      <Row>
        {teamMembers?.map((member) => (
          <Col md={6} lg={3} key={member?.id} className="mb-4">
            <Card className="border-0 team-card shadow-lg text-center hover-effect">
              <div className="overflow-hidden">
                <Card.Img
                  variant="top"
                  src={member?.img}
                  style={{ height: "180px", objectFit: "cover" }}
                  className="team-img"
                />
              </div>
              <Card.Body>
                <h5 className="fw-bold mb-1">{member?.name}</h5>
                <p className="text-muted mb-2">{member?.role}</p>
                <div className="d-flex justify-content-center gap-3">
                  <a
                    href={member?.socials?.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className=""
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-primary fs-5"
                    />
                  </a>
                  <a
                    href={member?.socials?.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faCamera}
                      className="text-danger fs-5"
                    />
                  </a>
                  <a
                    href={member?.socials?.twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFeather}
                      className="text-info fs-5"
                    />
                  </a>
                  <a
                    href={member?.socials?.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="text-primary fs-5"
                    />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Team;
