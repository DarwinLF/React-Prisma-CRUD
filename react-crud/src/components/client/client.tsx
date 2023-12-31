import { useState, useEffect } from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';
import { ClientType } from '../../resources/types';
import { getAllRows, deleteRow } from '../../resources/functions';

function Client() {
    const [clients, setClients] = useState<ClientType[]>([]);

    useEffect(() => {
        getAllRows("client", setClients);
    }, [clients]);

    return (
        <Container className='d-flex justify-content-center flex-column col-md-8 mt-4'>
            <Button className='mt-3 mb-5 col-md-3' href='/client/create'>Create New Client</Button>
                <Row>
                    <Col><h4>ClientID</h4></Col>
                    <Col><h4>First Name</h4></Col>
                    <Col><h4>Last Name</h4></Col>
                    <Col><h4>Created By</h4></Col>
                    <Col xs={4}></Col>
                </Row>
                <hr/>
                {clients.map((client) => {
                    return (
                        <Row className='mt-4'>
                            <Col>{client.ClientID}</Col>
                            <Col>{client.FirstName}</Col>
                            <Col>{client.LastName}</Col>
                            <Col>{client.UserName}</Col>
                            <Col xs={4}>
                                <Button variant='secondary' href={`/client/modify/${client.ClientID}`}>Modify</Button>
                                &nbsp;
                                <Button variant='danger' onClick={e => deleteRow("client", client.ClientID)}>Delete</Button>
                            </Col>
                        </Row>
                    );
                })}
        </Container>
        
    );
}

export default Client;