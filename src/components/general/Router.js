import {Navigate, Route, Routes} from "react-router";
import Login from "../auth/Login";
import Dashboard from "../Dashboard/Dashboard";
import GameTable from "../Game/GameTable";
import GameDetail from "../Game/GameDetail";
import PrivateRoute from "../auth/PrivateRoute";
import EditGameContainer from "../Forms/EditGameContainer";

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