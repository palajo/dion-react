import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import Logo from '../../images/logo.svg';
import Navigation from "../navigation/Navigation";
import MobileNavigation from "../navigation/MobileNavigation";


function MainpageHeader() {
    return (
        <header>
            <Container>
                <Row className="header-navigation">
                    <Col>
                        <Row>
                            <NavLink to="/">
                                <img src={Logo} className="logo" alt="dion-logo"/>
                            </NavLink>
                            <div className="align-self-center d-none d-xl-block">
                                <ul className="nav margin-left-50">
                                    <li className="nav-item">
                                        <Link smooth={true} className="nav-link" to="#about">О нас</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link smooth={true} className="nav-link" to="#benefits">Перимущества</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link smooth={true} className="nav-link" to="#products">Продукт</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link smooth={true} className="nav-link" to="#why-we">Почему мы?</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link smooth={true} className="nav-link" to="#contact-us">Контакты</Link>
                                    </li>
                                </ul>
                            </div>
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

export default MainpageHeader;
