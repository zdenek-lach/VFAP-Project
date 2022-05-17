import './App.css';
import LoginForm from './components/LoginForm';
import React, {useState} from 'react';
import AppContent from './components/AppContent'
function App() {
    const adminUser = {
        username: "admin",
        password: "admin"
    }
    const [user, setUser] = useState({username: ""});
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
        <div className="App">
            {(user.username !== "") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.username}</span></h2>
                    <button onClick={Logout}>Logout</button>
                    <AppContent/>

                </div>
            ) : (<LoginForm Login={Login} error={error}/>)
            }

        </div>
    );
}

export default App;
