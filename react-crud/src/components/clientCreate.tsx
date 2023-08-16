import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Button, Form, Container} from "react-bootstrap";
import "../App.css";

const ClientCreate = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();

    function createClient() {
        fetch("http://localhost:3001/client", 
        {method: "POST",
        body: JSON.stringify({
            firstName,
            lastName
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }})
            .then(response => response.json())
            .then(data => navigate("/client"))
            .catch((err) => {
                console.log(err.message);
            })
    }

    return (
        <Container className="d-flex justify-content-center align-item-center flex-column col-md-4 mx-auto center">
            <h1 className="d-flex justify-content-center mb-5">Create new Profile</h1>
            <Form>
                <Form.Control 
                    type="text"
                    placeholder="Enter First Name"
                    onChange={e => setFirstName(e.target.value)}
                />
                <br/>
                <Form.Control 
                    type="text"
                    placeholder="Enter Last Name"
                    onChange={e => setLastName(e.target.value)}
                />
                <Container className="d-flex justify-content-center mt-3">
                    <Button variant="secondary" onClick={createClient}>Create Client</Button>
                </Container>
            </Form>
        </Container>
    );
}

export default ClientCreate;