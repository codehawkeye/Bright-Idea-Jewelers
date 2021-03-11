import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../util/API";
import deepblue from "../images/SampleDeepBluePendant copy.PNG";
import { Card, Button } from "react-bootstrap";
import './homeStyles.css';
import "bootstrap/dist/css/bootstrap.min.css"


function Detail(props) {
    const [book, setBook] = useState({})

    // When this component mounts, grab the book with the _id of props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    // const { id } = useParams()
    // // useEffect(() => {
    // //     API.getBook(id)
    // //         .then(res => setBook(res.data))
    // //         .catch(err => console.log(err));
    // }, [])

    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h3> Deep Blue Pendent </h3>
                        <h2></h2>
                    <img src={deepblue} id="deepblue" alt="sample pendeant" width= "500rem" height = "500rem" />
                    </Jumbotron>
                </Col>
                <Col size="md-3">
                    <Jumbotron>
                        <h4>Price: $95.00</h4>
                        <h5>Dark Blue and Silver Tear Drop Pendent- Genuine Stone- Rock Crystal -Sterling Silver Necklace - Vintage Inspired.

                        Ever wonder what happened to the jewel at the end of Titanic? Look no further!

                        Beautiful elegant necklace that is sure to turn some heads.

                        Perfect gift for weddings, anniversaries, birthdays, or graduations.

                        All items are uniquely crafted by Jake's Friend.co and ready for shipment within 3 days.
 </h5>
 <button type="button" class="btn btn-primary">Click to purchase</button>
                        <div></div>
                        
                    </Jumbotron>
                </Col>
                <Col size="md-3">
                    <Jumbotron>
                        <h1>
                            {/* {product.title} by {product.brand} */}
                        </h1>
                    </Jumbotron>
                </Col>
            </Row>        
        </Container>
    );
}


export default Detail;
