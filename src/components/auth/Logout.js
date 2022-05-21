import React from 'react';

const Logout = () => {
    const removeToken = () => {
        if (localStorage.getItem("token"))
        {
            localStorage.removeItem("token")
            console.log("Removing token, therefore logging out the user.")
        }else console.log("No user to log out")
    }
    return (
        <div>
            <span onClick={removeToken} className="btn btn-dark">Logout</span>
        </div>
    );
};

export default Logout;