import React, {useState} from 'react';
import {Button, Form, Spinner} from "react-bootstrap";
import {useCreateGameCommand} from "../../hooks/mutations/useCreateGameCommand";
import {useQueryClient} from "react-query";
import {getGamesQueryKey} from "../../hooks/queries/useGamesQuery";
import {useNavigate} from "react-router";

const NewGameForm = () => {

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [developer, setDeveloper] = useState("");
    const [released, setReleased] = useState("");

    const {isLoading, mutate} = useCreateGameCommand();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return (
        <form className="container" onSubmit={(e) => {
            e.preventDefault();
            mutate({title: title, genre, developer, released}, {
                onSuccess: () => {
                    queryClient.invalidateQueries(getGamesQueryKey());
                    navigate("/dashboard");
                    //fire toast of success creation
                },
                onError: () => {
                    //fire toast of failed creation
                }
            })
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
                {isLoading ? <Spinner animation="border"/> : "Save"}
            </Button>
        </form>
    )
};


export default NewGameForm;
