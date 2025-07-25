import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCamera,
  faFeather,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const teamMembers = [
  {
    id: 1,
    name: "Nurul Azam",
    role: "Founder & Lead Photographer",
    img: "https://i.pravatar.cc/150?img=13",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Ayesha Akter",
    role: "Creative Director",
    img: "https://i.pravatar.cc/150?img=36",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Sakib Khan",
    role: "Cinematographer",
    img: "https://i.pravatar.cc/150?img=56",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Riya Hasan",
    role: "Editor & Designer",
    img: "https://i.pravatar.cc/150?img=47",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

const Team = () => {
  return (
    <Container className="py-4">
      <h2 className="fw-bold mb-4 text-primary text-center">Meet Our Team</h2>

      <Row>
        {teamMembers.map((member) => (
          <Col md={6} lg={3} key={member.id} className="mb-4">
            <Card className="border-0 shadow-lg text-center">
              <Card.Img
                variant="top"
                src={member.img}
                style={{ height: "180px" }}
              />
              <Card.Body>
                <h5 className="fw-bold mb-1">{member.name}</h5>
                <p className="text-muted mb-3">{member.role}</p>
                <div className="d-flex justify-content-center gap-3">
                  <a
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faUser} className="text-dark" />
                  </a>
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faCamera} className="text-danger" />
                  </a>
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFeather} className="text-info" />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="text-primary"
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
