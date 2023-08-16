import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {Button, Form, Container} from "react-bootstrap";

const ProductModify = () => {
    const {sku} = useParams();
    const [newSku, setNewSku] = useState("");
    const [name, setName] = useState("");
    const [stock, setStock] = useState(0);
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();

    function saveProduct() {
        fetch(`http://localhost:3001/product/${sku}`, 
        {method: "PUT",
        body: JSON.stringify({
            newSku,
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

    useEffect(() => {
        fetch(`http://localhost:3001/product/${sku}`, {method: "GET"})
            .then(response => response.json())
            .then(data => {
                setNewSku(data.SKU);
                setName(data.Name);
                setStock(data.Stock);
                setPrice(data.Price);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [sku]);

    return (
        <Container className="d-flex justify-content-center align-item-center flex-column col-md-4 mx-auto center">
            <h1 className="d-flex justify-content-center mb-5">Modify Product</h1>
            <Form>
                <Form.Control 
                    type="text"
                    placeholder="Enter SKU"
                    value={newSku}
                    onChange={e => setNewSku(e.target.value)}
                />
                <br/>
                <Form.Control 
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <br/>
                <Form.Control 
                    type="number"
                    placeholder="Enter User Name"
                    value={stock}
                    onChange={e => setStock(+e.target.value)}
                />
                <br/>
                <Form.Control 
                    type="number"
                    placeholder="Enter User Name"
                    value={price}
                    onChange={e => setPrice(+e.target.value)}
                />
                <Container className="d-flex justify-content-center mt-3">
                    <Button variant="secondary" onClick={saveProduct}>Save Product</Button>
                </Container>
            </Form>
        </Container>
    );
}

export default ProductModify;