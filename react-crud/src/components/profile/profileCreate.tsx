import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Button, Form, Container} from "react-bootstrap";
import toast from "react-hot-toast";

function ProfileCreate() {
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    function createProfile() {
        if(userName === "") return;

        fetch("http://localhost:3001/profile", 
        {method: "POST",
        body: JSON.stringify({
            userName
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }})
            .then(response => {
                if(response.status === 500) {
                    toast.error("username alredy exist");
                }
                else {
                    toast.success("profile created")
                    navigate("/profile")
                }
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    return (
        <Container className="d-flex justify-content-center align-item-center flex-column col-md-4 mx-auto center">
            <h1 className="d-flex justify-content-center mb-5">Create new Profile</h1>
            <Form>
                <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter User Name"
                        onChange={e => setUserName(e.target.value)}
                    />
                </Form.Group>
                <Container className="d-flex justify-content-center mt-3">
                    <Button variant="secondary" onClick={createProfile}>Create Profile</Button>
                </Container>
            </Form>
        </Container>
    );
}

export default ProfileCreate;