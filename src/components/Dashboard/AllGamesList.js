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
        // return data && data.map(game =>
            //     <Col xs={12} className="mb-3" key={game.id}>
            //     <Card className="shadow border-0 col-sm-3">
            //         <CardHeader><h4>{game.title}</h4></CardHeader>
            //         <Card.Body><b>Genre:</b> {game.genre}</Card.Body>
            //         <Button onClick={() => navigate(`/dashboard/game/${game.id}`)} color="primary">Detail</Button>
            //     </Card>
            // </Col>


            // <div className="card mb-3" style={{maxWidth: 540}}>
            //     <div className="row g-0">
            //         <div className="col-md-4">
            //             <img src={game.imageURL} className="img-fluid rounded-start" alt="IMAGE"/>
            //         </div>
            //         <div className="col-md-8">
            //             <div className="card-body">
            //                 <h5 className="card-title">{game.title}</h5>
            //                 <p className="card-text"><small className="text-muted">{game.genre}</small></p>
            //                 <p className="card-text">{game.wikisnip.length > 120 ? game.wikisnip.substring(0,120) + "..." : game.wikisnip }</p>
            //
            //             </div>
            //         </div>
            //     </div>
            // </div>


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