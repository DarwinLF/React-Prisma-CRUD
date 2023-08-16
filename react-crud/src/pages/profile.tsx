import { useState, useEffect } from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';
import { ProfileType } from '../resources/types';
import { getAllProfiles } from '../resources/functions';

const Profile = () => {
    const [profiles, setProfiles] = useState<ProfileType[]>([]);

    function deleteProfile(userName: string) {
        fetch(`http://localhost:3001/profile/${userName}`, {method: "DELETE"})
            .then(response => response.json())
            .then(data => window.location.reload())
            .catch((err) => {
                console.log(err.message);
            })
        return;
    }

    useEffect(() => {
        getAllProfiles(setProfiles);
    }, []);

    return (
        <Container className='d-flex justify-content-center flex-column col-md-5 mt-4'>
            <Button className='mt-3 mb-5 col-md-4' href='/profile/create'>Create New Profile</Button>
                <Row>
                    <Col>User Name</Col>
                    <Col xs={4}></Col>
                </Row>
                <hr/>
                {profiles.map((profile) => {
                    return (
                        <Row className='mt-4'>
                            <Col>{profile.UserName}</Col>
                            <Col xs={4}>
                                <Button variant='secondary' href={`/profile/modify/${profile.UserName}`}>Modify</Button>
                                &nbsp;
                                <Button variant='danger' onClick={e => deleteProfile(profile.UserName)}>Delete</Button>
                            </Col>
                        </Row>
                    );
                })}
        </Container>
        
    );
}

export default Profile;