import {Container, Row, Col} from 'react-bootstrap';

const Color = () => {
    return(
        <>
        <Container>
            <Row>
                <Col>
                <h3>text-color</h3>
                <p className='text-muted'>muted 회색</p>
                <p className='text-primary'>primary 파란색</p>
                <p className='text-success'>success 초록색</p>
                <p className='text-info'>info 청록색</p>
                <p className='text-warning'>warning 노란색</p>
                <p className='text-danger'>danger 빨간색</p>
                <p className='text-secondary'>secondary 회색</p>
                <p className='text-dark'>dark 진회색</p>
                <p className='text-body'>body 기본색</p>
                <p className='text-light'>light 연회색</p>
                <p className='text-white'>white 흰색</p>
                </Col>

                <Col>
                <h3>text-color</h3>
                <div className='bg-primary p-3 text-white'>primary 파란색</div>
                <div className='bg-success p-3 text-white'>success 초록색</div>
                <div className='bg-info p-3 text-white'>info 청록색</div>
                <div className='bg-warning p-3 text-white'>warning 노란색</div>
                <div className='bg-danger p-3 text-white'>danger 빨간색</div>
                <div className='bg-secondary p-3 text-white'>secondary 회색</div>
                <div className='bg-dark p-3 text-white'>dark 진회색</div>
                <div className='bg-light p-3'>light 흰색</div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Color;