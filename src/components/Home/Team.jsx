import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-solid-svg-icons";

const teamMembers = [
  {
    id: 1,
    name: "Mohammad Nurul Azam",
    role: "Founder & Lead Photographer",
    img: "https://i.ibb.co/YTjW3vF/team1.jpg",
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
    img: "https://i.ibb.co/M7nKb0v/team2.jpg",
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
    img: "https://i.ibb.co/svN38FZ/team3.jpg",
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
    img: "https://i.ibb.co/PtKjddZ/team4.jpg",
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
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-4">Meet Our Team</h2>
      <p className="text-center text-muted mb-5">
        Passionate creatives dedicated to capturing your perfect moments.
      </p>
      <Row>
        {teamMembers.map((member) => (
          <Col md={6} lg={3} key={member.id} className="mb-4">
            <Card className="border-0 shadow-sm team-card text-center">
              <Card.Img
                variant="top"
                src={member.img}
                style={{ height: "280px", objectFit: "cover" }}
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
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-primary"
                    />
                  </a>
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-danger"
                    />
                  </a>
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} className="text-info" />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
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
