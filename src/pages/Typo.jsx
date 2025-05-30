import { Container, Row, Col } from "react-bootstrap";

const Typo = () => {
    return (
        <>
        <Container>
            <Row>
                <Col>
                <p className="text-break">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</p>
                </Col>
            </Row>

            <Row>
                <Col lg={3} className="border">
                    <h3>abbr</h3>
                    <p>약어 👉 마우스를 올리면 ?가 있는 커서모양 지정</p>
                    <section>the <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</section> {/*title 적어줘야함*/}
                </Col>

                <Col lg={3} className="border">
                    <h3>blockpuote</h3>
                    <p>인용문 👉 짧은(p)인용, 긴(blockquote)인용</p>
                    <blockquote className="blockquote">
                        <p>점심시간 1시간 남았다</p>
                        <footer className="blockquote-footer">배고파</footer>
                    </blockquote>
                </Col>

                <Col lg={3} className="border">
                    <h3>그외</h3>
                    <p>
                        .lead 👉 텍스트를 살짝 크게, 강조된 느낌<br />
                        .text-start 👉 왼쪽 정렬<br />
                        .text-break 👉 가로폭에 맞게 글씨 끊어줌<br /> 
                        .text-center 👉 중앙 정렬<br />
                        .text-decoration-none 👉 밑줄 제거<br />
                        .text-end 👉 오른쪽 정렬<br />
                    </p>
                </Col>

                <Col lg={3} className="border">
                    <h3>그외2</h3>
                    <p>
                        .text-nowrap 👉 줄바꿈 방지<br />
                        .text-lowercase 👉 소문자<br />
                        .text-uppercase 👉 대문자<br />
                        .text-capitalize 👉 첫글자만 대문자<br />
                        .initalism 👉 작은 대문자<br />
                        .list-unstyled 👉 기호 없이 리스트 출력<br />
                        .list-inline 👉 가로 나열<br />
                    </p>
                </Col>
            </Row>

            <Row>
                <Col lg={3} className="border">
                    <h3 className="mt-5 mb-3">
                        Typography
                    </h3>
                    {/* <div className="d-flex"> */}
                    <p className="h1">h1</p>
                    <p className="h2">h2</p>
                    <p className="h3">h3</p>
                    <p className="h4">h4</p>
                    <p className="h5">h5</p>
                    <p className="h6">h6</p>
                    {/* </div> */}
                </Col>

                <Col lg={3} className="border">
                    <h3 className="mt-5 mb-3">
                        .display 👉 h1~6 보다 더 큰 글씨를 사용하고 싶을때
                    </h3>
                </Col>

                <Col lg={3} className="border">
                    <div>
                        <h3 className="display-1">display 1</h3>
                        <h3 className="display-2">display 2</h3>
                        <h3 className="display-3">display 3</h3>
                        <h3 className="display-4">display 4</h3>
                        <h3 className="display-5">display 5</h3>
                        <h3 className="display-6">display 6</h3>
                    </div>
                </Col>

                <Col lg={3} className="border">
                    <h3 className="mt-5 mb-3">
                        kbd 👉 키보드 태그
                    </h3>
                    <p>use <kbd>ctrl + p</kbd> to open</p>

                    <h3 className="mt-5 mb-3">
                        정의 list
                    </h3>
                    <dl>
                        <dt>Coffee</dt>
                        <dd>바닐라라떼</dd>
                    </dl>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Typo;