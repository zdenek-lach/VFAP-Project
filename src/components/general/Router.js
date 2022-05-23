import {Navigate, Route, Routes} from "react-router";
import Login from "../auth/Login";
import Dashboard from "../dashboard/Dashboard";
import GameTable from "../game/GameTable";
import GameDetail from "../game/GameDetail";
import PrivateRoute from "../auth/PrivateRoute";
import EditGameContainer from "../forms/EditGameContainer";

const SecuredRouter = () => <PrivateRoute>
    <Routes>
        <Route path="table" element={<GameTable/>}/>
        <Route path="game/:gameId" element={<GameDetail/>}/>
        <Route path="game/:gameId/edit" element={<EditGameContainer/>}/>
        <Route path="/*" element={<Dashboard/>}/>
    </Routes>
</PrivateRoute>;

const Router = () => {
    return <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard/*" element={<SecuredRouter/>}/>
        <Route path="*" element={<Navigate to="/login"/>}/>
    </Routes>
}

export default Router;