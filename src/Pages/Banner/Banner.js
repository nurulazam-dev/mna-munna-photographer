import { Carousel } from "react-bootstrap";
import banner1 from "../../assets/images/Banner/mna-munna-photographer-banner-1.png";
import banner2 from "../../assets/images/Banner/mna-munna-photographer-banner-2.png";
import banner3 from "../../assets/images/Banner/mna-munna-photographer-banner-3.png";
import banner4 from "../../assets/images/Banner/mna-munna-photographer-banner-4.png";

const Banner = () => {
  const carouselData = [
    {
      image: banner1,
    },
    {
      image: banner2,
    },
    {
      image: banner3,
    },
    {
      image: banner4,
    },
  ];

  return (
    <section>
      <Carousel variant="white">
        {carouselData?.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={item?.image}
              alt={`Slide ${index + 1}`}
              style={{ height: "300px" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;
