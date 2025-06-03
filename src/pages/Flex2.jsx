import { Container, Row, Col } from "react-bootstrap";

const Flex2 = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={4}>
                        <h3>Auto margin</h3>
                        <pre>
                            ◾ ms-auto: 항목을 오른쪽으로<br />
                            ◾ me-auto: 항목을 왼쪽으로
                        </pre>
                        <p><code>처음 항목에 ms-auto</code></p>
                        <div className="d-flex bg-secondary mb-3">
                            <div className="p-2 ms-auto bg-info">ms-auto</div>
                            <div className="p-2 bg-warning">ms-auto</div>
                            <div className="p-2 bg-primary">ms-auto</div>
                        </div>

                        <p><code>마지막 항목에 me-auto</code></p>
                        <div className="d-flex bg-secondary mb-3">
                            <div className="p-2 bg-info">ms-auto</div>
                            <div className="p-2 bg-warning">ms-auto</div>
                            <div className="p-2 me-auto bg-primary">ms-auto</div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <h3>flex-wrap</h3>
                        <p><code>flex-wrap</code></p>
                        <div class="d-flex flex-wrap bg-light">
                            <div class="p-2 border">Flex item 1</div>
                            <div class="p-2 border">Flex item 2</div>
                            <div class="p-2 border">Flex item 3</div>
                            <div class="p-2 border">Flex item 4</div>
                            <div class="p-2 border">Flex item 5</div>
                            <div class="p-2 border">Flex item 6</div>
                            <div class="p-2 border">Flex item 7</div>
                            <div class="p-2 border">Flex item 8</div>
                            <div class="p-2 border">Flex item 9</div>
                            <div class="p-2 border">Flex item 10</div>
                            <div class="p-2 border">Flex item 11</div>
                            <div class="p-2 border">Flex item 12</div>
                            <div class="p-2 border">Flex item 13 </div>
                            <div class="p-2 border">Flex item 14</div>
                            <div class="p-2 border">Flex item 15</div>
                            <div class="p-2 border">Flex item 16</div>
                            <div class="p-2 border">Flex item 17</div>
                            <div class="p-2 border">Flex item 18</div>
                            <div class="p-2 border">Flex item 19</div>
                            <div class="p-2 border">Flex item 20</div>
                            <div class="p-2 border">Flex item 21</div>
                            <div class="p-2 border">Flex item 22</div>
                            <div class="p-2 border">Flex item 23</div>
                            <div class="p-2 border">Flex item 24</div>
                            <div class="p-2 border">Flex item 25</div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <h3>flex-wrap-reverse</h3>
                        <p><code>flex-wrap-reverse</code></p>
                        <div class="d-flex flex-wrap-reverse bg-light">
                            <div class="p-2 border">Flex item 1</div>
                            <div class="p-2 border">Flex item 2</div>
                            <div class="p-2 border">Flex item 3</div>
                            <div class="p-2 border">Flex item 4</div>
                            <div class="p-2 border">Flex item 5</div>
                            <div class="p-2 border">Flex item 6</div>
                            <div class="p-2 border">Flex item 7</div>
                            <div class="p-2 border">Flex item 8</div>
                            <div class="p-2 border">Flex item 9</div>
                            <div class="p-2 border">Flex item 10</div>
                            <div class="p-2 border">Flex item 11</div>
                            <div class="p-2 border">Flex item 12</div>
                            <div class="p-2 border">Flex item 13 </div>
                            <div class="p-2 border">Flex item 14</div>
                            <div class="p-2 border">Flex item 15</div>
                            <div class="p-2 border">Flex item 16</div>
                            <div class="p-2 border">Flex item 17</div>
                            <div class="p-2 border">Flex item 18</div>
                            <div class="p-2 border">Flex item 19</div>
                            <div class="p-2 border">Flex item 20</div>
                            <div class="p-2 border">Flex item 21</div>
                            <div class="p-2 border">Flex item 22</div>
                            <div class="p-2 border">Flex item 23</div>
                            <div class="p-2 border">Flex item 24</div>
                            <div class="p-2 border">Flex item 25</div>
                        </div>
                    </Col>
                </Row>
                <br /><br />
                <Row>
                    <Col md={12}>
                        <h3>flex-nowrap</h3>
                        <p><code>flex-nowrap</code></p>
                        <div class="d-flex flex-nowrap bg-light">
                            <div class="p-2 border">Flex item 1</div>
                            <div class="p-2 border">Flex item 2</div>
                            <div class="p-2 border">Flex item 3</div>
                            <div class="p-2 border">Flex item 4</div>
                            <div class="p-2 border">Flex item 5</div>
                            <div class="p-2 border">Flex item 6</div>
                            <div class="p-2 border">Flex item 7</div>
                            <div class="p-2 border">Flex item 8</div>
                            <div class="p-2 border">Flex item 9</div>
                            <div class="p-2 border">Flex item 10</div>
                            <div class="p-2 border">Flex item 11</div>
                            <div class="p-2 border">Flex item 12</div>
                            <div class="p-2 border">Flex item 13 </div>
                            <div class="p-2 border">Flex item 14</div>
                            <div class="p-2 border">Flex item 15</div>
                            <div class="p-2 border">Flex item 16</div>
                            <div class="p-2 border">Flex item 17</div>
                            <div class="p-2 border">Flex item 18</div>
                            <div class="p-2 border">Flex item 19</div>
                            <div class="p-2 border">Flex item 20</div>
                            <div class="p-2 border">Flex item 21</div>
                            <div class="p-2 border">Flex item 22</div>
                            <div class="p-2 border">Flex item 23</div>
                            <div class="p-2 border">Flex item 24</div>
                            <div class="p-2 border">Flex item 25</div>
                            <div class="p-2 border">Flex item 26</div>
                            <div class="p-2 border">Flex item 27</div>
                            <div class="p-2 border">Flex item 28</div>
                            <div class="p-2 border">Flex item 29</div>
                            <div class="p-2 border">Flex item 30</div>
                            <div class="p-2 border">Flex item 31</div>
                            <div class="p-2 border">Flex item 32</div>
                            <div class="p-2 border">Flex item 33</div>
                            <div class="p-2 border">Flex item 34</div>
                            <div class="p-2 border">Flex item 35</div>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={4}>
                        <h3>align-content-start</h3> {/* 상단 정렬 */}
                        <p><code>align-content-start</code></p>
                        <div class="d-flex flex-wrap align-content-start bg-light" style={{ height: "300px" }}>
                            <div class="p-2 border">Flex item 1</div>
                            <div class="p-2 border">Flex item 2</div>
                            <div class="p-2 border">Flex item 3</div>
                            <div class="p-2 border">Flex item 4</div>
                            <div class="p-2 border">Flex item 5</div>
                            <div class="p-2 border">Flex item 6</div>
                            <div class="p-2 border">Flex item 7</div>
                            <div class="p-2 border">Flex item 8</div>
                            <div class="p-2 border">Flex item 9</div>
                            <div class="p-2 border">Flex item 10</div>
                            <div class="p-2 border">Flex item 11</div>
                            <div class="p-2 border">Flex item 12</div>
                            <div class="p-2 border">Flex item 13 </div>
                            <div class="p-2 border">Flex item 14</div>
                            <div class="p-2 border">Flex item 15</div>
                            <div class="p-2 border">Flex item 16</div>
                            <div class="p-2 border">Flex item 17</div>
                            <div class="p-2 border">Flex item 18</div>
                            <div class="p-2 border">Flex item 19</div>
                            <div class="p-2 border">Flex item 20</div>
                            <div class="p-2 border">Flex item 21</div>
                            <div class="p-2 border">Flex item 22</div>
                            <div class="p-2 border">Flex item 23</div>
                            <div class="p-2 border">Flex item 24</div>
                            <div class="p-2 border">Flex item 25</div>
                        </div>

                    </Col>

                    <Col md={4}>
                        <h3>align-content-end</h3> {/* 하단 정렬 */}
                        <p><code>align-content-end</code></p>
                        <div class="d-flex flex-wrap align-content-end bg-light" style={{ height: "300px" }}>
                            <div class="p-2 border">Flex item 1</div>
                            <div class="p-2 border">Flex item 2</div>
                            <div class="p-2 border">Flex item 3</div>
                            <div class="p-2 border">Flex item 4</div>
                            <div class="p-2 border">Flex item 5</div>
                            <div class="p-2 border">Flex item 6</div>
                            <div class="p-2 border">Flex item 7</div>
                            <div class="p-2 border">Flex item 8</div>
                            <div class="p-2 border">Flex item 9</div>
                            <div class="p-2 border">Flex item 10</div>
                            <div class="p-2 border">Flex item 11</div>
                            <div class="p-2 border">Flex item 12</div>
                            <div class="p-2 border">Flex item 13 </div>
                            <div class="p-2 border">Flex item 14</div>
                            <div class="p-2 border">Flex item 15</div>
                            <div class="p-2 border">Flex item 16</div>
                            <div class="p-2 border">Flex item 17</div>
                            <div class="p-2 border">Flex item 18</div>
                            <div class="p-2 border">Flex item 19</div>
                            <div class="p-2 border">Flex item 20</div>
                            <div class="p-2 border">Flex item 21</div>
                            <div class="p-2 border">Flex item 22</div>
                            <div class="p-2 border">Flex item 23</div>
                            <div class="p-2 border">Flex item 24</div>
                            <div class="p-2 border">Flex item 25</div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <h3>align-content-center</h3> {/* 중앙 정렬 */}
                        <p><code>align-content-center</code></p>
                        <div class="d-flex flex-wrap align-content-center bg-light" style={{ height: "300px" }}>
                            <div class="p-2 border">Flex item 1</div>
                            <div class="p-2 border">Flex item 2</div>
                            <div class="p-2 border">Flex item 3</div>
                            <div class="p-2 border">Flex item 4</div>
                            <div class="p-2 border">Flex item 5</div>
                            <div class="p-2 border">Flex item 6</div>
                            <div class="p-2 border">Flex item 7</div>
                            <div class="p-2 border">Flex item 8</div>
                            <div class="p-2 border">Flex item 9</div>
                            <div class="p-2 border">Flex item 10</div>
                            <div class="p-2 border">Flex item 11</div>
                            <div class="p-2 border">Flex item 12</div>
                            <div class="p-2 border">Flex item 13 </div>
                            <div class="p-2 border">Flex item 14</div>
                            <div class="p-2 border">Flex item 15</div>
                            <div class="p-2 border">Flex item 16</div>
                            <div class="p-2 border">Flex item 17</div>
                            <div class="p-2 border">Flex item 18</div>
                            <div class="p-2 border">Flex item 19</div>
                            <div class="p-2 border">Flex item 20</div>
                            <div class="p-2 border">Flex item 21</div>
                            <div class="p-2 border">Flex item 22</div>
                            <div class="p-2 border">Flex item 23</div>
                            <div class="p-2 border">Flex item 24</div>
                            <div class="p-2 border">Flex item 25</div>
                        </div>
                    </Col>
                </Row>
                <br /><br />
                <Row>
                    <Col md={6}>
                        <h3>align-content-around</h3> {/* 간격 포함 균등 정렬 */}
                        <p><code>align-content-around</code></p>
                        <div class="d-flex flex-wrap align-content-around bg-light" style={{ height: "300px" }}>
                            <div class="p-2 border">Flex item 1</div>
                            <div class="p-2 border">Flex item 2</div>
                            <div class="p-2 border">Flex item 3</div>
                            <div class="p-2 border">Flex item 4</div>
                            <div class="p-2 border">Flex item 5</div>
                            <div class="p-2 border">Flex item 6</div>
                            <div class="p-2 border">Flex item 7</div>
                            <div class="p-2 border">Flex item 8</div>
                            <div class="p-2 border">Flex item 9</div>
                            <div class="p-2 border">Flex item 10</div>
                            <div class="p-2 border">Flex item 11</div>
                            <div class="p-2 border">Flex item 12</div>
                            <div class="p-2 border">Flex item 13 </div>
                            <div class="p-2 border">Flex item 14</div>
                            <div class="p-2 border">Flex item 15</div>
                            <div class="p-2 border">Flex item 16</div>
                            <div class="p-2 border">Flex item 17</div>
                            <div class="p-2 border">Flex item 18</div>
                            <div class="p-2 border">Flex item 19</div>
                            <div class="p-2 border">Flex item 20</div>
                            <div class="p-2 border">Flex item 21</div>
                            <div class="p-2 border">Flex item 22</div>
                            <div class="p-2 border">Flex item 23</div>
                            <div class="p-2 border">Flex item 24</div>
                            <div class="p-2 border">Flex item 25</div>
                        </div>
                    </Col>

                    <Col md={6}>
                        <h3>align-content-stretch</h3> {/* 세로로 꽉 채우는 정렬 */}
                        <p><code>align-content-stretch</code></p>
                        <div class="d-flex flex-wrap align-content-stretch bg-light" style={{ height: "300px" }}>
                            <div class="p-2 border">Flex item 1</div>
                            <div class="p-2 border">Flex item 2</div>
                            <div class="p-2 border">Flex item 3</div>
                            <div class="p-2 border">Flex item 4</div>
                            <div class="p-2 border">Flex item 5</div>
                            <div class="p-2 border">Flex item 6</div>
                            <div class="p-2 border">Flex item 7</div>
                            <div class="p-2 border">Flex item 8</div>
                            <div class="p-2 border">Flex item 9</div>
                            <div class="p-2 border">Flex item 10</div>
                            <div class="p-2 border">Flex item 11</div>
                            <div class="p-2 border">Flex item 12</div>
                            <div class="p-2 border">Flex item 13 </div>
                            <div class="p-2 border">Flex item 14</div>
                            <div class="p-2 border">Flex item 15</div>
                            <div class="p-2 border">Flex item 16</div>
                            <div class="p-2 border">Flex item 17</div>
                            <div class="p-2 border">Flex item 18</div>
                            <div class="p-2 border">Flex item 19</div>
                            <div class="p-2 border">Flex item 20</div>
                            <div class="p-2 border">Flex item 21</div>
                            <div class="p-2 border">Flex item 22</div>
                            <div class="p-2 border">Flex item 23</div>
                            <div class="p-2 border">Flex item 24</div>
                            <div class="p-2 border">Flex item 25</div>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <h3>align-items: 다같이 해쳐모여</h3>
                    <Col md={4}>
                        <h5>align-items-start</h5>
                        <p><code>align-items-start</code></p>
                        <div className="d-flex align-items-start bg-light" style={{ height: "150px" }}>
                            <div className="p-2 border">2025년</div>
                            <div className="p-2 border">6월</div>
                            <div className="p-2 border">3일</div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <h5>align-items-end</h5>
                        <p><code>align-items-end</code></p>
                        <div className="d-flex align-items-end bg-light" style={{ height: "150px" }}>
                            <div className="p-2 border">2025년</div>
                            <div className="p-2 border">6월</div>
                            <div className="p-2 border">3일</div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <h5>align-items-center</h5>
                        <p><code>align-items-center</code></p>
                        <div className="d-flex align-items-center bg-light" style={{ height: "150px" }}>
                            <div className="p-2 border">2025년</div>
                            <div className="p-2 border">6월</div>
                            <div className="p-2 border">3일</div>
                        </div>
                    </Col>
                </Row>
                <br /><br />
                <Row>
                    <Col md={6}>
                        <h5>align-items-baseline</h5>
                        <p><code>align-items-baseline</code></p>
                        <div className="d-flex align-items-baseline bg-light" style={{ height: "150px" }}>
                            <div className="p-2 border">2025년</div>
                            <div className="p-2 border">6월</div>
                            <div className="p-2 border">3일</div>
                        </div>
                    </Col>

                    <Col md={6}>
                        <h5>align-items-stretch</h5>
                        <p><code>align-items-stretch</code></p>
                        <div className="d-flex align-items-stretch bg-light" style={{ height: "150px" }}>
                            <div className="p-2 border">2025년</div>
                            <div className="p-2 border">6월</div>
                            <div className="p-2 border">3일</div>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <h3>align-self: 나는 갠플할랭</h3>
                    <Col md={4}>
                        <h5>align-self-start</h5>
                        <p><code>align-self-start</code></p>
                        <div className="d-flex bg-light" style={{ height: "150px" }}>
                            <div className="p-2 border align-self-start">2025년</div>
                            <div className="p-2 border">6월</div>
                            <div className="p-2 border">3일</div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h5>align-self-end</h5>
                        <p><code>align-self-end</code></p>
                        <div className="d-flex bg-light" style={{ height: "150px" }}>
                            <div className="p-2 border">2025년</div>
                            <div className="p-2 border align-self-end">6월</div>
                            <div className="p-2 border">3일</div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <h5>align-self-center</h5>
                        <p><code>align-self-center</code></p>
                        <div className="d-flex bg-light" style={{ height: "150px" }}>
                            <div className="p-2 border">2025년</div>
                            <div className="p-2 border">6월</div>
                            <div className="p-2 border align-self-center">3일</div>
                        </div>
                    </Col>
                </Row>
                <br /><br />
                <Row>
                    <Col md={6}>
                        <h5>align-self-baseline</h5> {/* align-self-start와 동일 */}
                        <p><code>align-self-baseline</code></p>
                        <div className="d-flex bg-light" style={{ height: "150px" }}>
                            <div className="p-2 border align-self-baseline">2025년</div>
                            <div className="p-2 border">6월</div>
                            <div className="p-2 border">3일</div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <h5>align-self-stretch</h5>
                        <p><code>align-self-stretch</code></p>
                        <div className="d-flex bg-light" style={{ height: "150px" }}>
                            <div className="p-2 border align-self-stretch">2025년</div>
                            <div className="p-2 border">6월</div>
                            <div className="p-2 border">3일</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Flex2;