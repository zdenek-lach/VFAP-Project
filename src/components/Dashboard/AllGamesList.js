import {Button, Card, Col, Container, Row, Spinner} from "react-bootstrap";
import {useGamesQuery} from "../../hooks/queries/useGamesQuery";
import {useNavigate} from "react-router";
import React from 'react';
import '../styling/GameListStyle.css'

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
            return <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {data && data.map(game => (
                    <Col>
                        <Card className="shadow">
                            <Card.Img variant="top" src={game.imageURL} id="game-img"/>
                            <Card.Body>
                                <Card.Title><h5>{game.title}</h5></Card.Title>
                                <Card.Text>
                                    {game.wikisnip.length > 180 ? game.wikisnip.substring(0,180) + "..." : game.wikisnip }
                                </Card.Text>
                                <Button onClick={() => navigate(`/dashboard/game/${game.id}`)} variant="dark" className="container-fluid">Detail</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
    }

    return <Container>
        <Row>
            {renderGamesWithCornerCases()}
        </Row>
    </Container>
}

export default AllGamesList;