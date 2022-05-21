import {Nav, Container} from "react-bootstrap";
import {Route, Routes} from "react-router";
import AllGamesList from "./AllGamesList";
import NewGameForm from "../Forms/NewGameForm";
import GameDetail from "../GameDetail";

const Dashboard = () => <>
    <Container className="my-4">
        <Nav variant="tabs">
            <Nav.Item>
                <Nav.Link href="/dashboard">All Games</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/dashboard/new">Create New</Nav.Link>
            </Nav.Item>
        </Nav>
    </Container>
    <Routes>
        <Route index element={<AllGamesList/>}/>
        <Route path="new" element={<NewGameForm/>}/>
    </Routes>
</>;

export default Dashboard;