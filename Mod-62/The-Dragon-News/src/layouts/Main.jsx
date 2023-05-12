import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}></Col>
                    <Col lg={3}>sm Visual Studio Code.lnk=true</Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;
