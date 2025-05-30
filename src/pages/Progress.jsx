import { Container, Row, Col } from "react-bootstrap";

const Progress = () => {
    return (
        <>
        <Container>
            <Row>
                <h2>Progress</h2>
                <Col md={3}>
                    <h3>Basic</h3>
                    <div className="progress">
                        <div className="progress-bar" style={{ width: "50%" }}>50%</div>
                    </div>
                </Col>

                <Col md={3}>
                    <h3>Striped</h3>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped" style={{ width: "70%" }}>70%</div>
                    </div>
                </Col>

                <Col md={3}>
                    <h3>Animate</h3>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "90%" }}>90%</div>
                    </div>
                </Col>

                <Col md={3}>
                    <h3>Multiple</h3>
                    <div className="progress">
                        <div className="progress-bar bg-success" style={{ width: "50%" }}>50%</div>
                        <div className="progress-bar bg-warning" style={{ width: "20%" }}>20%</div>
                        <div className="progress-bar bg-danger" style={{ width: "30%" }}>30%</div>
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <h2>Spinner</h2>
                <Col md={3}>
                    <h3>Basic</h3>
                    <div className="spinner-border"></div>
                </Col>

                <Col md={3}>
                    <h3>Color</h3>
                    <div class="spinner-border text-muted"></div><br /><br />
                    <div class="spinner-border text-primary"></div><br /><br />
                    <div class="spinner-border text-success"></div><br /><br />
                    <div class="spinner-border text-info"></div><br /><br />
                    <div class="spinner-border text-warning"></div><br /><br />
                    <div class="spinner-border text-danger"></div><br /><br />
                    <div class="spinner-border text-secondary"></div><br /><br />
                    <div class="spinner-border text-dark"></div><br /><br />
                    <div class="spinner-border text-light"></div>
                </Col>

                <Col md={3}>
                    <h3>Growing</h3>
                    <div className="spinner-grow text-muted"></div><br /><br />
                    <div className="spinner-grow text-muted spinner-grow-sm"></div>
                </Col>

                <Col md={3}>
                    <h3>Spinner Button</h3>
                    <button className="btn btn-success">
                        <span className="spinner-border spinner-border-sm"></span>
                    </button><br /><br />
                    <button className="btn btn-danger">
                        <span className="spinner-border spinner-border-sm"></span>
                    </button>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Progress;