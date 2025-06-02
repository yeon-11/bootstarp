import { Container, Row, Col } from "react-bootstrap";

const Form = () => {
    return (
        <>
        <Container fluid>
            <Row>
                <Col md={4}>
                    <h3>Color Picker</h3>
                    <input type="color" className="form-control form-control-color" value="#ccc"></input>
                </Col>

                <Col md={4}>
                    <h3>Stacked Form</h3>
                    <form action="/action.js" method="post">
                        <div className="mb-3 mt-3">
                            <label htmlFor="">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="이메일을 입력하세요" name="email"></input>
                        </div>

                        <div className="mb-3 mt-3">
                            <label htmlFor="pwd">Password</label>
                            <input type="password" className="form-control" id="pwd" placeholder="비밀번호를 입력하세요" name="pwd"></input>
                        </div>

                        <div className="form-check mb-3">
                            <label className="form-check-label">
                                <input type="checkbox" name="remember" className="form-check-input" />remember me</label>
                        </div>

                        <input type="submit" className="btn btn-primary" value="전송" />
                    </form>
                </Col>

                <Col md={4}>
                    <h3>Textarea</h3>
                    <div className="mb-3 mt-3">
                        <label htmlFor="comment">Comments</label>
                        <textarea className="form-control" rows="5" id="comment" name="text" placeholder="집에 가고싶어요"></textarea>
                    </div>
                </Col>
            </Row>
<br /><br />
            <Row>
                <Col md={12}>
                    <h3>Form 반응형</h3>
                    <Row>
                        <Col sm={6}><input type="email" className="form-control" placeholder="Enter Email"></input></Col>
                        <Col sm={6}><input type="password" className="form-control" placeholder="Enter Password"></input></Col>
                    </Row>
                </Col>
            </Row>
<br /><br />
            <Row>
                <Col md={12}>
                    <Row>
                        <Col sm={2}>
                            <h5>Select</h5>
                            <select name="" id="" className="form-select form-select-lg">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </Col>

                        <Col sm={2}>
                            <h5>Multiple</h5>
                            <select multiple name="" id="" className="form-select">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </Col>

                        <Col sm={2}>
                            <h5>Datalist</h5>
                            <label htmlFor="browser" className="form-label">
                                졸려용
                            </label>
                            <input className="form-control" list="browsers" name="browser" id="browser" />
                            <datalist id="browsers">
                                <option value={"Edge"} />
                                <option value={"Firefox"} />
                                <option value={"Chrome"} />
                                <option value={"Opera"} />
                                <option value={"Safari"} />
                                <option value={"Home"} />
                            </datalist>
                        </Col>

                        <Col sm={2}>
                            <h5>Checkboxs buttons</h5>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="check1" checked />
                                <label className="form-check-label" htmlFor="check1">배고파</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="check2" />
                                <label className="form-check-label" htmlFor="check2">졸려</label>
                            </div>
                            <br />
                            <h5>Radio buttons</h5>
                            <div className="form-check">
                                <input type="radio" className="form-check-input" id="check1" checked />
                                <label className="form-check-label" htmlFor="radio1">졸려</label>
                            </div>

                            <div className="form-check">
                                <input type="radio" className="form-check-input" id="check2" />
                                <label className="form-check-label" htmlFor="radio2">배고파</label>
                            </div>
                        </Col>

                        <Col sm={2}>
                            <h5>Toggle Switch</h5>
                            <div className="form-check form-switch">
                                <input type="checkbox" className="form-check-input" id="mySwitch" name="darkmode" value="yes" checked />
                                <label className="form-check-label" for="mySwitch"></label>
                            </div>
                            <div className="form-check form-switch">
                                <input type="checkbox" className="form-check-input" id="mySwitch" name="darkmode"/>
                                <label className="form-check-label" for="mySwitch"></label>
                            </div>
                        </Col>

                        <Col sm={2}>
                            <h5>Range</h5>
                            <label htmlFor="customRange" className="form-label">
                                Custom Range
                            </label>
                            <input type="range" className="form-range" id="customRange" step="10" name="points"></input>
                        </Col>
                    </Row>
                </Col>
            </Row>
<br /><br />
            <Row>
                <Col sm={4}>
                    <h3>Input Group 1</h3>
                    <div className="input-group">
                        <span className="input-group-text">@</span>
                        <input type="text" className="form-control" placeholder="Username"/>
                    </div>
                </Col>

                <Col sm={4}>
                    <h3>Input Group 2</h3>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Email"/>
                        <span className="input-group-text">@exampele.com</span>
                    </div>
                </Col>


                <Col sm={4}>
                    <h3>Input Group Size</h3>
                    <div className="input-group input-group-sm">
                        <span className="input-group-text">@</span>
                        <input type="text" className="form-control" placeholder="Username"/>
                    </div><br/>
                    <div className="input-group input-group-lg">
                        <span className="input-group-text">@</span>
                        <input type="text" className="form-control" placeholder="Username"/>
                    </div>
                </Col>
            </Row>
<br/><br/>
            <Row>
                <Col sm={4}>
                <h3>Check Group</h3>
                <div className="input-group mb-3">
                    <span className="input-group-text">One</span>
                    <span className="input-group-text">Two</span>
                    <span className="input-group-text">Three</span>
                    <input type="text" className="form-control"></input>
                </div>
                </Col>

                <Col sm={4}>
                <h3>Name</h3>
                <div className="input-group mt-3">
                    <span className="input-group-text">Person</span>
                    <input type="text" className="form-control" placeholder="First Name"/>
                    <input type="text" className="form-control" placeholder="Last Name"/>
                </div>
                </Col>

                <Col sm={4}>
                <h3>Check Text</h3>
                <div className="input-group">
                    <div className="input-group-text">
                        <input type="checkbox"/>
                    </div>
                    <input type="text" className="form-control" placeholder="Some text"/>
                </div>

                </Col>
            </Row>
<br/><br/>
            <Row>
                <Col sm={6}>
                <h3>Form-Floating</h3>
                <div className="form-floating mb-3 mt-3">
                    <input type="text" className="form-control"/>
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mb-3 mt-3">
                    <textarea className="form-control" id="comment" name="text"></textarea>
                    <label htmlFor="comment">Comments</label>
                </div>
                </Col>

                <Col sm={6}>
                <h3>Validation</h3>
                <form action="" className="was-validated">
                    <div className="">
                        <label htmlFor="">이름</label>
                        <input type="text" className="form-control" name="" required/>
                        <div className="valid-feedback">입력완료</div>
                        <div className="invalid-feedback">필수입력란</div>
                    </div>
                </form>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Form;