import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";
import DatePicker from "react-datepicker";
import CustomDatePicker from "./CustomDatePicker";


const MyGameForm = () => {
        const [startDate, setStartDate] = useState(new Date());


    const renderNewGameForm = () => {
        return <form className="container">
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
                <Form.Control type="text" placeholder="The date of release"/>
                <CustomDatePicker/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Save
            </Button>
        </form>
    }
    return (
        <>
            <CustomNavbar/>
            {renderNewGameForm()}
        </>
    )
};


export default MyGameForm;
