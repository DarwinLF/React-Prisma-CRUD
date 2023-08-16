import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Button, Form, Container} from "react-bootstrap";
import "../App.css";

const ProductCreate = () => {
    const [sku, setSku] = useState("");
    const [name, setName] = useState("");
    const [stock, setStock] = useState(0);
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();

    function createProduct() {
        fetch("http://localhost:3001/product", 
        {method: "POST",
        body: JSON.stringify({
            sku,
            name,
            stock,
            price
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }})
            .then(response => response.json())
            .then(data => navigate("/product"))
            .catch((err) => {
                console.log(err.message);
            })
    }

    return (
        <Container className="d-flex justify-content-center align-item-center flex-column col-md-4 mx-auto center">
            <h1 className="d-flex justify-content-center mb-5">Create new Product</h1>
            <Form>
                <Form.Control 
                    type="text"
                    placeholder="Enter SKU"
                    onChange={e => setSku(e.target.value)}
                />
                <br/>
                <Form.Control 
                    type="text"
                    placeholder="Enter Name"
                    onChange={e => setName(e.target.value)}
                />
                <br/>
                <Form.Control 
                    type="number"
                    placeholder="Enter Stock"
                    onChange={e => setStock(+e.target.value)}
                />
                <br/>
                <Form.Control 
                    type="number"
                    placeholder="Enter Price"
                    onChange={e => setPrice(+e.target.value)}
                />
                <Container className="d-flex justify-content-center mt-3">
                    <Button variant="secondary" onClick={createProduct}>Create Product</Button>
                </Container>
            </Form>
        </Container>
    );
}

export default ProductCreate;