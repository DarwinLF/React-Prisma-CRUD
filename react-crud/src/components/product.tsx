import { useState, useEffect } from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';

type ProductType = {
    SKU: string,
    Name: string,
    Stock: number,
    Price: number
}

const Product = () => {
    const [products, setProducts] = useState<ProductType[]>([]);

    function deleteProduct(sku: string) {
        fetch(`http://localhost:3001/product/${sku}`, {method: "DELETE"})
            .then(response => response.json())
            .then(data => window.location.reload())
            .catch((err) => {
                console.log(err.message);
            })
        return;
    }

    useEffect(() => {
        fetch("http://localhost:3001/product", {method: "GET"})
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch((err) => {
                console.log(err.message);
            })
    }, []);

    return (
        <Container className='d-flex justify-content-center flex-column col-md-8 mt-4'>
            <Button className='mt-3 mb-5 col-md-4' href='/product/create'>Create New Product</Button>
                <Row>
                    <Col><h4>SKU</h4></Col>
                    <Col><h4>Name</h4></Col>
                    <Col><h4>Stock</h4></Col>
                    <Col><h4>Price</h4></Col>
                    <Col><h4>Total</h4></Col>
                    <Col xs={4}></Col>
                </Row>
                <hr />
                {products.map((product) => {
                    return (
                        <Row className='mt-4'>
                            <Col>{product.SKU}</Col>
                            <Col>{product.Name}</Col>
                            <Col>{product.Stock}</Col>
                            <Col>{product.Price}</Col>
                            <Col>{product.Stock * product.Price}</Col>
                            <Col xs={4}>
                                <Button variant='secondary' href={`/product/modify/${product.SKU}`}>Modify</Button>
                                &nbsp;
                                <Button variant='danger' onClick={e => deleteProduct(product.SKU)}>Delete</Button>
                            </Col>
                        </Row>
                    );
                })}
        </Container>
        
    );
}

export default Product;