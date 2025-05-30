import { Container, Row, Col } from "react-bootstrap";

const Cards = () => {
    return (
        <>
        <Container>
            <Row>
                <Col sm={4}>
                    <h3>Basic</h3>
                    <div className="card">
                        <div className="card-body">basic card</div>
                    </div>
                </Col>

                <Col sm={4}>
                    <h3>Header and Footer</h3>
                    <div className="card">
                        <div className="card-header">Header</div>
                        <div className="card-body">Body</div>
                        <div className="card-footer">Footer</div>
                    </div>
                </Col>

                <Col sm={4}>
                    <h3>Title text and Link</h3>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">card</h5>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <a href="#" className="card-link">card link</a>
                            <a href="#" className="card-link">penguin</a>
                        </div>
                    </div>
                </Col>
            </Row>
            
            <br />

            <Row>
                <Col sm={6}>
                    <h3>Card Image top</h3>
                    <div className="card">
                        <img src="../img/men.png" alt="" className="card-img-top"></img>
                        <div className="card-body">
                            <h5 className="card-title">YEON</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, fugit?</p>
                            <a href="#" className="btn btn-outline-primary">more</a>
                        </div>
                    </div>
                </Col>

                <Col sm={6}>
                    <h3>Card Image bootom</h3>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">YEON</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, fugit?</p>
                            <a href="#" className="btn btn-outline-primary">more</a>
                        </div>
                        <img src="../img/girl.png" alt="" className="card-img-top"></img>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Cards;