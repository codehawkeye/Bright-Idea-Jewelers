import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../util/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import data from "../util/products.json"


function Home() {
    // Setting our component's initial state
    const [products, setProducts] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all books and store them with setBooks
    useEffect(() => {
        console.log("hook working");
        loadProducts()
    }, [])

    // Loads all books and sets them to books
    function loadProducts() {
        //API.get()
        setProducts(data)
        // API.getProducts().then(response => {
        //     console.log(response.data.search_results)
            
        //     // console.log(products)
        //     // let resultsVar = (response.data.search_results)
        //     // console.log(response)
        //     // console.log(response.data.search_results)
        // })
        
        //setProducts(results);
       //     .then(res =>
       //         setProducts(res.data)
       //     )
       //     .catch(err => console.log(err));
    };
    // function show_image(src, width, height, alt) {
    //     var img = document.createElement("img");
    //     img.src = src;
    //     img.width = width;
    //     img.height = height;
    //     img.alt = alt;
    
    //     // This next line will just add it to the <body> tag
    //     document.list.appendChild(img);
    // }
    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h1>What Trinkets should I look at?</h1>
                    </Jumbotron>
                    {products.length ? (
                        <List>
                            
                            {products.map(product => (
                                <ListItem key={product._id}>
                                    <Link to={"/products/" + product._id}>
                                        <strong>
                                            {product.title}
                                        </strong>
                                        <br></br>
                                        <img src={product.image} />
                                    </Link>
                                    {/* <DeleteBtn onClick={() => deleteBook(product._id)} /> */}
                                </ListItem>)
                            )}
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
