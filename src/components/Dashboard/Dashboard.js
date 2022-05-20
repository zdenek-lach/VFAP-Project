import CustomNavbar from "../CustomNavbar";
import {Nav} from "react-bootstrap";
import {Navigate, Route, Routes} from "react-router";
import AllGamesList from "./AllGamesList";
import NewGameForm from "../Forms/NewGameForm";

const Dashboard = () => {

    if (!localStorage.getItem("token"))
        return <Navigate to="/login"/>

    return <>
        <CustomNavbar/>
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/dashboard">All Games</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/dashboard/new">Create New</Nav.Link>
            </Nav.Item>
        </Nav>
        <Routes>
            <Route path="new" element={<NewGameForm/>}/>
            <Route index element={<AllGamesList/>}/>
        </Routes>
    </>
}

export default Dashboard;