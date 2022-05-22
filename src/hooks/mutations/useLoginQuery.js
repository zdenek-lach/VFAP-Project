import {useMutation} from "react-query";
import axios from "axios";

export const useLoginQuery = () =>
    useMutation("auth", (credentials) =>
        axios.post("http://localhost:8000/auth/login", credentials)
            .then(response => response.data)
    )