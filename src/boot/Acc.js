import { Accordion, Container, Row, Col } from "react-bootstrap";

const Acc = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Item 1</Accordion.Header>
                                <Accordion.Body>Ullamco eu laboris mollit nisi. Culpa enim do commodo do cillum sint consectetur voluptate sunt. Dolor consectetur incididunt laborum aute. Fugiat elit fugiat ipsum magna aliqua esse sit incididunt amet.
                                Est mollit ex qui qui incididunt reprehenderit sunt anim consequat reprehenderit do eu eiusmod. Do ad dolore laboris velit deserunt consequat ex exercitation exercitation ut. Qui in aliquip dolor sunt proident fugiat.</Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Item 2</Accordion.Header>
                                <Accordion.Body>Ullamco eu laboris mollit nisi. Culpa enim do commodo do cillum sint consectetur voluptate sunt. Dolor consectetur incididunt laborum aute. Fugiat elit fugiat ipsum magna aliqua esse sit incididunt amet.
                                Est mollit ex qui qui incididunt reprehenderit sunt anim consequat reprehenderit do eu eiusmod. Do ad dolore laboris velit deserunt consequat ex exercitation exercitation ut. Qui in aliquip dolor sunt proident fugiat.</Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Acc;