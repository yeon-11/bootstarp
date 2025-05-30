import { Container, Row, Col, Table } from "react-bootstrap";

const TableRef = () => {
    return (
        <>
            <Container>
                <Row>
                    {/* --------------------------------------------- basic */}
                    <Col md={3} className="border">
                        <h3 className="my-3">Basic</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>first</th>
                                    <th>last</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>yeon</td>
                                    <td>penguin</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col> {/* basic 끝 */}

                    {/* --------------------------------------------- striped */}
                    <Col md={3} className="border">
                        <h3 className="my-3">Striped</h3>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>first</th>
                                    <th>last</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>yeon</td>
                                    <td>penguin</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col> {/* striped 끝 */}

                    {/* --------------------------------------------- bordered */}
                    <Col md={3} className="border">
                        <h3 className="my-3">Bordered</h3>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>first</th>
                                    <th>last</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>yeon</td>
                                    <td>penguin</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col> {/* bordered 끝 */}

                    {/* --------------------------------------------- hover */}
                    <Col md={3} className="border">
                        <h3 className="my-3">hover</h3>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>first</th>
                                    <th>last</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>yeon</td>
                                    <td>penguin</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col> {/* hover 끝 */}
                </Row>

                <Row>
                    {/* --------------------------------------------- dark */}
                    <Col md={3} className="border">
                        <h3 className="my-3">Dark</h3>
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th>first</th>
                                    <th>last</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>yeon</td>
                                    <td>penguin</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col> {/* dark 끝 */}

                    {/* --------------------------------------------- dark-striped */}
                    <Col md={3} className="border">
                        <h3 className="my-3">Dark Striped</h3>
                        <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th>first</th>
                                    <th>last</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>yeon</td>
                                    <td>penguin</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col> {/* dark-striped 끝 */}

                    {/* --------------------------------------------- dark-hover */}
                    <Col md={3} className="border">
                        <h3 className="my-3">Hoverable Dark</h3>
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th>first</th>
                                    <th>last</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>yeon</td>
                                    <td>penguin</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col> {/* dark-hover 끝 */}

                    {/* --------------------------------------------- dark-borderless */}
                    <Col md={3} className="border">
                        <h3 className="my-3">Borderless</h3>
                        <table className="table table-dark table-borderless">
                            <thead>
                                <tr>
                                    <th>first</th>
                                    <th>last</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>yeon</td>
                                    <td>penguin</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col> {/* dark-borderless 끝 */}
                </Row>

                <Row>
                    <Col md={12} className="border">
                        <h3 className="my-3">그 외</h3>
                        <pre className="text-secondary">
                            ◾ table-primary<br />
                            ◾ table-success<br />
                            ◾ table-danger<br />
                            ◾ table-info<br />
                            ◾ table-warnig<br />
                            ◾ table-active<br />
                            ◾ table-secondary<br />
                            ◾ table-light<br />
                            ◾ table-dark
                        </pre>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default TableRef;