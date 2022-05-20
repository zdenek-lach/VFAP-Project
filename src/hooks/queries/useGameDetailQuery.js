import {useQuery} from "react-query";
import axios from "axios";

export const getGameDetailQueryKey = (gameId) => gameId ? ["allGames", gameId] : "allGames";

export const useGameDetailQuery = (gameId) =>
    useQuery(getGameDetailQueryKey(gameId), () =>
        axios.get(`http://localhost:8000/games/${gameId}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => response.data)
    )