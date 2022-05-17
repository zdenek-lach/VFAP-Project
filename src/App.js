import './App.css';
import axios from "axios";
import Header from "./BreakingBadTutorial/ui/Header";
import {useEffect, useState} from "react";
import Reservation from "./components/Reservation";

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

            <div>
                <Header/>
                <Reservation isLoading={isLoading} items={items}/>
            </div>



        </div>
    );
}

export default App;
