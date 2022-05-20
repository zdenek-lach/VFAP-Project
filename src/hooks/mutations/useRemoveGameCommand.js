import {useMutation} from "react-query";
import axios from "axios";

export const useRemoveGameCommand = () =>
    useMutation("removeGame", (id) =>
        axios.delete(`http://localhost:8000/games/${id}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => response.data)
    )