import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../util/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
// import data from "../util/products.js";
import logo from "../images/SnSLogo.png";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"


import "./homeStyles.css";
const data = [
    {
        title: "Tree of Life Pendant",
        brand: "Jake's Friend",
        price: 95.0,
        image: require("../images/treependant1.PNG"),
    },
    {
        title: "Deep Blue Pendant",
        brand: "Jake's Friend",
        price: 55.0,
        image: require("../images/deepbluependant.PNG"),
    },
    {
        title: "Dual Point Quartz Bronze Deer Skull",
        brand: "Jake's Friend",
        price: 55.0,
        image: require("../images/skullpendant1.PNG"),
    },
    {
        title: "Tree of Life Pendant",
        brand: "Jake's friend",
        price: 95.0,
        image: require("../images/treependant4.PNG"),
    },
    {
        title: "Tree of Life Pendant",
        brand: "Jake's friend",
        price: 95.0,
        image: require("../images/treependant5.PNG"),
    },
]

function Home() {
    // Setting our component's initial state
    const [products, setProducts] = useState([]);
    const [formObject, setFormObject] = useState({});
    // Load all books and store them with setBooks
    useEffect(() => {
        console.log("hook working");
        loadProducts();
    }, []);
    // Loads all books and sets them to books
    function loadProducts() {
        //API.get()
        setProducts(data);
        console.log(data)
    }
    return (
        <Container fluid>
            <Row>

                <Col size= "md-12">
                <Jumbotron>
                        <img src={logo} id="logo" alt="Sparkle and Swirls logo"/>
                        
                    </Jumbotron>
                
                </Col>
            
            </Row>
            <Row>
                <Col size="md-6">
                    
                    {products.length ? (
                        <List>
                            {products.map((product) => (
                                <>
                                    <Card style={{ width: "18rem" }} key={product._id}>
                                        <Card.Img variant="top" src={product.image}  width="180rem" height="180rem"/>
                                        <Card.Body className="cardBody">
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                      </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </>
                            ))}
                        </List>
                    ) : (
                        <h3>No Results to Display</h3>
                    )}
                </Col>
                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Products On My List</h1>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}
export default Home;