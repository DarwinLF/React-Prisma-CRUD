import { useState, useEffect } from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';
import { ProductType } from '../../resources/types';
import { getAllRows, deleteRow } from '../../resources/functions';

function Product() {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        getAllRows("product", setProducts);
    }, [products]);

    return (
        <Container className='d-flex justify-content-center flex-column col-md-11 mt-4'>
            <Button className='mt-3 mb-5 col-md-3' href='/product/create'>Create New Product</Button>
                <Row>
                    <Col><h4>SKU</h4></Col>
                    <Col><h4>Name</h4></Col>
                    <Col><h4>Stock</h4></Col>
                    <Col><h4>Price</h4></Col>
                    <Col><h4>Total</h4></Col>
                    <Col><h4>Created By</h4></Col>
                    <Col xs={3}></Col>
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
                            <Col>{product.UserName}</Col>
                            <Col xs={3}>
                                <Button variant='secondary' href={`/product/modify/${product.SKU}`}>Modify</Button>
                                &nbsp;
                                <Button variant='danger' onClick={e => deleteRow("product", product.SKU)}>Delete</Button>
                            </Col>
                        </Row>
                    );
                })}
        </Container>
        
    );
}

export default Product;