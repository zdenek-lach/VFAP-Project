import {useParams} from "react-router";
import {useGameDetailQuery} from "../../hooks/queries/useGameDetailQuery";
import {Card, Container, Spinner} from "react-bootstrap";
import '../styling/GameListStyle.css'
import React from "react";

const GameDetail = () => {

    const {gameId} = useParams();

    const {isLoading, data, isError, error} = useGameDetailQuery(gameId);

    if (isLoading)
        return <Spinner animation="border"/>;

    if (isError || !data) {
        console.error(error);
        return <h1>Error appeared while fetching game with id {gameId}</h1>
    }

    return <Container className="mt-5">
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-8 col-md-8 col-lg-8 col-xl-8">
                <div className="card bg-light text-black" style={{borderRadius: 20}}>
                    <div className="card-body p-5 text-start">
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    <h1><b>{data.title}</b></h1>
                                    <div className="m-1 game-descriptor">
                                        Genre: <b>{data.genre}</b>
                                    </div>
                                    <div className="m-1 game-descriptor">
                                        Publisher: <b>{data.developer}</b>
                                    </div>
                                    <div className="m-1 game-descriptor">
                                        Released: <b>{data.released}</b>
                                    </div>
                                    <div className="m-1 game-descriptor">
                                        Wiki snippet:
                                    </div>
                                    <p className="m-1 game-descriptor game-text">
                                        {data.wikisnip}
                                    </p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={data.imageURL} className="detail-img"/>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </Container>
    // <Container>
    //     <h1>Title: <b>{data.title}</b></h1>
    //     <h2>Genre: {data.genre}</h2>
    //     <h2>Publisher: {data.developer}</h2>
    //     <h2>Released: {data.released}</h2>
    //     <h2>Wiki snippet: {data.wikisnip}</h2>
    //     <h2>Image URL: {data.imageURL}</h2>
    //     {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
    //     <span>Image: <img src={data.imageURL} alt="Awesome image here!" style={{maxWidth: 300}} /></span>
    // </Container>
}

export default GameDetail;