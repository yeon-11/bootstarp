import { Container, Row, Col } from "react-bootstrap";

const Img = () => {
    return (
        <>
        <Container>
            <Row>
                <Col md={4}>
                <img src="http://localhost:3000/img/paris.jpg" alt="이미지" className="rounded"/>
                </Col>

                <Col md={4}>
                <img src="http://localhost:3000/img/paris.jpg" alt="이미지" className="rounded-circle"/>
                </Col>

                <Col md={4}>
                <img src="http://localhost:3000/img/paris.jpg" alt="이미지" className="img-thumnail"/>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Img;