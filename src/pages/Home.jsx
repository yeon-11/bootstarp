import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
    return (
        <>
        <Container>
            <Row>
                <Col lg={12} md={12} sm={6}> {/*해상도에 따라 면적 설정*/}
                    <h3 className="mt-3 mb-2">What is React?</h3>
                    <pre>
                        react: javascript 라이브러리<br />
                        ◾ reactjs, 네이티브 2가지<br />
                        ◾ UI 구성요소를 구축하기 위한 도구<br />
                        ◾ SAP<br />
                        ◾ 필요한것만 변경하여 메모리 소요 적음<br />
                        ◾ npm 필요<br />
                        ◾ npm i react@latest react-dom@latest (react 18ver. 설치)<br />
                    </pre>

                    <code>
                        import ReactDOM from 'react-dom';
                        ReactDOM.render(, document.getElementById('root'));
                    </code>
                    <br/>
                    <code>
                        // After //
                        import ReactDOM from 'react-dom/client';
                        const root = ReactDOM.createRoot(document.getElementById('root'));
                        root.render();
                    </code>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Home;