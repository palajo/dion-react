import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import Logo from '../../images/logo-white.svg';
function Footer() {
    return(
        <footer>
            <Container className="container">
                <Row className="row">
                    <Col>
                        <img src={Logo} height="40" alt="dion-logo" />
                    </Col>
                    <Col className="d-none d-md-block">
                        <p className="margin-bottom-10 footer-heading ">
                            Карта сайта:
                        </p>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Главная</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Для бизнеса</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Каталог</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Контакты</NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col className="d-none d-md-block">
                        <p className="margin-bottom-10 footer-heading">
                            Покупателю:
                        </p>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Гарантия</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Доставка и оплата</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Документы</NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <p className="margin-bottom-10 footer-heading">
                            Контакты:
                        </p>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Львов, ул. Моринецкая 8а</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">+38 (063) 03 16 797</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">+38 (097) 12 52 543</NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col className="d-none d-md-block">
                        <p className="margin-bottom-10 footer-heading">
                            Соц. сети:
                        </p>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Facebook</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Instagram</NavLink>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="padding-top-100 creator">
                    <div className="margin-bottom-15 footer-line"></div>
                    <Col>
                        <Row className="justify-content-start">
                            Дизайн и разработка — Palaj
                        </Row>
                    </Col>
                    <Col>
                        <Row className="justify-content-end">
                            © 2006 – 2020 «АГВ Импекс»
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
