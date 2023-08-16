import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {Button, Form, Container} from "react-bootstrap";

const ClientModify = () => {
    const {clientId} = useParams();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();

    function saveClient() {
        fetch(`http://localhost:3001/client/${clientId}`, 
        {method: "PUT",
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

    useEffect(() => {
        fetch(`http://localhost:3001/client/${clientId}`, {method: "GET"})
            .then(response => response.json())
            .then(data => {
                setFirstName(data.FirstName);
                setLastName(data.LastName)
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [clientId]);

    return (
        <Container className="d-flex justify-content-center align-item-center flex-column col-md-4 mx-auto center">
            <h1 className="d-flex justify-content-center mb-5">Modify Client</h1>
            <Form>
                <Form.Control 
                    type="text"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <br/>
                <Form.Control 
                    type="text"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <Container className="d-flex justify-content-center mt-3">
                    <Button variant="secondary" onClick={saveClient}>Save Client</Button>
                </Container>
            </Form>
        </Container>
    );
}

export default ClientModify;