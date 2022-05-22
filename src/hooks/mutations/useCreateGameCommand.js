import {useMutation} from "react-query";
import axios from "axios";

export const useCreateGameCommand = () =>
    useMutation("newGame", (newGame) =>
        axios.post(`http://localhost:8000/games`, newGame, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(response => response.data)
    )