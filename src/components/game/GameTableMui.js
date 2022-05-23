import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {useGamesQuery} from "../../hooks/queries/useGamesQuery";
import React from "react";
import {Button, Container} from "react-bootstrap";


const GameTableMui = ({handleEdit, handleRemove}) => {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    const {data} = useGamesQuery();

    const columns = [
        {
            name: "id",
            options: {
                display: 'excluded',
            }
        },
        {
            name: "title",
            label: "Title",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "genre",
            label: "Genre",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "developer",
            label: "Developer",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "released",
            label: "Released",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "edit",
            label: "Changes",
            options: {
                filter: false,
                customBodyRender: (_, {rowData}) => <>
                    <Button variant="outline-info"
                            title="Edit"
                            size="sm"
                            onClick={() => handleEdit(rowData[0])}
                            className="rounded-1 ms-2">
                        Edit
                    </Button>
                    <Button variant="outline-danger"
                            title="Remove"
                            size="sm"
                            onClick={() => handleRemove(rowData[0])}
                            className="rounded-1 ms-2">
                        Delete
                    </Button>
                </>
            }
        }
    ];

    const options = {
        filterType: 'checkbox',
        selectableRows: "none",
        selectableRowsHideCheckboxes: true,
    };

    return <Container className="vh-100 mt-5">


        <ThemeProvider theme={darkTheme}>
        <MUIDataTable
            title={"Games List"}
            data={data}
            columns={columns}
            options={options}
        />
        </ThemeProvider>

    </Container>
};
export default GameTableMui;

