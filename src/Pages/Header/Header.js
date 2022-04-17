import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../Firebase/Firebase.init"
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Navbar.Brand href="#home">Mna Munna Photographer</Navbar.Brand>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/" className='text-white'>Home</Nav.Link>
                        <Nav.Link as={Link} to="blogs" className='text-white'>Blogs</Nav.Link>
                        <Nav.Link as={Link} to="about" className='text-white'>About</Nav.Link>
                        {user ? <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign out</button>
                            : (<Nav.Link as={Link} to="register" className='text-white'>
                                Register
                            </Nav.Link>) || (<Nav.Link as={Link} to="login" className='text-white'>
                                Login
                            </Nav.Link>)
                            }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;