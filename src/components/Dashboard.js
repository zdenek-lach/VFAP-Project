import CustomNavbar from "./CustomNavbar";
import {Button, Card, Col, Container, Row, Spinner} from "react-bootstrap";
import {useGamesQuery} from "../hooks/useGamesQuery";
import {Navigate, useNavigate} from "react-router";

const Dashboard = () => {

    const {isLoading, data, isError, error} = useGamesQuery();

    const navigate = useNavigate();

    if (!localStorage.getItem("token"))
        return <Navigate to="/login"/>

    const renderGamesWithCornerCases = () => {
        if (isLoading)
            return <Spinner animation="border"/>;
        if (isError || !data) {
            console.error(error);
            return <h1>Error appeared while fetching games</h1>
        }
        return data && data.map(game => <Col xs={12} className="mb-3">
            <Card className="shadow border-0">
                <Card.Body>{game.name}{"  "}{game.date}</Card.Body>
                <Button onClick={() => navigate(`/game/${game.id}`)} color="primary">Detail</Button>
            </Card>
        </Col>)
    }

    return <>
        <CustomNavbar/>
        <Container>
            <h1>Games</h1>
            <Row>
                {renderGamesWithCornerCases()}
            </Row>
        </Container>
    </>
}

export default Dashboard;