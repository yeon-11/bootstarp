import { Pagination, Container, Row, Col } from "react-bootstrap";

let active = 2; // 변수(active)에 index 2 대입
let items = []; // 변수(item)는 비워짐

for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>
    )
}

const Pagen = () => {
    return (
        <>
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="d-flex justify-content-center">
                            <Pagination size="sm">{items}</Pagination></div>

                        <div className="d-flex justify-content-center">
                            <Pagination>{items}</Pagination></div>

                        <div className="d-flex justify-content-center">
                            <Pagination size="lg">{items}</Pagination></div>

                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
}

export default Pagen;