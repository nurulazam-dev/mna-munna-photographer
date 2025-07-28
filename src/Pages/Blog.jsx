import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { blogPosts } from "../assets/data/blogData";

const Blog = () => {
  return (
    <Container className="py-4">
      <h2 className="text-center fw-bold mb-3 text-primary">
        Photography Blog
      </h2>
      <Row>
        {blogPosts?.map((post) => (
          <Col md={6} lg={4} key={post?.id} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={post?.image}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Subtitle className="mb-2 text-muted small">
                  {post?.date}
                </Card.Subtitle>
                <Card.Title className="fw-bold">{post?.title}</Card.Title>
                <Card.Text className="text-secondary">
                  {post?.excerpt}
                </Card.Text>
                <div className="mt-auto">
                  <Button variant="outline-primary" size="sm">
                    Read More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
