import React, {useState} from 'react';
import BBApp from "../BreakingBadTutorial/BBApp";
import LoginForm from "./LoginForm";


const LoginPage = () => {
    const adminUser = {
        username: "admin",
        password: "admin"
    }
    const [user, setUser] = useState({username: "admin"}); // set empty to get login page back
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);
        if (details.username === adminUser.username && details.password === adminUser.password) {
            console.log("Logged in")
            setUser(
                {
                    username: details.username
                }
            )
        } else {
            console.log("bad credentials")
            setError("Details do not match!")
        }
    }

    const Logout = () => {
        console.log("Logout");
        setUser({username: "", email: ""})
    }
    return (
        <div>
            {(user.username !== "") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.username}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (<LoginForm Login={Login} error={error}/>)
            }
        </div>
    );
};

export default LoginPage;
