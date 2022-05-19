import {Navigate, useParams} from "react-router";
import {useGameDetailQuery} from "../hooks/useGameDetailQuery";
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
            <h1>Game: <b>{data.name}</b></h1>
            <h2>{data.date}</h2>
        </Container>
    }

    return <>
        <CustomNavbar/>
        {renderGameWithCornerCases()}
    </>
}

export default GameDetail;