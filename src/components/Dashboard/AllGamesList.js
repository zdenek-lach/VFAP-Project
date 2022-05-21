import {Button, Card, Col, Container, Row, Spinner} from "react-bootstrap";
import RandomSnackBar from "../RandomSnackBar";
import {useGamesQuery} from "../../hooks/queries/useGamesQuery";
import {useNavigate} from "react-router";

const AllGamesList = () => {

    const {isLoading, data, isError, error} = useGamesQuery();

    const navigate = useNavigate();

    const renderGamesWithCornerCases = () => {
        if (isLoading)
            return <Spinner animation="border"/>;
        if (isError || !data) {
            console.error(error);
            return <h1>Error appeared while fetching games</h1>
        }
        return data && data.map(game => <Col xs={12} className="mb-3" key={game.id}>
            <Card className="shadow border-0 col-sm-3">
                <Card.Body>{game.title}{"  "}{game.date}</Card.Body>
                <Button onClick={() => navigate(`/game/${game.id}`)} color="primary">Detail</Button>
            </Card>
        </Col>)
    }

    return <Container>
        <h1>Games</h1>
        <Row>
            {renderGamesWithCornerCases()}
        </Row>
        <RandomSnackBar/>
    </Container>
}

export default AllGamesList;