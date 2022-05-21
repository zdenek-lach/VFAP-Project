import {Button, Card, Col, Container, Row, Spinner} from "react-bootstrap";
import {useGamesQuery} from "../../hooks/queries/useGamesQuery";
import {useNavigate} from "react-router";
import CardHeader from "react-bootstrap/CardHeader";
import React from 'react';

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
                <CardHeader><h4>{game.title}</h4></CardHeader>
                <Card.Body><b>Genre:</b> {game.genre}</Card.Body>
                <Button onClick={() => navigate(`/game/${game.id}`)} color="primary">Detail</Button>
            </Card>
        </Col>)
    }

    return <Container>
        <Row>
            {renderGamesWithCornerCases()}
        </Row>
    </Container>
}

export default AllGamesList;