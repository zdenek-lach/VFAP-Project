import {useMutation} from "react-query";
import axios from "axios";

export const useEditGameCommand = (id) =>
    useMutation("editGame", (gameUpdate) =>
            axios.put(`http://localhost:8000/games/${id}`, gameUpdate, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }).then(response => response.data)
        , {
            enabled: !!id
        })