import { Card, Container, Row, Col, Button } from "react-bootstrap";

const blogPosts = [
  {
    id: 1,
    title: "Mastering Portrait Photography",
    excerpt:
      "Learn the key techniques to capture stunning portrait photos with depth, light balance, and perfect composition.",
    image:
      "https://d2bwo9zemjwxh5.cloudfront.net/ep-logo/pbblog1125335/EP70_1200x628.jpg?s=039d8d7359479fff12bb039f7b622694&e=jpg",
    date: "July 10, 2025",
  },
  {
    id: 2,
    title: "Top 10 Wedding Photography Tips",
    excerpt:
      "Discover the most essential tips every wedding photographer should know to capture unforgettable moments.",
    image:
      "https://whimsicalwonderlandweddings.com/wp-content/uploads/2022/03/Wedding-Photography-Tips-Couples-Liam-Collard-Photography-10.jpg",
    date: "June 25, 2025",
  },
  {
    id: 3,
    title: "Creative Product Photography at Home",
    excerpt:
      "Turn your home into a photo studio and learn how to shoot professional product photos with basic tools.",
    image:
      "https://fdsmasterclass.com/wp-content/uploads/2024/05/Understand-Lighting_.webp",
    date: "June 5, 2025",
  },
  {
    id: 4,
    title: "How to Build a Photography Portfolio",
    excerpt:
      "Step-by-step guide to building a portfolio that attracts clients and showcases your style effectively.",
    image:
      "https://images.squarespace-cdn.com/content/v1/569aeb57fd5d084e149e5469/1617201081986-236D3IL2VHSDZHQLBZYE/Build-a-portfolio-thumb.jpg?format=1500w",
    date: "May 18, 2025",
  },
];

const Blog = () => {
  return (
    <Container className="py-4">
      <h2 className="text-center fw-bold mb-3 text-primary">
        Photography Blog
      </h2>
      <Row>
        {blogPosts.map((post) => (
          <Col md={6} lg={4} key={post.id} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={post.image}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Subtitle className="mb-2 text-muted small">
                  {post.date}
                </Card.Subtitle>
                <Card.Title className="fw-bold">{post.title}</Card.Title>
                <Card.Text className="text-secondary">{post.excerpt}</Card.Text>
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
