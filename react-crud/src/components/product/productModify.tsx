import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {Button, Form, Container} from "react-bootstrap";
import { ProfileType } from "../../resources/types";
import { getAllRows, selectProfile } from "../../resources/functions";
import toast from "react-hot-toast";

function ProductModify() {
    const {sku} = useParams();
    const [newSku, setNewSku] = useState("");
    const [name, setName] = useState("");
    const [stock, setStock] = useState(0);
    const [price, setPrice] = useState(0);
    const [userName, setUserName] = useState("");
    const [profiles, setProfiles] = useState<ProfileType[]>([]);
    const navigate = useNavigate();

    function saveProduct() {
        if(sku === "" || name === "" || stock === 0 
            || price === 0) return;

        fetch(`http://localhost:3001/product/${sku}`, 
        {method: "PUT",
        body: JSON.stringify({
            newSku,
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
                    toast.success("product saved")
                    navigate("/product")
                }
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    useEffect(() => {
        getAllRows("profile", setProfiles);
        fetch(`http://localhost:3001/product/${sku}`, {method: "GET"})
            .then(response => response.json())
            .then(data => {
                setNewSku(data.SKU);
                setName(data.Name);
                setStock(data.Stock);
                setPrice(data.Price);
                setUserName(data.UserName);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [sku]);

    return (
        <Container className="d-flex justify-content-center align-item-center flex-column col-md-4 mx-auto center">
            <h1 className="d-flex justify-content-center mb-5">Modify Product</h1>
            <Form>
                <Form.Group>
                    <Form.Label>SKU</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter SKU"
                        value={newSku}
                        onChange={e => setNewSku(e.target.value)}
                    />
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label>Stock</Form.Label>
                    <Form.Control 
                        type="number"
                        placeholder="Enter Stock"
                        value={stock}
                        onChange={e => setStock(+e.target.value)}
                    />
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control 
                        type="number"
                        placeholder="Enter Price"
                        value={price}
                        onChange={e => setPrice(+e.target.value)}
                    />
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label>Created by</Form.Label>
                    <Form.Select onChange={e => selectProfile(e.target.value, setUserName)}>
                        {profiles.map((profile) => {
                            return <option selected={profile.UserName === userName? true : false}>{profile.UserName}</option>
                        })}
                    </Form.Select>
                </Form.Group>
                <Container className="d-flex justify-content-center mt-3">
                    <Button variant="secondary" onClick={saveProduct}>Save Product</Button>
                </Container>
            </Form>
        </Container>
    );
}

export default ProductModify;