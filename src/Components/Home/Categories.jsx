import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Categories() {
    return (

        <Navbar bg="light" expand="lg" >
            <Container fluid style={{ display: "flex", gap: "20px", fontWeight: "bold", marginLeft: "150px" }} >
                <Navbar.Brand href="#">HOME</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', display: "flex", gap: "20px" }}
                        navbarScroll
                    >
                        <Nav.Link href="#">JOBS</Nav.Link>

                        <NavDropdown title="JOBS SEEKING ASSISTANCE" id="navbarScrollingDropdown">
                            <Container style={{ display: "block" }}>
                                <NavDropdown.Item href="#">Profile Booster</NavDropdown.Item>
                                <NavDropdown.Item href="#">Application Highlighter</NavDropdown.Item>
                                <NavDropdown.Item href="#">Resume Writing</NavDropdown.Item>
                                <NavDropdown.Item href="#">View All</NavDropdown.Item>
                            </Container>

                        </NavDropdown>
                        <NavDropdown title="COURSES" id="navbarScrollingDropdown" >
                            <Container style={{}} >
                                <NavDropdown.Item href="#">Sales And Marketing</NavDropdown.Item>
                                <NavDropdown.Item href="#">Information And Technology</NavDropdown.Item>
                                <NavDropdown.Item href="#">Operation Management</NavDropdown.Item>
                                <NavDropdown.Item href="#">Human Resources</NavDropdown.Item>
                                <NavDropdown.Item href="#">View All</NavDropdown.Item>
                            </Container>

                        </NavDropdown>
                        <Nav.Link href="#">CAREER GUIDANCE</Nav.Link>
                        <Nav.Link href="#">BLOG</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Categories;