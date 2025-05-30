import { Container, Row, Col } from "react-bootstrap";

const Jumbo = () => {
    return(
        <>
        <Container>
            <Row>
                <Col>
                <h3 className="my-5">Jumbotron</h3>
                <div className="mt-4 p-5 bg-success text-white rounded">
                    <h4>Jumbotron</h4>
                    <p>bootstrap ver.4 까지 존재했으나 ver.5 이후 없음</p>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Jumbo;