import React, {useState} from 'react';
import {Button, Container, Form, Spinner} from "react-bootstrap";
import {useCreateGameCommand} from "../../hooks/mutations/useCreateGameCommand";
import {useQueryClient} from "react-query";
import {getGamesQueryKey} from "../../hooks/queries/useGamesQuery";
import {useNavigate} from "react-router";
import {TextareaAutosize} from "@mui/material";
import '../styling/FormStyle.css'

const NewGameForm = () => {

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [developer, setDeveloper] = useState("");
    const [released, setReleased] = useState("");
    const [wikisnip, setWikisnip] = useState("");
    const [imageURL, setImageURL] = useState("");

    const {isLoading, mutate} = useCreateGameCommand();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return (

        <Container className="py-5">
            <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-8 col-md-8 col-lg-8 col-xl-8">
                <div className="card bg-light text-black" style={{borderRadius: 20}}>
                    <div className="card-body p-5 text-center">
                        <h2 className="fw-bold mb-2 text-uppercase">New Game</h2>
                        <form className="container" onSubmit={(e) => {
                            e.preventDefault();
                            mutate({title: title, genre, developer, released, wikisnip, imageURL}, {
                                onSuccess: () => {
                                    queryClient.invalidateQueries(getGamesQueryKey());
                                    navigate("/dashboard");
                                    //fire toast of success creation
                                },
                                onError: () => {
                                    console.error('An error occured when creating form');
                                }
                            })
                        }}>
                            <Form.Group className="mb-3">
                                <Form.Label>Game Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Epic game title"
                                    value={title}
                                    required
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Genre</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="The actual genre"
                                    value={genre}
                                    required
                                    onChange={(e) => setGenre(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Developer</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Honorable notice of developer"
                                    value={developer}
                                    required
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

                            <Form.Group className="mb-3">
                                <Form.Label>Snippet from Wikipedia</Form.Label>
                                <div className="input-group mb-2">
                                    <TextareaAutosize
                                        className="form-control form-control-lg"
                                        placeholder="The game is awesome and it's definitely written on Wikipedia!"
                                        required
                                        value={wikisnip}
                                        onChange={(e) => setWikisnip(e.target.value)}
                                    />
                                </div>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Link to Image</Form.Label>
                                <div className="input-group mb-2">
                                    <input
                                        type="url"
                                        className="form-control form-control-lg"
                                        placeholder="Google Images"
                                        required
                                        value={imageURL}
                                        onChange={(e) => setImageURL(e.target.value)}
                                    />
                                </div>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                {isLoading ? <Spinner animation="border"/> : "Save"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</Container>
)
};


export default NewGameForm;
