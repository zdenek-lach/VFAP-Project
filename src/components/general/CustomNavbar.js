import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Navigate} from "react-router";
import '../styling/NavBarStyle.css'

const CustomNavbar = () => {

    if (!localStorage.getItem("token"))
        return <Navigate to="/login"/>

    const removeToken = () => {
        if (localStorage.getItem("token"))
        {
            localStorage.removeItem("token")
            console.log("Removing token, therefore logging out the user.")
        }else console.log("No user to log out")
    }

    return (
        <Container fluid className="m-0 p-0">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/dashboard">Sid's fav PS4 games</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/dashboard/table" disabled={true}>Game Table</Nav.Link>
                        <Nav.Link href="/dashboard/tablemui">GameTable++</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end">
                        <Button as={Nav.Link} className="justify-content-end btn-gradient" href="/login" onClick={removeToken}>Logout</Button>
                    </Nav>
                </Container>
            </Navbar>

        </Container>)
}

export default CustomNavbar;