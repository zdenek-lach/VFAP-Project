import {Container, Nav, Navbar} from "react-bootstrap";
import {Navigate} from "react-router";
import Logout from "./Logout";

const CustomNavbar = () => {

    if (!localStorage.getItem("token"))
        return <Navigate to="/login"/>

    return (
        <Container fluid className="m-0 p-0">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/dashboard">Sid's fav PS4 games</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/table">Game Table</Nav.Link>
                        <Nav.Link href="/new">New Game</Nav.Link>
                        <Nav.Link href="/login"><Logout/></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </Container>)
}

export default CustomNavbar;