import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react"; //useEffect 사용시 컴포넌트에 부수적인 작용 수행 (데이터, 타이머 등)

const Effect = () => {
    const [count, setCount] = useState(0); // 초기값 0
    const [calculation, setCalculation] = useState(0);

    useEffect(() => { // 시간지연함수
        /* setTimeout(() => {
            setCount((count) => count + 1); // +1 증가
        }, 1000); // 1초 뒤에 */

        setCalculation(() => count * 2);
    }, [count]); //empty 브라켓 사용

    return (
        <>
        <Container>
            <Row>
                <Col md={12}>
                    <h3>I've rendered {count} times!</h3>
                    <button onClick={() => setCount((c) => c + 1)} className="btn btn-outline-success mt-3 mb-3"> + </button>
                    <p className="dispaly-1 text-success">Calculation: {calculation}</p>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Effect;