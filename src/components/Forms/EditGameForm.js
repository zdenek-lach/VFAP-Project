import React from 'react';
import {Button, Form} from "react-bootstrap";
import 'react-tabs/style/react-tabs.css';
import {useParams} from "react-router";
import {useGameDetailQuery} from "../../hooks/queries/useGameDetailQuery";

const EditGameForm = () => {
    const {gameId} = useParams();
    const {specificData} = useGameDetailQuery(gameId);
    return (
        <form className="container">
            <Form.Group className="mb-3">
                <Form.Label>Game ID</Form.Label>
                <Form.Control type="number" value={specificData}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Game Title</Form.Label>
                <Form.Control type="text" placeholder="Epic game title"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Genre</Form.Label>
                <Form.Control type="text" placeholder="The actual genre"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Developer</Form.Label>
                <Form.Control type="text" placeholder="Honorable notice of developer"/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Released</Form.Label>
                <div className="input-group mb-2">
                    <input type="date"
                           className="form-control form-control-lg"
                           placeholder="DD.MM.YYYY"
                           required/>
                </div>

            </Form.Group>

            <Button variant="primary" type="submit">
                Edit
            </Button>
        </form>
    )
};


export default EditGameForm;
