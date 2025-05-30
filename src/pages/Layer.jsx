import { Container, Row, Col } from "react-bootstrap";

const Layer = () => {
    return (
        <>
        <Container>
            <Row>
                <Col md={3}>
                    {/* ----------------------------------------------------------------basic 시작 */}
                    <h3>Basic</h3>
                    {/* 버튼 제목 */}
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#one">눌러보실?</button>
                    <div className="modal" id="one">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                {/* 버튼 타이틀 */}
                                <div className="modal-header">
                                    <h3 className="modal-title">눝눝</h3>
                                    <button className="btn-close" data-bs-dismiss="modal"></button></div>

                                {/* 버튼 내용 */}
                                <div className="modal-body">나랑 같이 눈사람 만들랭?</div>

                                {/* 버튼 하단 */}
                                <div className="modal-footer">
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        nope
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div> {/* basic 버튼 끝 */}
                </Col>

                <Col md={3}>
                    {/* ----------------------------------------------------------------animation 시작 */}
                    <h3>Add animation</h3>
                    <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#any">뚜찌빠찌뽀찌</button>
                    <div className="modal fade" id="any">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h3 className="modal-title">Bello!</h3>
                                    <button className="btn-close" data-bs-dismiss="modal"></button></div>

                                <div className="modal-body">Muak Muak Muak!</div>

                                <div className="modal-footer">
                                    <button className="btn btn-warning" data-bs-dismiss="modal">
                                        Bi-do
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={3}>
                    {/* ----------------------------------------------------------------Full screen 시작 */}
                    <h3>Full screen</h3>
                    <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#full">카아아아악</button>
                    <div className="modal fade" id="full">
                        <div className="modal-dialog modal-fullscreen">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h3 className="modal-title">penguin</h3>
                                    <button className="btn-close" data-bs-dismiss="modal"></button></div>

                                <div className="modal-body">🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧</div>

                                <div className="modal-footer">
                                    <button className="btn btn-danger" data-bs-dismiss="modal">
                                        noot
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={3}>
                    {/* ----------------------------------------------------------------Centered screen 시작 */}
                    <h3>Centered Modal</h3>
                    <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#center">카아아아악</button>
                    <div className="modal fade" id="center">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h3 className="modal-title">배고프다</h3>
                                    <button className="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                <div className="modal-body">아직도 점심 1시간 남았네</div>

                                <div className="modal-footer">
                                    <button className="btn btn-success" data-bs-dismiss="modal">
                                        떼잉
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
<br />
            <Row>
                <Col md={3}>
                    {/* ----------------------------------------------------------------Scroll screen 시작 */}
                    <h3>Scroll Modal</h3>
                    <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#scroll">금요일</button>
                    <div className="modal fade" id="scroll">
                        <div className="modal-dialog modal-dialog-scrollable">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h3 className="modal-title">집에 보내줘</h3>
                                    <button className="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                <div className="modal-body">
Minim ut sint ipsum laborum ad amet laborum in nostrud et nisi dolore anim mollit. Excepteur anim occaecat id nulla ullamco incididunt aute id dolore. Occaecat Lorem commodo veniam ullamco dolore dolore dolor eiusmod aliquip. Dolor incididunt sint mollit laborum id officia voluptate. Amet officia reprehenderit pariatur veniam dolor deserunt ullamco do cupidatat excepteur dolore minim. Sit anim commodo amet aliqua.
Qui cillum cupidatat minim ut et in. Exercitation pariatur minim dolore magna duis qui enim et minim ad. Consequat exercitation labore in mollit eiusmod ullamco reprehenderit nulla aliquip in do voluptate.
Ut laborum aute Lorem aliqua sint. In anim esse nostrud voluptate nisi ipsum laboris qui ea sunt esse. Ea dolore do sint eu elit irure mollit amet. Culpa non amet eu eiusmod irure laborum. Exercitation ex quis eiusmod minim esse sint pariatur veniam quis nisi. Occaecat dolore Lorem consectetur mollit aute est officia. Commodo aliqua ipsum pariatur voluptate aliquip.
Ullamco ea eu dolore proident irure nisi in labore nostrud nisi commodo commodo fugiat. Qui non dolore aute cupidatat dolor. Laborum fugiat ex nisi culpa amet commodo laboris. Incididunt labore occaecat cupidatat laboris. Cupidatat mollit ad consequat esse consectetur esse. Enim proident dolor laboris commodo exercitation labore occaecat occaecat eu cupidatat tempor.
Adipisicing mollit amet culpa labore nostrud amet veniam esse adipisicing in amet mollit. Fugiat labore dolore fugiat deserunt commodo laborum ipsum. Nulla commodo dolor ullamco laboris elit ullamco. Tempor reprehenderit irure quis irure deserunt duis id. Dolore nisi sunt commodo sint ex irure consequat sint nostrud. Eiusmod magna elit exercitation in sunt incididunt pariatur. Quis est tempor mollit ad consectetur dolore quis reprehenderit id magna velit consectetur.
Tempor magna sunt cillum in duis. Et in enim culpa duis commodo dolore consectetur dolor. Sit occaecat voluptate commodo est consequat ullamco reprehenderit id. Duis ullamco velit incididunt duis amet sint non irure sint eu mollit sunt nostrud sunt. Eiusmod nostrud et consequat et aliqua ipsum magna anim.
Lorem dolore exercitation tempor nostrud. Aliquip proident sint cillum labore incididunt minim et sint ut nostrud labore ullamco est. Aute duis dolore aliqua eiusmod.
Velit pariatur duis non dolor eiusmod tempor voluptate adipisicing laboris quis veniam ullamco velit. Reprehenderit pariatur nulla eu ut dolor pariatur eu ad nulla incididunt. Nulla id consectetur eiusmod nulla qui. Irure pariatur ut reprehenderit excepteur nisi deserunt in sunt ullamco voluptate minim commodo dolor. Consectetur irure excepteur elit quis duis commodo nostrud ea Lorem do id amet mollit cillum. Anim est aliqua cillum Lorem deserunt quis ad ad eiusmod id aute quis cupidatat consequat.
Esse et dolor aute ad ex nulla qui cillum laboris veniam amet cupidatat nisi. Magna duis aute culpa non. Incididunt irure quis do voluptate sit esse aliqua consequat magna exercitation sit reprehenderit. Magna in dolore tempor nulla ullamco tempor sunt occaecat nisi voluptate exercitation. Quis velit nulla aliqua velit velit irure culpa est laboris eu tempor elit nulla. Ut esse qui elit aliqua esse aliquip.
Officia nulla qui ea pariatur ipsum adipisicing duis culpa cupidatat sint sunt eu sunt. Elit ex minim deserunt dolore eiusmod cupidatat exercitation Lorem do. Enim veniam aliquip enim quis. Lorem sunt magna voluptate non adipisicing id aliqua.
                                </div>

                                <div className="modal-footer">
                                    <button className="btn btn-secondary" data-bs-dismiss="modal">
                                        안돼
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </Col>
                
            </Row>
        </Container >
        </>
    );
}

export default Layer;