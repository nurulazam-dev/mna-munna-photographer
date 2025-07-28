import brandLogo from "../../assets/images/mna-munna-photographer.png";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand as={Link} to="/">
              <img
                src={brandLogo}
                alt="Mna Munna Photographer"
                className="w-25"
              />
            </Navbar.Brand>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/" className="text-white fs-5">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="services" className="text-white fs-5">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="contact" className="text-white fs-5">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="about" className="text-white fs-5">
              About
            </Nav.Link>
            {user ? (
              <>
                <span
                  className="text-info fw-semibold me-2 mt-2"
                  style={{ fontSize: "1rem" }}
                >
                  {user?.email}
                </span>
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={handleSignOut}
                  className="fw-semibold px-3"
                >
                  Sign out
                </Button>
              </>
            ) : (
              <Nav.Link as={Link} to="register" className="text-white fs-5">
                Register
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
