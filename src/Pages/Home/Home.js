import Team from "../../components/Home/Team";
import Testimonial from "../../components/Home/Testimonial";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Services from "../Services/ServicesData/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Testimonial />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
