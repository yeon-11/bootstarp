import React, { useState } from 'react'; // react script 사용하기 위함
import { Container, Row, Col, Toast, Button } from "react-bootstrap";

const ToastM = () => {

    const [showA, setShowA] = useState(true)
    const [showB, setShowB] = useState(true)

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

    return (
        <>
        <Container>
            <Row>
                <Col md={3}>
                    <h3>show</h3>
                    <div className="toast show">
                        <div className="toast-header">
                            <strong class="me-auto">
                                이삭토스트
                            </strong>
                            <button className="btn-close" data-bs-dismiss="toast"></button>
                        </div>
                        <div className="toast-body">
                            맛있지...
                        </div>
                    </div>
                </Col>

                <Col md={3}> {/*reacr에서 script를 사용할땐 우리가 아는거랑 다름*/}
                    <h3>show 2</h3>
                    <button className="btn btn-warning" id="toastbtn">참토스트</button>
                    <div className="toast">
                        <div className="toast-header">
                            <strong class="me-auto">
                                맛있을 것 같더라..
                            </strong>
                            <button className="btn-close" data-bs-dismiss="toast"></button>
                        </div>
                        <div className="toast-body">
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                    {/*<script> //react에서는 html script 방식 사용 안됌
                    document.getElementById("toastbtn").onclick= function(){
                    let toastElList = [].slice.call(document.querySelectorAll('.toast'))
                    }
                    </script>*/}
                </Col>

                <Col md={3}>
                    <h3>react bootstrap</h3>
                    <Button
                        variant='success'
                        onClick={toggleShowA}
                        className='mb-2'
                    >
                        Toggle Toast <strong>with</strong> Animation
                    </Button>
                    <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Header>
                            <h2>header</h2>
                        </Toast.Header>
                        <Toast.Body> Lorem ipsum dolor sit amet.
                        </Toast.Body>
                    </Toast>
                </Col>
                
                <Col md={3}></Col>
            </Row>
        </Container>
        </>
    );
}

export default ToastM;