import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Button, Form, Container} from "react-bootstrap";
import { ProfileType } from "../../resources/types";
import { getAllRows, selectProfile } from "../../resources/functions";
import toast from "react-hot-toast";

function ProductCreate() {
    const [sku, setSku] = useState("");
    const [name, setName] = useState("");
    const [stock, setStock] = useState(0);
    const [price, setPrice] = useState(0);
    const [userName, setUserName] = useState("");
    const [profiles, setProfiles] = useState<ProfileType[]>([]);
    const navigate = useNavigate();

    function createProduct() {
        if(sku === "" || name === "" || stock === 0 || price === 0 || userName === "") {
            toast.error("there are empty fields")
            return;
        }

        fetch("http://localhost:3001/product", 
        {method: "POST",
        body: JSON.stringify({
            sku,
            name,
            stock,
            price,
            userName
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }})
            .then(response => {
                if(response.status === 500) {
                    toast.error("product alredy exist");
                }
                else {
                    toast.success("product created")
                    navigate("/product")
                }
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    useEffect(() => {
        getAllRows("profile", setProfiles);
    }, []);

    return (
        <Container className="d-flex justify-content-center align-item-center flex-column col-md-4 mx-auto center">
            <h1 className="d-flex justify-content-center mb-5">Create new Product</h1>
            <Form>
                <Form.Group>
                    <Form.Label>SKU</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter SKU"
                        onChange={e => setSku(e.target.value)}
                    />
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter Name"
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label>Stock</Form.Label>
                    <Form.Control 
                        type="number"
                        placeholder="Enter Stock"
                        onChange={e => setStock(+e.target.value)}
                    />
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control 
                        type="number"
                        placeholder="Enter Price"
                        onChange={e => setPrice(+e.target.value)}
                    />
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label>Created by</Form.Label>
                    <Form.Select onChange={e => selectProfile(e.target.value, setUserName)}>
                        <option selected disabled>Choose a User</option>
                        {profiles.map((profile) => {
                            return <option>{profile.UserName}</option>
                        })}
                    </Form.Select>
                </Form.Group>
                <Container className="d-flex justify-content-center mt-3">
                    <Button variant="secondary" onClick={createProduct}>Create Product</Button>
                </Container>
            </Form>
        </Container>
    );
}

export default ProductCreate;