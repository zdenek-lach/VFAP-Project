import {Button, Col, Row, Toast, ToastContainer} from "react-bootstrap";
import {useState} from "react";

const RandomSnackBar = () => {
    const [show, setShow] = useState(false);
    const [position, setPosition] = useState('middle-center');

    return (
        <Row>
            <Button className="col-md-12 btn btn-dark" onClick={() => setShow(true)}>Show Snack(Toast)</Button>
            <Col xs={6}>
                <ToastContainer className="p3" position={position}>
                    <Toast onClose={() => setShow(false)} show={show} delay={4000} autohide>
                        <Toast.Header>
                            <strong className="me-auto">Snackbar!</strong>
                            <small>11 years ago</small>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Snackbar!</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Col>
        </Row>
    );
}
export default RandomSnackBar;