import { Component, Row, Col } from "react-bootstrap";

const Badges = () => {
    return(
        <>
        <div className="Container">
            <div className="Row">
                <div className="Col-md-12">
                    <h3>Badges</h3>
                    <span className="badge bg-primary rounded-pill">badge-primary</span><br/><br/>
                    <span className="badge bg-secondary rounded-pill">badge-secondary</span><br/><br/>
                    <span className="badge bg-success rounded-pill">badge-success</span><br/><br/>
                    <span className="badge bg-danger rounded-pill">badge-danger</span><br/><br/>
                    <span className="badge bg-warning rounded-pill">badge-warning</span><br/><br/>
                    <span className="badge bg-info rounded-pill">badge-info</span><br/><br/>
                    <span className="badge bg-light text-dark rounded-pill">badge-light</span><br/><br/>
                    <span className="badge bg-dark rounded-pill">badge-dark</span><br/><br/>
                </div>
            </div>

            <Row>
                <Col>
                <button className="btn btn-primary">
                    Messages <span className="badge bg-danger">4</span>
                </button>
                </Col>
            </Row>
        </div>
        </>
    );
}

export default Badges;