import { Container, Row, Col } from "react-bootstrap";

const Pagination = () => {
    return (
        <>
        <Container fluid>
            <Row>
                <Col sm={6}>
                    <h3>Basic</h3>
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#">Previous</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </Col>

                <Col sm={6}>
                    <h3>Active</h3>
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#">Previous</a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link" href="#">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </Col>

                <Col sm={12}>
                    <h3>Size</h3>
                    <ul className="pagination pagination-lg">
                        <li className="page-item ">
                            <a className="page-link" href="#">Previous</a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link" href="#">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </Col>

                <Col sm={6}>
                    <h3>Breadcrumbs</h3>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">web</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#">design</a>
                        </li>
                        <li className="breadcrumb-item active">
                            markup
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Pagination;