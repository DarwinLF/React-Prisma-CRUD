import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Button, Form, Container} from "react-bootstrap";
import "../App.css";
import { ProfileType } from "../resources/types";
import { getAllProfiles, selectProfile } from "../resources/functions";

const ClientCreate = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [profiles, setProfiles] = useState<ProfileType[]>([]);
    const navigate = useNavigate();

    function createClient() {
        if(userName === "" || firstName === "" || lastName === "") return;

        fetch("http://localhost:3001/client", 
        {method: "POST",
        body: JSON.stringify({
            firstName,
            lastName,
            userName
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
        getAllProfiles(setProfiles);
    }, []);

    return (
        <Container className="d-flex justify-content-center align-item-center flex-column col-md-4 mx-auto center">
            <h1 className="d-flex justify-content-center mb-5">Create new Profile</h1>
            <Form>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter First Name"
                        onChange={e => setFirstName(e.target.value)}
                    />
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter Last Name"
                        onChange={e => setLastName(e.target.value)}
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
                    <Button variant="secondary" onClick={createClient}>Create Client</Button>
                </Container>
            </Form>
        </Container>
    );
}

export default ClientCreate;