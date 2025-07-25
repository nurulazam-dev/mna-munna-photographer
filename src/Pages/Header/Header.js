import brandLogo from "../../assets/images/mna-munna-photographer.png";
import { Container, Nav, Navbar } from "react-bootstrap";
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
            <Nav.Link as={Link} to="blog" className="text-white fs-5">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="about" className="text-white fs-5">
              About
            </Nav.Link>
            {user ? (
              <button
                className="btn btn-link text-white text-decoration-none"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            ) : (
              (
                <Nav.Link as={Link} to="register" className="text-white fs-5">
                  Register
                </Nav.Link>
              ) || (
                <Nav.Link as={Link} to="login" className="text-white fs-5">
                  Login
                </Nav.Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
