import {useQuery} from "react-query";
import axios from "axios";

export const getGamesQueryKey = () => "allGames";

export const useGamesQuery = () =>
    useQuery(getGamesQueryKey(), () =>
        axios.get("http://localhost:8000/games", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => response.data)
    )