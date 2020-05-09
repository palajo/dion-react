import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import Logo from '../../images/logo.svg';

import Navigation from "../navigation/Navigation";
import MobileNavigation from "../navigation/MobileNavigation";

function Header() {
    return (
        <header>
            <Container>
                <Row className="header-navigation">
                    <Col>
                        <Row>
                            <NavLink to="/">
                                <img src={Logo} className="logo" alt="dion-logo" />
                            </NavLink>
                        </Row>
                    </Col>
                    <Col className="align-self-center d-none d-lg-block dark">
                        <Navigation/>
                    </Col>
                    <MobileNavigation/>
                </Row>
            </Container>
        </header>
    );
}

export default Header;