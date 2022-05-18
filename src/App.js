import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import Reservation from "./components/Reservation";
import VFAPHeader from "./components/VFAPHeader";

function App() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://6284166e3060bbd347344ebb.mockapi.io/reservation`);
            // console.log(result.data);
            setItems(result.data);
            setIsLoading(false);
        }
        fetchData();
    }, [query])
    return (
        <div className="App">
            {/*<BBApp/>*/}

            {/*<LoginPage/>*/}

            <VFAPHeader/>


            <Reservation isLoading={isLoading} reservations={items}/>


        </div>
    );
}

export default App;
