import { Col, Container, Row } from "react-bootstrap";

function RentalItem({title, author, rate, availableItems}){

    return(
        <>
            <Container fluid>
                <Row>
                    <Col>Title:</Col>
                    <Col>{title}</Col>
                </Row>

                <Row>
                    <Col>Author:</Col>
                    <Col>{author}</Col>
                </Row>

                <Row>
                    <Col>Rate:</Col>
                    <Col>{rate}</Col>
                </Row>

                <Row>
                    <Col>Available items:</Col>
                    <Col>{availableItems}</Col>
                </Row>
            </Container>
        </>
    )

}

export default RentalItem;