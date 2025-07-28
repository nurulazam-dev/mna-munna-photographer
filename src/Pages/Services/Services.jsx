import { CardGroup } from "react-bootstrap";
import useServicesData from "../../hooks/useServicesData";
import Service from "./Service";

const Services = () => {
  const [servicesData] = useServicesData();

  return (
    <div className="container my-4">
      <h2 className="text-center text-primary my-3">Our Service Packages</h2>
      <CardGroup className="row row-cols-1 row-cols-md-3 g-4">
        {servicesData?.map((service) => (
          <Service key={service?.id} service={service}></Service>
        ))}
      </CardGroup>
    </div>
  );
};

export default Services;
