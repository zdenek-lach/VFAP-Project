import React, {useState, useEffect} from 'react';
import axios from "axios";
import CharacterGrid from "./characters/CharacterGrid";
import Header from "./ui/Header";
import Search from "./ui/Search";

function BBApp (){
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('');

    useEffect(()=> {
    const fetchItems = async () => {
        const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
        // console.log(result.data);
        setItems(result.data);
        setIsLoading(false);
    }
    fetchItems();
    },[query])


    return (
        <div>
            <Header/>
            <Search getQuery={(q) => setQuery(q)}/>
            <CharacterGrid isLoading={isLoading} items={items}/>
        </div>
    );

}

export default BBApp;
