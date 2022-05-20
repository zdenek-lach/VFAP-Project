import React, {useState} from 'react';
import {useLoginQuery} from "../hooks/mutations/useLoginQuery";
import {useNavigate} from "react-router";
import {Form, Spinner, Button} from "react-bootstrap";

const Login = () => {
    const {isLoading, mutate} = useLoginQuery();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");


    const handleSubmit = () => {
        mutate({email, password: pass}, {
            onSuccess: (response) => {
                localStorage.setItem("token", response.access_token);
                navigate("/dashboard");
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="your@email.com" value={email}
                              onChange={e => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={pass} onChange={e => setPass(e.target.value)}/>
            </Form.Group>
            {isLoading ? <Spinner animation="border"/> :
                <Button type="submit" onClick={handleSubmit}>Login</Button>}
        </Form>
    );
};

export default Login;
