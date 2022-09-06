
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './Header.css';
const saikat = () => {
    return (
        <div className='bg-secondary'>
            <Container >
            <Navbar bg="" expand="lg" className='text-light navbar-fixed'>
                <Navbar.Brand href="#home" className='text-light'>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto w-100 justify-content-end">
                        <Nav.Link href="#home" className='text-dark'>Home</Nav.Link>
                        <Nav.Link href="#link" className='text-dark'>services</Nav.Link>
                        <Nav.Link href="#home" className='text-dark'>Blog</Nav.Link>
                        <Nav.Link href="#link" className='text-dark'>review</Nav.Link>
                        {/* <div className='search  '>
                            <input className='srch  ' type="search" name="" placeholder="" />
                            <a href="/#"> <button className='btn text-light'>Search</button></a>

                        </div> */}
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            <header>
                <div id='home' className='header-section'>
                    <Row>
                        <Col md={8}><h2 className='pt-3 px-5'>
                            SHOUKATUL ISLAM
                        </h2>
                            <h4 className='px-5'>i am a new developer</h4>
                        </Col>

                        <Col><img className='pt-5' src='https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-1/305441680_574185531120722_6960495309660664748_n.jpg?stp=c3.0.240.240a_dst-jpg_p240x240&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFO_Sctmch1u5avSjoP8odj9qDuMo6RCqj2oO4yjpEKqBppOK4cKn83qXDeRhRel3dcgH8AKtH80JxW582ETxTg&_nc_ohc=K6FoLM3ZSokAX-f-bXg&_nc_ht=scontent.fjsr11-1.fna&oh=00_AT_hU_PrLMnRUOAqKXmmB2Idfhqjr5cWt_tqRu_Yo85szA&oe=631CB92C'></img></Col>
                    </Row>
                </div>
            </header>
        </Container>
        </div>



    );
}

export default saikat;
