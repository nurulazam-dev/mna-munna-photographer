import { Card, Container, Row, Col, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { reviews } from "../../assets/data/reviewsData";

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FontAwesomeIcon key={i} icon={faStar} className="text-warning me-1" />
      ))}
      {halfStar && (
        <FontAwesomeIcon icon={faStarHalfAlt} className="text-warning me-1" />
      )}
    </>
  );
};

// Chunk reviews into groups of 3
const chunk = (array, size) => {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
};

const Testimonial = () => {
  const [groupedReviews, setGroupedReviews] = useState([]);

  useEffect(() => {
    setGroupedReviews(chunk(reviews, 3));
  }, []);

  return (
    <section className="bg-light py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">What Our Clients Say</h2>
          <p className="text-muted">Real feedback from happy customers</p>
        </div>

        <Carousel
          indicators={false}
          controls={false}
          interval={3000}
          pause="hover"
        >
          {groupedReviews.map((group, idx) => (
            <Carousel.Item key={idx}>
              <Row>
                {group.map((review) => (
                  <Col
                    key={review.id}
                    md={4}
                    className="mb-4 d-flex align-items-stretch"
                  >
                    <Card className="border-0 shadow testimonial-card">
                      <Card.Body className="text-center">
                        <img
                          src={review.photo}
                          alt={review.name}
                          className="rounded-circle mb-3"
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                        />
                        <h5 className="fw-bold">{review.name}</h5>
                        <div className="mb-2">{renderStars(review.rating)}</div>
                        <p className="text-secondary">{review.review}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonial;
