import {Button, Container, Row, Col, ButtonGroup } from 'react-bootstrap';

const Buttons = () => {
    return(
        <>
        <Container>
            <Row>
                <Col sm={4}>
                <Button variant='primary'>primary</Button><br/><br/>
                <Button variant='secondary'>secondary</Button><br/><br/>
                <Button variant='success'>success</Button><br/><br/>
                <Button variant='warning'>warning</Button><br/><br/>
                <Button variant='danger'>danger</Button><br/><br/>
                <Button variant='info'>info</Button><br/><br/>
                <Button variant='light'>light</Button><br/><br/>
                <Button variant='dark'>dark</Button><br/><br/>
                <Button variant='link'>link</Button>
                </Col>

                <Col sm={4}>
                <Button variant='outline-primary'>primary</Button><br/><br/>
                <Button variant='outline-secondary'>secondary</Button><br/><br/>
                <Button variant='outline-success'>success</Button><br/><br/>
                <Button variant='outline-warning'>warning</Button><br/><br/>
                <Button variant='outline-danger'>danger</Button><br/><br/>
                <Button variant='outline-info'>info</Button><br/><br/>
                <Button variant='outline-light text-dark'>light</Button><br/><br/>
                <Button variant='outline-dark'>dark</Button>
                </Col>

                <Col sm={4}>
                <h3>Button Group</h3>
                <ButtonGroup>
                    <Button variant='outline-primary' size='sm'>sm</Button>
                    <Button variant='outline-success'>md</Button>
                    <Button variant='outline-danger' size='lg'>lg</Button>
                </ButtonGroup>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Buttons;