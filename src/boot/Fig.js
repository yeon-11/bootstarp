import { Figure, Container, Row, Col } from "react-bootstrap";

const Fig = () => {
    return (
        <>
        <Container>
            <Row>
                <Col>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="170x180"
                            src="/img/paris.jpg" />
                        <Figure.Caption>이미지 넣고 텍스트고 넣고 나는 배가 고프고</Figure.Caption>
                    </Figure>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Fig;