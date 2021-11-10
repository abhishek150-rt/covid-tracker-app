import React from 'react'
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
const Dishes = ({data}) => {
    return (
        <>
             <Container>
                <Row className="d-flex justify-content-evenly bg-transparent">
                    {data.map(e => {
                        const { id, source, name, price } = e
                        return (
                            <Col md={4} key={id} className="shadow-lg my-2 rounded-2 bg-transparent">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" width="100%" height="250px" src={source}  />
                                    <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <Card.Text>
                                            Price :{price}
                                        </Card.Text>
                                        <Button variant="primary">Order Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}


                </Row>
            </Container>  
        </>
    )
}

export default Dishes
