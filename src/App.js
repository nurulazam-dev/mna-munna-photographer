import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import Services from "./Pages/Services/ServicesData/Services";
import ServiceDetails from "./Pages/Services/ServiceDetails";
import Booking from "./Pages/Booking";
import Contact from "./components/Home/Contact";
import ResetPassword from "./Pages/Login/ResetPassword";
// import RequireAuth from "./Pages/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/booking" element={<Booking />} />
        {/*  <Route
          path="/booking"
          element={
            <RequireAuth>
              <Booking />
            </RequireAuth>
          }
        /> */}

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
