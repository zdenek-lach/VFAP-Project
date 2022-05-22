import {Nav, Container} from "react-bootstrap";
import {Route, Routes} from "react-router";
import AllGamesList from "./AllGamesList";
import NewGameForm from "../Forms/NewGameForm";

const Dashboard = () => <div className="vh-100">
    <Container className="my-4 bg-dark">
        <Nav variant="tabs">
            <Nav.Item>
                <Nav.Link href="/dashboard" className="text-white">All Games</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/dashboard/new" className="text-white">Create New</Nav.Link>
            </Nav.Item>
        </Nav>
    </Container>
    <Routes>
        <Route index element={<AllGamesList/>}/>
        <Route path="new" element={<NewGameForm/>}/>
    </Routes>
</div>;

export default Dashboard;