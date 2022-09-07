
import { Col, Container, Row } from 'react-bootstrap';
import './Header.css';
import Saikat from '../Img/saikat.png';
const saikat = () => {
    return (
        <div id='home' className='H-bgColor'>
            <Container >
                <header>
                    <div className='header-section '>
                        <Row>
                            <Col md={8}><h2 className='contentDegin'>
                                SHOUKATUL ISLAM <br/>
                                i am a new developer
                            </h2>
                            </Col>
                            <Col>
                                <img className='w-100' src={Saikat} alt='img' />
                            </Col>
                        </Row>
                    </div>
                </header>
            </Container>
        </div>



    );
}

export default saikat;
