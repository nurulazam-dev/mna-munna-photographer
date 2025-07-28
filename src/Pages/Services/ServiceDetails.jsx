import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhotoFilm,
  faClock,
  faPeopleRoof,
  faShareNodes,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import useServicesData from "../../hooks/useServicesData";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [servicesData] = useServicesData();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (servicesData?.length > 0) {
      const found = servicesData.find((s) => s.id === id);
      if (found) {
        setService(found);
      } else {
        Swal.fire({
          title: "Service Not Found",
          icon: "error",
          draggable: true,
        });
        navigate("/services");
      }
      setLoading(false);
    }
  }, [servicesData, id, navigate]);

  const handleSelectPackage = () => {
    Swal.fire({
      title: "Package selected!",
      icon: "success",
      draggable: true,
    });
    navigate("/booking", { state: { selectedService: service } });
  };

  if (loading || !service) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  return (
    <Container className="my-3">
      <Button variant="link" onClick={() => navigate(-1)} className="mb-4">
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </Button>

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
          <p className="text-muted">
            {service?.description || "No description available."}
          </p>

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
            Package Booking
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceDetails;
