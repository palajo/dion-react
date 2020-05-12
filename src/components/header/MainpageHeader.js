import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


import Logo from '../../images/logo.svg';
import Waterheater from '../../images/waterheater.png';

import Navigation from "../navigation/Navigation";
import MobileNavigation from "../navigation/MobileNavigation";



function MainpageHeader() {
    return (
        <header className="h-100 header-background-mainpage" id="about">
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
                                        <Link className="nav-link" to="#about">О нас</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#benefits">Перимущества</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#product-slider">Продукт</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#why-we">Почему мы?</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#contacts">Контакты</Link>
                                    </li>
                                </ul>
                            </div>
                        </Row>
                    </Col>
                    <Col className="align-self-center d-none d-lg-block">
                        <Navigation/>
                    </Col>
                    <MobileNavigation/>
                </Row>
                <Row className="header-text">
                    <Col xs={12} md={7} lg={7} className="ml-auto align-self-center">
                        <h1 className="max-width-600">
                            Газовые колонки качества
                            люкс по выгодной цене!
                        </h1>
                        <p className="margin-top-30 margin-bottom-40 max-width-450">
                            Dion – это качественный продукт с 12 месяцами гарантии.
                            Удобство, комфорт в использовании, а также доставка по всей Украинe.
                        </p>
                        <NavLink to="/catalog">
                            <button className="button">Прейти к каталогу</button>
                        </NavLink>
                    </Col>
                    <Col lg={5} md={5} className="d-none d-md-block d-lg-block">
                        <Row className="justify-content-center">
                            <div className="slider-waterheater product-background border-left border-bottom">
                                <img src={Waterheater} alt="waterheater" className="slider-waterheater-image drop-shadow"/>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default MainpageHeader;
