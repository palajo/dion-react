import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import Logo from '../../images/logo.svg';
import Waterheater from '../../images/waterheater.png';

import Navigation from "../navigation/Navigation";
import { HashLink as Link } from 'react-router-hash-link';


function MainpageHeader() {
    return (
        <header className="h-100 header-background-mainpage" id="about">
            <Container fluid>
                <Container>
                    <Row className="header-navigation">
                        <Col xl={6}>
                            <Row>
                                <NavLink to="/">
                                    <img src={Logo} className="logo"/>
                                </NavLink>
                                <div className="align-self-center d-none d-lg-block">
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
                        <Col xl={6} className="align-self-center d-none d-lg-block">
                            <Navigation/>
                        </Col>
                        <Col xl={6} className="align-self-center d-lg-none">
                            <div
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent1"
                                aria-controls="navbarSupportedContent1"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <Row className="align-self-center justify-content-end burgermenu-icon-block dark"
                                     id="burgermenu-icon">
                                    <div className="span burgermenu-text z-index-1001">
                                        Меню
                                    </div>
                                    <div className="burgermenu-icon z-index-1001">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row className="background-blue mobile-nav-block d-lg-none">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                            <div>
                                <ul className="nav flex-column mobile-nav">
                                    <li className="nav-item">
                                        <a className="nav-link">Главная</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">Каталог</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">Для клиента</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">Для бизнеса</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">Контакты</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Row>
                    <Row className="header-text">
                        <div className="col-xs-12 col-lg-7 ml-auto align-self-center">
                            <h1 className="max-width-600">
                                Газовые колонки качества
                                люкс по выгодной цене!
                            </h1>
                            <p className="margin-top-30 margin-bottom-40 max-width-450">
                                Dion – это качественный продукт с 12 месяцами гарантии.
                                Удобство, комфорт в использовании, а также доставка по всей Украинe.
                            </p>
                            <a>
                                <button className="button">Прейти к каталогу</button>
                            </a>
                        </div>
                        <div className="d-none d-lg-block col-lg-5">
                            <div
                                className="d-flex justify-content-center product-background border-left border-bottom ">
                                <img src={Waterheater} width="60%" className="drop-shadow"/>
                            </div>
                        </div>
                    </Row>
                </Container>
            </Container>
        </header>
    );
}

export default MainpageHeader;
