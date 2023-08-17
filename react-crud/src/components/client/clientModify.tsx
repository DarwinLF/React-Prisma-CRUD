import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {Button, Form, Container} from "react-bootstrap";
import { ProfileType } from "../../resources/types";
import { getAllRows, selectProfile } from "../../resources/functions";
import toast from "react-hot-toast";

function ClientModify() {
    const {clientId} = useParams();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [profiles, setProfiles] = useState<ProfileType[]>([]);
    const navigate = useNavigate();

    function saveClient() {
        if(firstName === "" || lastName === "") return;

        fetch(`http://localhost:3001/client/${clientId}`, 
        {method: "PUT",
        body: JSON.stringify({
            firstName,
            lastName,
            userName
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }})
            .then(response => {
                if(response.status === 500) {
                    toast.error("client alredy exist");
                }
                else {
                    toast.success("client saved")
                    navigate("/client")
                }
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    useEffect(() => {
        getAllRows("profile", setProfiles);
        fetch(`http://localhost:3001/client/${clientId}`, {method: "GET"})
            .then(response => response.json())
            .then(data => {
                setFirstName(data.FirstName);
                setLastName(data.LastName);
                setUserName(data.UserName);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [clientId]);

    return (
        <Container className="d-flex justify-content-center align-item-center flex-column col-md-4 mx-auto center">
            <h1 className="d-flex justify-content-center mb-5">Modify Client</h1>
            <Form>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter First Name"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter Last Name"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
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
                    <Button variant="secondary" onClick={saveClient}>Save Client</Button>
                </Container>
            </Form>
        </Container>
    );
}

export default ClientModify;