import React, {useState} from 'react';
import {Button, Container, Form, Spinner} from "react-bootstrap";
import {TextareaAutosize} from "@mui/material";

const EditGameForm = ({game, onSubmit, isLoading}) => {
    const [title, setTitle] = useState(game.title || "");
    const [genre, setGenre] = useState(game.genre || "");
    const [developer, setDeveloper] = useState(game.developer || "");
    const [released, setReleased] = useState(game.released || "");
    const [wikisnip, setWikisnip] = useState(game.wikisnip || "");
    const [imageURL, setImageURL] = useState(game.imageURL || "");

    return (
        <Container className="py-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-8 col-md-8 col-lg-8 col-xl-8">
                    <div className="card bg-light text-black" style={{borderRadius: 20}}>
                        <div className="card-body p-5 text-center">
                            <h2 className="fw-bold mb-2 text-uppercase">Editing <b>{game.title}</b></h2>
                            <form className="container" onSubmit={(e) => {
                                e.preventDefault();
                                if (onSubmit)
                                    onSubmit({title, genre, developer, released, wikisnip, imageURL});
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
                                    {isLoading ? <Spinner animation="border"/> : "Save Changes"}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
};


export default EditGameForm;
