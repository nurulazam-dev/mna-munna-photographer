import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  Image,
} from "react-bootstrap";
import Swal from "sweetalert2";

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedService = location.state?.selectedService;
  console.log(selectedService);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    serviceName: selectedService?.name || "",
    price: selectedService?.price || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.date ||
      !formData.time
    ) {
      Swal.fire({
        title: "Please fill all the fields.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
      return;
    }

    console.log("Booking Data:", formData);
    Swal.fire({
      title: "Booking submitted successfully!",
      icon: "success",
      confirmButtonColor: "#28a745",
    });
    navigate("/");
  };

  return (
    <Container className="my-4">
      <Row className="justify-content-center align-items-center">
        <Col lg={10}>
          <Card className="p-4 shadow-lg border-0 rounded-4">
            <Row className="g-0">
              <Col md={6} className="d-none d-md-block">
                <Image
                  src={selectedService?.img}
                  alt="Booking illustration"
                  fluid
                  className="rounded-start-4 h-100 object-fit-cover"
                />
              </Col>

              <Col md={6}>
                <div className="p-4">
                  <h3 className="fw-bold mb-4 text-center text-success">
                    Book Your Package
                  </h3>

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="Enter your full name"
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Enter your email"
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        placeholder="Enter your phone number"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Package</Form.Label>
                          <Form.Control
                            type="text"
                            name="serviceName"
                            value={formData?.serviceName}
                            disabled
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Price</Form.Label>
                          <Form.Control
                            type="text"
                            name="price"
                            value={formData?.price}
                            disabled
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Booking Date</Form.Label>
                          <Form.Control
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>

                      <Col sm={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Time</Form.Label>
                          <Form.Control
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <div className="d-grid">
                      <Button
                        variant="success"
                        type="submit"
                        className="fw-semibold"
                      >
                        Confirm Booking
                      </Button>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Booking;
