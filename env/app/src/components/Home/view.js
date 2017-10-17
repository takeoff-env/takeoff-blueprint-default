import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default ({ props }) => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <h1>Welcome to the Takeoff React App</h1>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <p>
                        Within the Takeoff React App source code you will find a hot-reloading, batteries included
                        application that talks to the backend API provided.
                        <br />
                        You can log in to the app using the username <code>admin</code> and password{' '}
                        <code>password</code>. Once logged in you can access to the User API endpoints.
                        <br />
                        <br />Dig into the source code to see how these files are layed out and feel free to copy them
                        to make your own.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};
