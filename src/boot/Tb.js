import { Table, Container, Row, Col } from "react-bootstrap";

const Tb = () => {
    return (
        <>
        <Container>
            <Row>
                <Col>
                    <Table striped bordered hover variant='dark' responsive> {/*responsive: 표가 잘리지 않고 스크롤*/}
                        <caption style={{display:"none"}}>졸려죽것다</caption>
                        <colgroup>
                        <col style={{width:"10%"}}/>
                        <col style={{width:"20%"}}/>
                        <col style={{width:"50%"}}/>
                        <col style={{width:"30%"}}/>
                        </colgroup>
                        <thead>
                            <tr>
                                <th>#</th><th>first</th><th>last</th><th>user</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td><td>2</td><td>3</td><td>4</td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr>
                                <th>#</th><th>first</th><th>last</th><th>user</th>
                            </tr>
                        </tfoot>
                    </Table>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Tb;