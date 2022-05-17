import React, {useEffect, useState} from 'react';
import axios from 'axios'

function ApiDataProvider() {
    const url = `http://localhost:8080/games/list`;

    useEffect(() => {

        const fetchData = async () => {
            const result = await axios(url)
            console.log(result.data)
            return <div className="form-inner">Data: {result.data}</div>
        }
        fetchData();
    }, [url])


}
    export default ApiDataProvider;
