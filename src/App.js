import {Navigate, Route, Routes} from "react-router";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import GameDetail from "./components/GameDetail";
import GameTable from "./components/GameTable";

function App() {

    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/table" element={<GameTable/>}/>
            <Route path="/game/:gameId" element={<GameDetail/>}/>
            <Route path="*" element={<Navigate to="/login"/>}/>
        </Routes>
    );
}

export default App;
