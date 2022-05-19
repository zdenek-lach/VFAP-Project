import {Container, Nav, Navbar} from "react-bootstrap";
import {Navigate} from "react-router";

const CustomNavbar = () => {

    if (!localStorage.getItem("token"))
        return <Navigate to="/login"/>

    return (
        <Container fluid className="m-0 p-0">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/dashboard">SuperApp</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Container>)
}

export default CustomNavbar;