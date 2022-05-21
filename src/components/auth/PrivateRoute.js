import React from "react";
import {Navigate} from "react-router";
import CustomNavbar from "../CustomNavbar";

const PrivateRoute = ({children}) => {

    if (!localStorage.getItem("token")) {
        console.log(localStorage.getItem("token"));
        return <Navigate to="/login"/>
    }

    return <>
        <CustomNavbar/>
        {children}
    </>
}

export default PrivateRoute;