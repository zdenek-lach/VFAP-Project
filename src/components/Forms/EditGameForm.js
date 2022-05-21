import React, {useState} from 'react';
import {Button, Form, Spinner} from "react-bootstrap";

const EditGameForm = ({game, onSubmit, isLoading}) => {
    const [title, setTitle] = useState(game.title || "");
    const [genre, setGenre] = useState(game.genre || "");
    const [developer, setDeveloper] = useState(game.developer || "");
    const [released, setReleased] = useState(game.released || "");

    return (
        <form className="container" onSubmit={(e) => {
            e.preventDefault();
            if (onSubmit)
                onSubmit({title: title, genre, developer, released});
        }}>
            <Form.Group className="mb-3">
                <Form.Label>Game Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Epic game title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="The actual genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Developer</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Honorable notice of developer"
                    value={developer}
                    onChange={(e) => setDeveloper(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Released</Form.Label>
                <div className="input-group mb-2">
                    <input
                        type="date"
                        className="form-control form-control-lg"
                        placeholder="DD.MM.YYYY"
                        required
                        value={released}
                        onChange={(e) => setReleased(e.target.value)}
                    />
                </div>
            </Form.Group>

            <Button variant="primary" type="submit">
                {isLoading ? <Spinner animation="border"/> : "Edit"}
            </Button>
        </form>
    )
};


export default EditGameForm;
