import { useState } from "react";
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';

const Modals = () => {
    const [Show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <Container>
            <Row>
                <Col>
                <Button variant='primary' onClick={handleShow}>open</Button>
                <Modal show={Show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>Voluptate ea mollit esse quis sunt ullamco amet.</Modal.Body>

                    <Modal.Footer>
                        <Button variant='danger' onClick={handleClose}>Close</Button>
                        <Button variant='primary' onClick={handleClose}>Save</Button>
                    </Modal.Footer>
                </Modal>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Modals;