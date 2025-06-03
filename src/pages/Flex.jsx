import { Container, Row, Col } from "react-bootstrap";

const Flex = () => {
    return (
        <>
        <Container fluid>
            <Row>
                <Col md={4}>
                    <h3>Basic</h3> {/* 기본 좌측 정렬 */}
                    <div className="d-flex p-3 bg-secondary">
                        <div className="p-2 bg-info">Flex Item 1</div>
                        <div className="p-2 bg-warning">Flex Item 2</div>
                        <div className="p-2 bg-primary">Flex Item 3</div>
                    </div>
                </Col>

                <Col md={4}>
                    <h3>inline-flex</h3> {/* 크기만큼 정렬 */}
                    <div className="d-inline-flex p-3 bg-secondary">
                        <div className="p-2 bg-info">Flex Item 1</div>
                        <div className="p-2 bg-warning">Flex Item 2</div>
                        <div className="p-2 bg-primary">Flex Item 3</div>
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={3}>
                    <h3>flex-row</h3> {/* 가로 정렬 (좌측기준) */}
                    <div className="d-flex flex-row bg-secondary">
                        <div className="p-2 bg-info">Flex Item 1</div>
                        <div className="p-2 bg-warning">Flex Item 2</div>
                        <div className="p-2 bg-primary">Flex Item 3</div>
                    </div>
                </Col>

                <Col md={3}>
                    <h3>flex-row-reverse</h3> {/* 가로 정렬 (우측기준) */}
                    <div className="d-flex flex-row-reverse bg-secondary">
                        <div className="p-2 bg-info">Flex Item 1</div>
                        <div className="p-2 bg-warning">Flex Item 2</div>
                        <div className="p-2 bg-primary">Flex Item 3</div>
                    </div>
                </Col>

                <Col md={3}>
                    <h3>flex-column</h3> {/* 내림차순 정렬 */}
                    <div className="d-flex flex-column bg-secondary">
                        <div className="p-2 bg-info">Flex Item 1</div>
                        <div className="p-2 bg-warning">Flex Item 2</div>
                        <div className="p-2 bg-primary">Flex Item 3</div>
                    </div>
                </Col>

                <Col md={3}>
                    <h3>flex-column-reverse</h3> {/* 오름차순 정렬 */}
                    <div className="d-flex flex-column-reverse bg-secondary">
                        <div className="p-2 bg-info">Flex Item 1</div>
                        <div className="p-2 bg-warning">Flex Item 2</div>
                        <div className="p-2 bg-primary">Flex Item 3</div>
                    </div>
                </Col>
            </Row>
        </Container>
        <hr />
        <Container fluid>
            <Row>
                <h3>콘텐츠 정당화</h3>
                <Col md={4}>
                    <h5>justify-content-start</h5> {/* 좌측 정렬 */}
                    <div className="d-flex justify-content-start bg-secondary">
                        <div className="p-2 bg-info">Flex Item 1</div>
                        <div className="p-2 bg-warning">Flex Item 2</div>
                        <div className="p-2 bg-primary">Flex Item 3</div>
                    </div>
                </Col>

                <Col md={4}>
                    <h5>justify-content-end</h5> {/* 우측 정렬 */}
                    <div className="d-flex justify-content-end bg-secondary">
                        <div className="p-2 bg-info">Flex Item 1</div>
                        <div className="p-2 bg-warning">Flex Item 2</div>
                        <div className="p-2 bg-primary">Flex Item 3</div>
                    </div>
                </Col>

                <Col md={4}>
                    <h5>justify-content-center</h5> {/* 중앙 정렬 */}
                    <div className="d-flex justify-content-center bg-secondary">
                        <div className="p-2 bg-info">Flex Item 1</div>
                        <div className="p-2 bg-warning">Flex Item 2</div>
                        <div className="p-2 bg-primary">Flex Item 3</div>
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={4}>
                    <h5>justify-content-between</h5> {/* 좌우 정렬, 사이 공백 */}
                    <div className="d-flex justify-content-between bg-secondary">
                        <div className="p-2 bg-info">Flex Item 1</div>
                        <div className="p-2 bg-warning">Flex Item 2</div>
                        <div className="p-2 bg-primary">Flex Item 3</div>
                    </div>
                </Col>

                <Col md={4}>
                    <h5>justify-content-around</h5> {/* 양쪽 여백 동일 */}
                    <div className="d-flex justify-content-around bg-secondary">
                        <div className="p-2 bg-info">Flex Item 1</div>
                        <div className="p-2 bg-warning">Flex Item 2</div>
                        <div className="p-2 bg-primary">Flex Item 3</div>
                    </div>
                </Col>

                <Col md={4}>
                    <h5>justify-content-evenly</h5> {/* 전체 여백 동일 */}
                    <div className="d-flex justify-content-evenly bg-secondary">
                        <div className="p-2 bg-info">Flex Item 1</div>
                        <div className="p-2 bg-warning">Flex Item 2</div>
                        <div className="p-2 bg-primary">Flex Item 3</div>
                    </div>
                </Col>
            </Row>
        </Container>
        <hr />
        <Container fluid>
            <Row>
                <h3>크기 성장 수축</h3>
                <Col md={6}>
                    <h5>flex-fill</h5> {/* 가로 크기 동일하게 넓어짐 */}
                    <div className="d-flex">
                        <div className="p-2 bg-info flex-fill">one</div>
                        <div className="p-2 bg-warning flex-fill">two</div>
                        <div className="p-2 bg-primary flex-fill">three</div>
                    </div>
                </Col>

                <Col md={6}>
                    <h5>order</h5> {/* 숫자가 낮을수록 내림차순 */}
                    <div className="d-flex bg-secondary">
                        <div className="p-2 bg-info order-3">order-3</div>
                        <div className="p-2 bg-warning order-2">order-2</div>
                        <div className="p-2 bg-primary order-1">order-1</div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Flex;

// Explorer 8,9ver 에서는 flex 작동 안됨