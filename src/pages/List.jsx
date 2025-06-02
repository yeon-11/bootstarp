import { Container, Row, Col } from "react-bootstrap";

const List = () => {
    return(
        <>
        <Container fluid>
            <Row>
                <Col sm={3}>
                <h3>List</h3>
                <ol className="list-group">
                    <li className="list-group-item">one</li>
                    <li className="list-group-item">two</li>
                    <li className="list-group-item">three</li>
                </ol>
                </Col>

                <Col sm={3}>
                <h3>Active State</h3>
                <ol className="list-group">
                    <li className="list-group-item active">one</li>
                    <li className="list-group-item">two</li>
                    <li className="list-group-item">three</li>
                </ol>
                </Col>

                <Col sm={3}>
                <h3>Group With Linked Items</h3>
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">one</a>
                    <a href="#" className="list-group-item list-group-item-action">two</a>
                    <a href="#" className="list-group-item list-group-item-action">three</a>
                </div>
                </Col>

                <Col sm={3}>
                <h3>Removw Borders</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item active">one</li>
                    <li className="list-group-item">two</li>
                    <li className="list-group-item">three</li>
                </ul>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default List;