import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  faClock,
  faPeopleRoof,
  faPhotoFilm,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";

const Service = ({ service }) => {
  const {
    id,
    name,
    img,
    price,
    approximately,
    duration,
    consultation,
    fileProvided,
  } = service;

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

          <Link
            to={`/services/${id}`}
            className="btn btn-success w-100 fw-semibold"
          >
            View Details
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
