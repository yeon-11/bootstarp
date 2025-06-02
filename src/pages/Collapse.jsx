import { Container, Row, Col } from "react-bootstrap";

const Collapse = () => {
    return (
        <>
        <Container>
            <Row>
                <Col md={3}>
                    <h3>Accodion</h3>
                    <div className="card">
                        <div className="card-header">
                            <a className="collapsed btn" data-bs-toggle="collapse" href="#one">
                                one
                            </a>
                        </div>
                        <div className="collapse" data-bs-parent="#accordian" id="one">
                            <div className="card-body">
                                왜 안 뜰까 이게
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <a className="collapsed btn" data-bs-toggle="collapse" href="#two">
                                two
                            </a>
                        </div>
                        <div className="collapse" data-bs-parent="#accordian" id="two">
                            <div className="card-body">
                                오류가 왜 나는거지
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={3}>
                    <h3>Basic</h3>
                    <button data-bs-toggle="collapse" data-bs-target="#demo" className="btn">누르면 아래에 텍스트</button>
                    <div className="collapse" id="demo">Lorem ipsum dolor sit amet.</div>
                </Col>

                <Col md={3}>
                    <h3></h3>
                </Col>

                <Col md={3}>
                    <h3></h3>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Collapse;