import Contact from "../components/Home/Contact";
import Team from "../components/Home/Team";
import Testimonial from "../components/Home/Testimonial";
import Banner from "../components/Home/Banner";
import Blog from "./Blog";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <Testimonial />
      <Team />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
