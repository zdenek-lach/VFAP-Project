import React, {useState} from 'react';
import {useLoginQuery} from "../../hooks/mutations/useLoginQuery";
import {useNavigate} from "react-router";
import '../styling/GlobalStyle.css';

import {Button, Container, Form, Spinner} from "react-bootstrap";

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
        <section className="vh-100 gradient-custom">
            <Container className="py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{borderRadius: 20}}>
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>

                                    <Form>
                                        <Form.Group className="form-outline form-white mb-4">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="text" placeholder="Username" value={email}
                                                          onChange={e => setEmail(e.target.value)} className="form-control form-control-lg"/>
                                        </Form.Group>
                                        <Form.Group className="form-outline form-white mb-4" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Your password" value={pass}
                                                          onChange={e => setPass(e.target.value)} className="form-control form-control-lg"/>
                                        </Form.Group>
                                        {isLoading ? <Spinner animation="border"/> :
                                            <Button type="submit" onClick={handleSubmit} className="btn btn-outline-light btn-lg px-5">Login</Button>}
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
        ;
};

export default Login;
