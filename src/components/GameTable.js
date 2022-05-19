import React from 'react';
import {Button, Spinner, Table} from "react-bootstrap";
import {useGamesQuery} from "../hooks/useGamesQuery";
import CustomNavbar from "./CustomNavbar";
import {useGameDetailQuery} from "../hooks/useGameDetailQuery";
import {useParams} from "react-router";
import axios from "axios";

const GameTable = () => {

    const {isLoading, data, isError, error} = useGamesQuery();
    const {gameId} = useParams();
    const {specificData} = useGameDetailQuery(gameId);

    const deleteGame = (gameToDelete) => {
        axios.delete(`http://localhost:8000/games/${gameToDelete.id}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
    }

    const renderGameWithCornerCases = () => {
        if (isLoading)
            return <Spinner animation="border"/>;

        if (isError || !data) {
            console.error(error);
            return <h1>Error appeared while fetching games</h1>
        }
        return (
            <Table striped bordered hover size="sm" variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Developer</th>
                    <th>Released</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {data && data.map(game =>
                    <tr>
                        <td>{game.id}</td>
                        <td>{game.name}</td>
                        <td>{game.genre}</td>
                        <td>{game.developer}</td>
                        <td>{game.released}</td>
                        <td><Button className=" btn btn-warning">Edit</Button></td>
                        <td><Button className=" btn btn-danger" onClick={deleteGame}>Delete</Button></td>
                    </tr>
                )}
                </tbody>
            </Table>
        )
    }

    return (

        <div>
            <CustomNavbar/>
            {renderGameWithCornerCases()}

        </div>
    )
        ;
};

export default GameTable;
