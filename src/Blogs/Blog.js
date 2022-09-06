import km from '../Img/01.png';
import km2 from '../Img/02.png';
import km3 from '../Img/03.png';

import { Card, Col, Container, Row } from 'react-bootstrap';
import './Blog.css';
const Blog = () => {
    return (
        <div className='pt-5 bg-secondary'>
            <Container className='  pb-3'>
                <Row xs={1} md={2} className="g-4 ">
                    {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
                    <div>
                        <Col>
                            <Card className='blog-1 '>
                                <Card.Img className='img-style ' variant="top" src={km} />
                                <Card.Body className='card-1'>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                    <div>
                        <Col>
                            <Card className='blog-1'>
                                <Card.Img className='img-style' variant="top" src={km2} />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                    <div>
                        <Col>
                            <Card className='blog-1'>
                                <Card.Img className='img-style' variant="top" src={km} />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                    <div>
                        <Col>
                            <Card className='blog-1'>
                                <Card.Img className='img-style' variant="top" src={km3} />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                    {/* ))} */}
                </Row>
            </Container>
        </div>
    );
}
export default Blog;