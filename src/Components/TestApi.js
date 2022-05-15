import React, {useEffect, useState} from 'react';
import axios from 'axios'

function TestApi() {
    const url = `http://localhost:8080/games/list`;

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url)
            console.log(result.data)
        }
        fetchData();
    }, [url])

}
    export default TestApi;
