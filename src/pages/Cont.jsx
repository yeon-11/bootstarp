import { Container, Row, Col, Table } from "react-bootstrap";

const Cont = () => {
    return (
        <>
        <Container fluid>
            <Row>
                <Col>
                    <h3 className="mt-5 md-3">Fixed Container</h3>
                    <Table striped>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Extra small &lt; 576px</th> {/* <: &lt; */}
                                <th>small &gt; 576px</th> {/* >: &gt; */}
                                <th>Medium &gt; 768px</th>
                                <th>Large &gt; 992px</th>
                                <th>Extra Large &gt; 1200px</th>
                                <th>XXL &gt; 1400px</th>
                            </tr>

                        </thead>

                        <tbody>
                            <tr>
                                <td>max-width</td>
                                <td>100%</td>
                                <td>540px</td>
                                <td>720px</td>
                                <td>960px</td>
                                <td>1140px</td>
                                <td>1320px</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Row>
                <Col lg={6} md={4} className="border">1
                </Col>
                <Col lg={3} md={4} className="border">2
                </Col>
                <Col lg={3} md={4} className="border">3
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Cont;