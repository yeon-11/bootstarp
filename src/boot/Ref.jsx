import { useState, useEffect, useRef } from "react";
//useState: 상태를 관리
//useEffect: 특정 상태가 변경될때 어떤 부수효과(side effect)를 실행
//useRef: 참조값 저장, 렌더링간 값 유지 → 변경해도 리렌더링 발생Xx

import { Container, Row, Col } from "react-bootstrap";

const Ref = () => {
    const [inputValue, setInputValue] = useState("");
    //inputValue: 현재 input 값
    //setInputValue: input 값 변경
    //useState: 초기값 비어있음 ("")

    const previousInputValue = useRef("");
    //previousInputValue: 컴포넌트가 리렌더링이 되어도 변하지 않는 참조 객체

    // const count = useRef(0);

    useEffect(() => {
        previousInputValue.current = inputValue;
        //current: 이전 입력값 저장
        //previousInputValue.current: 현재값

        // count.current = count.current + 1;
    }, [inputValue]); //inputValue: 변경될때마다 useEffect 실행

    return (
        <>
        <Container>
            <Row>
                <Col>
                    <h3 className="mt-4 mb-2">useRef Hook</h3>
                    <pre>
                        ◾ 렌더링간의 값 유지<br />
                        ◾ 업데이트시 다시 렌더링 발생시키지 않는 변경 가능한 값을 저장하는데 사용<br />
                        ◾ 불필요한 렌더링 방지, 상태변경 추적<br /><br />
                        ◽ inputValue: 현재 input 값<br />
                        ◽ setInputValue: input 값 변경<br />
                        ◽ useState: 초기값 비어있음 ("")<br />
                        ◽ previousInputValue: 컴포넌트가 리렌더링이 되어도 변하지 않는 참조 객체<br />
                        ◽ current: 이전 입력값 저장<br />
                        ◽ previousInputValue.current: 현재값<br />
                        ◽ inputValue: 변경될때마다 useEffect 실행
                    </pre>
                    <hr />
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="form-control my-5">
                    </input>
                    {/* <h3>Render Count : {count.current}</h3> */}
                    <h3>현재값 : {inputValue}</h3>
                    <h3>이전값 : {previousInputValue.current}</h3>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Ref;