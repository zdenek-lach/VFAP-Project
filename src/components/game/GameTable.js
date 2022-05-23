import React from 'react';
import {Button, Container, Spinner, Tab, Table, Tabs} from "react-bootstrap";
import {getGamesQueryKey, useGamesQuery} from "../../hooks/queries/useGamesQuery";
import {useRemoveGameCommand} from "../../hooks/mutations/useRemoveGameCommand";
import {useQueryClient} from "react-query";
import {useNavigate} from "react-router";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GameTableMui from "./GameTableMui";

const GameTable = () => {

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {isLoading, data, isError, error} = useGamesQuery();
    const {
        mutate
    } = useRemoveGameCommand();

    const handleRemove = (id) => {
        mutate(id, {
            onSuccess: () => {
                queryClient.invalidateQueries(getGamesQueryKey());
                notify("Delete successful")
            },
            onError: () => {
                alert("Delete error!");
                notify("Delete failed")
            }
        })
    }
    const notify = (textToShow) => toast.success(textToShow, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    });

    if (isLoading)
        return <Spinner animation="border"/>;

    if (isError || !data) {
        console.error(error);
        return <h1>Error appeared while fetching games</h1>
    }
    const renderOldTable = () => {
        return <Container className="vh-100 mt-5">
            <Table striped bordered hover size="sm" variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Developer</th>
                    <th>Released</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {data && data.map(game =>
                    <tr key={game.id}>
                        <td>{game.id}</td>
                        <td>{game.title}</td>
                        <td>{game.genre}</td>
                        <td>{game.developer}</td>
                        <td>{game.released}</td>
                        <td>
                            <Button
                                className=" btn btn-warning"
                                onClick={() => navigate(`/dashboard/game/${game.id}/edit`)}
                            >Edit</Button>
                        </td>
                        <td>
                            <Button
                                className=" btn btn-danger delete"
                                onClick={() => handleRemove(game.id)}
                            >Delete</Button>
                        </td>
                    </tr>
                )}
                </tbody>
            </Table>
            <ToastContainer/>
        </Container>
    }
    return (
        <Container className=" mt-5">
            <Tabs defaultActiveKey="tables" variant="pills" className="mb-3 bg-dark p-3 text-white">
                <Tab eventKey="oldTable" title="Old Table">
                    {renderOldTable()}
                </Tab>
                <Tab eventKey="newTable" title="MUI Table">
                    <GameTableMui handleRemove={handleRemove}
                                  handleEdit={(id) => navigate(`/dashboard/game/${id}/edit`)}/>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default GameTable;
