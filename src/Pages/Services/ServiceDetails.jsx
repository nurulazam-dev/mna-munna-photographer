import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Button, Container, Row, Col, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhotoFilm,
  faClock,
  faPeopleRoof,
  faShareNodes,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import useServicesData from "../../hooks/useServicesData";

const ServiceDetails = () => {
  const location = useLocation();
  const selectedService = location.state?.selectedService;
  const [servicesData] = useServicesData();
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const found = servicesData?.find((s) => s?.id === id);
    if (found) {
      setService(found);
    } else {
      toast.error("Service not found");
      navigate("/services");
    }
    setLoading(false);
  }, [servicesData, id, navigate]);

  const handleSelectPackage = () => {
    toast.success("Package selected!");
    navigate("/booking");
  };

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Button variant="link" onClick={() => navigate(-1)} className="mb-4">
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </Button>

      <h2>Booking for: {selectedService?.name || "Unknown Service"}</h2>

      <Row className="align-items-center">
        <Col md={6}>
          <img
            src={service?.img}
            alt={service?.name}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </Col>

        <Col md={6}>
          <h2 className="fw-bold">{service?.name}</h2>
          <h4 className="text-success mb-3">${service?.price}</h4>
          <p className="text-muted">{service?.description}</p>

          <div className="mb-2">
            <FontAwesomeIcon icon={faPhotoFilm} className="me-2 text-dark" />
            {service?.approximately}
          </div>

          <div className="mb-2">
            <FontAwesomeIcon icon={faClock} className="me-2 text-dark" />
            {service?.duration}
          </div>

          <div className="mb-2">
            <FontAwesomeIcon icon={faPeopleRoof} className="me-2 text-dark" />
            {service?.consultation}
          </div>

          <div className="mb-4">
            <FontAwesomeIcon icon={faShareNodes} className="me-2 text-dark" />
            {service?.fileProvided}
          </div>

          <Button
            variant="success"
            className="fw-semibold"
            onClick={handleSelectPackage}
          >
            Select This Package
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceDetails;
