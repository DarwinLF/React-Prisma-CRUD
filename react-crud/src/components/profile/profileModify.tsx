import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {Button, Form, Container} from "react-bootstrap";
import toast from "react-hot-toast";

function ProfileModify() {
    const {username} = useParams();
    const [newUserName, setNewUserName] = useState("");
    const navigate = useNavigate();

    function saveProfile() {
        if(username === "") {
            toast.error("there are empty fields")
            return;
        }
        fetch(`http://localhost:3001/profile/${username}`, 
        {method: "PUT",
        body: JSON.stringify({
            newUserName
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }})
            .then(response => {
                if(response.status === 500) {
                    toast.error("username alredy exist");
                }
                else {
                    toast.success("profile saved")
                    navigate("/profile")
                }
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    useEffect(() => {
        fetch(`http://localhost:3001/profile/${username}`, {method: "GET"})
            .then(response => response.json())
            .then(data => setNewUserName(data.UserName))
            .catch((err) => {
                console.log(err.message);
            })
    }, [username]);

    return (
        <Container className="d-flex justify-content-center align-item-center flex-column col-md-4 mx-auto center">
            <h1 className="d-flex justify-content-center mb-5">Modify Profile</h1>
            <Form>
                <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter User Name"
                        value={newUserName}
                        onChange={e => setNewUserName(e.target.value)}
                    />
                </Form.Group>
                <Container className="d-flex justify-content-center mt-3">
                    <Button variant="secondary" onClick={saveProfile}>Save Profile</Button>
                </Container>
            </Form>
        </Container>
    );
}

export default ProfileModify;