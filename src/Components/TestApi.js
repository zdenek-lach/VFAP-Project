import React, {useEffect, useState} from 'react';
import axios from 'axios'

function TestApi() {
    const url = 'http://localhost:8080/games/list';
    const [product, setProduct] = useState(null);

    let content = null;
    useEffect(() => {
        axios.get(url).then(response => {
            setProduct(response.data)
        })
    }, [url])

    if (product) {
        content =
            <div>
                <h1>name: {product.list}</h1>
            </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default TestApi;
