import {Navigate, useParams} from "react-router";
import {useGameDetailQuery} from "../hooks/queries/useGameDetailQuery";
import { Container, Spinner} from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";

const GameDetail = () => {

    const {gameId} = useParams();

    const {isLoading, data, isError, error} = useGameDetailQuery(gameId);

    if (!localStorage.getItem("token"))
        return <Navigate to="/login"/>


    const renderGameWithCornerCases = () => {
        if (isLoading)
            return <Spinner animation="border"/>;

        if (isError || !data) {
            console.error(error);
            return <h1>Error appeared while fetching game with id {gameId}</h1>
        }

        return <Container>
            <h1>Title: <b>{data.title}</b></h1>
            <h2>Genre: {data.genre}</h2>
            <h2>Publisher: {data.developer}</h2>
            <h2>Released: {data.released}</h2>
        </Container>
    }

    return <>
        <CustomNavbar/>
        {renderGameWithCornerCases()}
    </>
}

export default GameDetail;