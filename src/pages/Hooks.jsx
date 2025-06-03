import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react"; //hooks 불러옴, 함수형 컴포넌트 상태 추적

const Hooks = () => {
    const [car, setCar] = useState({
        brand: "빈폴",
        model: "리어카",
        year: "1960",
        color: "검은색",
    });

    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "yellow" } //확장?연산자
        })
    }

    const [color, setColor] = useState("red"); //구성요소 최상위 레벨
    return (
        <>
        <Container>
            <Row>
                <Col md={12}>
                    <h3>hooks</h3>
                    <pre>
                        ◾ 함수형 컴포넌트 상태 및 기타 react 기능에 접근 → 클래스형 컴포넌트는 필요 X<br />
                        ◾ hook 3가지 규칙<br />
                        1. 함수형 컴포넌트 내부에서만 호출<br />
                        2. 구성요소 최상위 레벨에서만 호출<br />
                        3. 조건적일 수 없음
                    </pre>
                    <p>내가 선택한 색깔은 <span className="text-danger">{color}</span> !</p>
                    <p><button className="btn btn-primary" onClick={() => setColor("blue")}>파란색으로 변해볼게</button></p>
                    <p><button className="btn btn-danger" onClick={() => setColor("red")}>빨간색으로 변해볼게</button></p>
                    <p><button className="btn btn-success" onClick={() => setColor("green")}>초록색으로 변해볼게</button></p>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <p>내 차는 {car.brand}이다. 내 차의 색깔은 {car.color}이야.
                        모델은 {car.model}이고 {car.year}년식이야.
                    </p>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col md={12}>
                    <pre>
                    react 이론에 가장 중요한 메모리 소요방지 (js 스프레드 연산자)<br />
                    state가 업데이트 되면 전체 상테를 덮어씌움 (변경되는 것만 덮어씌울때)
                    </pre>
                    <button className="btn btn-warning" onClick={() => setColor("yellow")}>노란색으로 변해볼게</button>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Hooks;