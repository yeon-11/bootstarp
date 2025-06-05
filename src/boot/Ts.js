import { useState } from 'react';
import { Form, Toast, ToastContainer, Container, Row, Col } from 'react-bootstrap';

const Ts = () => {
    const [position, setPosition] = useState('top-start')
    // select로 포지션 변경, 최초의 페이지 로드시 상단 좌측이 초기값

    return (
        <>
        <Container fluid>
            <Row>
                <Col lg="12" md="12" sm="12">
                <h3 className="mt-4 mb-2">Select Box로 Toast 포지션 변경</h3>
                <label htmlFor="selectToastPalcement">토스트 포지션</label>
                <Form.Select onChange={(e) => setPosition(e.currentTarget.value)}>
                    {[
                        'top-start', 'top-center', 'top-end',
                        'middle-start', 'middle-center', 'middle-end',
                        'bottom-start', 'bottom-center', 'bottom-end',
                    ].map((p) => (
                        <option key={p} value={p}>{p}</option>
                    ))}
                </Form.Select>
                </Col>
            </Row>

            {/* Toast 생성 */}
            <div className='bg-dark position-relative' style={{minHeight:'240px'}}>
                <ToastContainer className='p-3' position={position} style={{zIndex: 1}}>
                    <Toast>
                        <Toast.Header closeButton={false}>
                            <strong className='me-auto'>이삭</strong>
                        </Toast.Header>

                        <Toast.Body>
                            토스트 맛있겠다.. 햄치즈토스트 먹고싶다..<br/>소스 진득하게 많이 발라달라고 하고싶다..
                        </Toast.Body>
                    </Toast>
                </ToastContainer>
            </div>
        </Container>
        </>
    );
}

export default Ts;

/*
.map(): js에서 배열의 각 요소를 순회하면서 콜백함수 적용 후 그 결과로 새로운 배열을 만들어 반환 (배열 상태 유지)
*/