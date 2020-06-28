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
                                <NavLink className="nav-link" to="/">Главная</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/business">Для бизнеса</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/catalog">Каталог</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contacts">Контакты</NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col className="d-none d-md-block">
                        <p className="margin-bottom-10 footer-heading">
                            Покупателю:
                        </p>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/clients">Гарантия</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/clients">Доставка и оплата</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/clients">Сервисный центр</NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <p className="margin-bottom-10 footer-heading">
                            Контакты:
                        </p>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contacts">Львов, ул. Моринецкая 8а</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="tel:+38 (063) 03 16 797">+38 (063) 03 16 797</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="tel:+38 (097) 12 52 543">+38 (097) 12 52 543</a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="d-none d-md-block">
                        <p className="margin-bottom-10 footer-heading">
                            Соц. сети:
                        </p>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Facebook</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Instagram</a>
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
