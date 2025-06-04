import { useState } from "react";
import { Container, Row, Col, Nav, Tabs, Tab } from "react-bootstrap";

function Tabss() {
    const [key, setKey] = useState('home'); //상태관리는 최상단에 사용

    return (
        <>
        <Container fluid>
            <Row>
                <Col md={4}>
                    <h3 className="mt-3 mb-2">Basic</h3>
                    <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="bm-3">
                        <Tab eventKey="home" title="Home">
                            sweet 🏠
                        </Tab>

                        <Tab eventKey="profile" title="Profile">
                            sweet 🐧
                        </Tab>

                        <Tab eventKey="contact" title="Contact">
                            sweet 🎁
                        </Tab>
                    </Tabs>
                </Col>

                <Col md={4}>
                    <h3 className="mt-3 mb-2">Jusify</h3>
                    <Tabs defaultActiveKey="profile" className="mb-3" fill>
                        <Tab eventKey="home" title="Home">Home</Tab>
                        <Tab eventKey="profile" title="Profile">Profile</Tab>
                        <Tab eventKey="longer" title="Longer">Longer</Tab>
                        <Tab eventKey="contact" title="Contact">Contact</Tab>
                    </Tabs>
                </Col>

                <Col md={4}>
                    <h3 className="mt-3 mb-2">Pills</h3>
                    <Tab.Container defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">First Content</Tab.Pane>
                                <Tab.Pane eventKey="second">Second Content</Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Tabss;