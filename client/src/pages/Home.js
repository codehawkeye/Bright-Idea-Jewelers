import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../util/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Home() {
    // Setting our component's initial state
    const [products, setProducts] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all books and store them with setBooks
    useEffect(() => {
        loadProducts()
    }, [])

    // Loads all books and sets them to books
    function loadProducts() {
        //API.get()
        let results = API();
        //setProducts(results);
       //     .then(res =>
       //         setProducts(res.data)
       //     )
       //     .catch(err => console.log(err));
    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h1>What Trinkets should I look at?</h1>
                    </Jumbotron>

                </Col>
                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Products On My List</h1>
                    </Jumbotron>
                    {products.length ? (
                        <List>
                            {products.map(product => (
                                <ListItem key={product._id}>
                                    <Link to={"/books/" + product._id}>
                                        <strong>
                                            {product.title} by {product.author}
                                        </strong>
                                    </Link>
                                    {/* <DeleteBtn onClick={() => deleteBook(product._id)} /> */}
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>
            </Row>
        </Container>
    );
}


export default Home;
