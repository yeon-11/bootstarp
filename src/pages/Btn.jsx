import { Container, Row, Col } from "react-bootstrap";

const Btn = () => {
    return (
        <>
        <Container>
            <Row>
                <Col md={3}>
                    <h3 className="my-5">일반버튼</h3>
                    <button className="btn">btn</button><br/><br/>
                    <button className="btn btn-primary">btn-primary</button><br/><br/>
                    <button className="btn btn-secondary">btn-secondary</button><br/><br/>
                    <button className="btn btn-success">btn-success</button><br/><br/>
                    <button className="btn btn-info">btn-info</button><br/><br/>
                    <button className="btn btn-warning">btn-warning</button><br/><br/>
                    <button className="btn btn-danger">btn-danger</button><br/><br/>
                    <button className="btn btn-light">btn-light</button><br/><br/>
                    <button className="btn btn-dark">btn-dark</button><br/><br/>
                    <button className="btn btn-link">btn-link</button>
                </Col>

                <Col md={3}>
                    <h3 className="my-5">테두리버튼</h3>
                    <button className="btn">btn</button><br/><br/>
                    <button className="btn btn-outline-primary">btn-outline-primary</button><br/><br/>
                    <button className="btn btn-outline-secondary">btn-outline-secondary</button><br/><br/>
                    <button className="btn btn-outline-success">btn-outline-success</button><br/><br/>
                    <button className="btn btn-outline-info">btn-outline-info</button><br/><br/>
                    <button className="btn btn-outline-warning">btn-outline-warning</button><br/><br/>
                    <button className="btn btn-outline-danger">btn-outline-danger</button><br/><br/>
                    <button className="btn btn-outline-light text-dark">btn-outline-light</button><br/><br/>
                    <button className="btn btn-outline-dark">btn-outline-dark</button><br/>
                </Col>

                <Col md={3}>
                    <h3 className="my-5">블록버튼</h3>
                    <div className="d-grid"> {/*d-grid 적어야 btn-block 적용 */}
                    <button className="btn btn-primary btn-block">btn-block</button>
                    </div>
                </Col>

                <Col md={3}>
                    <h3 className="my-5">버튼사이즈</h3>
                    <button className="btn btn-primary btn-sm">btn-sm</button><br/><br/>
                    <button className="btn btn-secondary">btn</button><br/><br/>
                    <button className="btn btn-success btn-lg">btn-lg</button>
                </Col>
            </Row>

            <Row>
                <Col>
                <h3>button group</h3>
                <div className="d-flex justify-content-end">
                    <div className="btn-group">
                        <button className="btn btn-outline-primary">쓰기</button>
                        <button className="btn btn-outline-success">수정</button>
                        <button className="btn btn-outline-danger">삭제</button>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Btn;