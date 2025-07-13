import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  faClock,
  faPeopleRoof,
  faPhotoFilm,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const Service = ({ service }) => {
  const {
    name,
    img,
    price,
    approximately,
    duration,
    consultation,
    fileProvided,
  } = service;

  const navigate = useNavigate();

  const handleSelectPackage = () => {
    toast.success(`You selected: ${name}`);
    navigate(`/services/${service?.id}`, {
      state: { selectedService: service },
    });
  };

  return (
    <div>
      <Card className="m-2 shadow-sm border-0 hover-shadow transition">
        <Card.Img
          variant="top"
          src={img}
          style={{ height: "220px", objectFit: "cover" }}
        />
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0 fw-bold">{name}</h4>
            <span className="fw-bold fs-5 border px-2 rounded bg-primary text-white">
              ${price}
            </span>
          </div>

          <div className="mb-2 text-secondary">
            <FontAwesomeIcon icon={faPhotoFilm} className="me-2 text-dark" />
            <span>{approximately}</span>
          </div>

          <div className="mb-2 text-secondary">
            <FontAwesomeIcon icon={faClock} className="me-2 text-dark" />
            <span>{duration}</span>
          </div>

          <div className="mb-2 text-secondary">
            <FontAwesomeIcon icon={faPeopleRoof} className="me-2 text-dark" />
            <span>{consultation}</span>
          </div>

          <div className="mb-3 text-secondary">
            <FontAwesomeIcon icon={faShareNodes} className="me-2 text-dark" />
            <span>{fileProvided}</span>
          </div>

          <Button
            variant="success"
            // to={`/services/${service?.id}`}
            className="w-100 fw-semibold"
            onClick={handleSelectPackage}
          >
            View Details
          </Button>
          {/* <Link
            to={`/services/${service?.id}`}
            className="btn btn-primary btn-sm rounded-pill px-3 fw-semibold"
          >
            View Details <i className="bi bi-arrow-right ms-1"></i>
          </Link> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
