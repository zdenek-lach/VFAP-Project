import React from 'react';
import {Spinner} from "react-bootstrap";
import {useQueryClient} from "react-query";
import {getGamesQueryKey} from "../../hooks/queries/useGamesQuery";
import {useNavigate, useParams} from "react-router";
import {useEditGameCommand} from "../../hooks/mutations/useEditGameCommand";
import {useGameDetailQuery} from "../../hooks/queries/useGameDetailQuery";
import EditGameForm from "./EditGameForm";

const EditGameContainer = () => {
    const {gameId} = useParams();

    const {
        isLoading: isLoadingGame,
        data: game,
        isError: isErrorGame,
        error: errorGame
    } = useGameDetailQuery(gameId);

    const {isLoading, mutate} = useEditGameCommand(gameId);

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        mutate(values, {
            onSuccess: () => {
                queryClient.invalidateQueries(getGamesQueryKey());
                navigate("/dashboard/table")
                //fire toast of success creation
            },
            onError: () => {
                //fire toast of failed creation
            }
        })
    }

    if (isLoadingGame) return <Spinner animation="border"/>

    if (isErrorGame) {
        console.error(errorGame);
        return <h2>Error appeared</h2>
    }

    return <EditGameForm game={game} onSubmit={handleSubmit} isLoading={isLoading}/>
};


export default EditGameContainer;
