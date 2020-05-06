import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import Waterheater from '../images/waterheater.png';
import Partner from '../components/popup/Partner';

function BusinessPage() {
    return (
        <>
            <Header/>
            <body>
                <Container fluid className="padding-none">
                    <Row className="business-slider margin-none">
                        <Col xs={12} lg={6} className="background-white-95">
                            <Row className="justify-content-center h-100">
                                <Col xs={12} lg={8} className="align-self-center">
                                    <h1>
                                        Оптовая торговля с Dion
                                        это просто!
                                    </h1>
                                    <p className="max-width-400 margin-top-30 margin-bottom-30">
                                        Заполните анкету и мы сразу же ее рассмотрим. Работать с
                                        нами это выгодно, ведь мы лояльны к своим партнерам.
                                        Мы рады сотрудничеству!
                                    </p>
                                    <Partner />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container className="padding-top-150 padding-bottom-150">
                    <Row className="justify-content-center">
                        <h3 className="text-center">Как мы работаем?</h3>
                    </Row>
                    <div className="space">
                    </div>
                    <Row>
                        <Col xs={12} md={12} lg={4}>
                            <Row>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <div className="icon deal margin-bottom-30">
                                    </div>
                                </Col>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <h4>Договариваемся</h4>
                                </Col>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <p className="text-center max-width-250 margin-top-10">
                                        Составляем договор, согласовываем цены и
                                        сроки доставки.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={12} lg={4}>
                            <Row>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <div className="icon delivery margin-bottom-30">
                                    </div>
                                </Col>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <h4>Доставляем</h4>
                                </Col>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <p className="text-center max-width-250 margin-top-10">
                                        Используем исключительно проверенне
                                        логистические компании.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={12} lg={4}>
                            <Row>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <div className="icon money margin-bottom-30">
                                    </div>
                                </Col>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <h4>Зарабатываем</h4>
                                </Col>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <p className="text-center max-width-250 margin-top-10">
                                        Вы заботитесь о розничных продажах,
                                        мы – о качестве продукции.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="background-gray">
                    <Row className="margin-none">
                        <Col xs={12} md={12} lg={6}
                             className="d-flex justify-content-center padding-top-100 padding-bottom-100 product-slider-background">
                            <div className="d-flex justify-content-center background-white example-image">
                                <img src={Waterheater} className="drop-shadow" width="90%" alt="dion-waterheater" />
                            </div>
                        </Col>
                        <Col xs={12} md={12} lg={6}
                             className="ml-auto align-self-center padding-top-100 padding-bottom-100">
                            <Row className="justify-content-center slider-info">
                                <Col xs={12} md={12} lg={9}>
                                    <h2>
                                        Что вы получите от партнерства?
                                    </h2>
                                    <ul className="max-width-400 margin-top-50 margin-bottom-50 margin-left-20 faq-list">
                                        <li>
                                            <b>Цену ниже рыночной.</b> Одно из наиболее выгодных предложений на рынке
                                            газовых колонок.
                                        </li>
                                        <li>
                                            <b>Качественную продукцию.</b> Мы заботимся о каждой партии водонагревателей
                                            и недопускаем бракованые екземпляры.
                                        </li>
                                        <li>
                                            <b>Лояльного партнера.</b> Мы в Dion позаботмся о вас и войдем в любое
                                            положение дел, чтобы оказать помощь.
                                        </li>
                                    </ul>
                                    <Partner />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container className="padding-top-150 padding-bottom-150 container-1200" id="benefits">
                    <Row className="justify-content-center">
                        <h3 className="text-center">14 лет опыта торговли. Уверенно!</h3>
                    </Row>
                    <div className="space">
                    </div>
                    <Row>
                        <Container>
                            <Row className="benefits">
                                <Col md={6} className="border-bottom border-right border-mobile-none">
                                    <Row className="justify-content-center justify-content-lg-end">
                                        <div className="icon certified">
                                        </div>
                                        <div className="span">
                                            <h4 className="text-center text-lg-left">
                                                Только сертифицированный<br />
                                                товар
                                            </h4>
                                            <p className="margin-top-10 max-width-300 text-center text-lg-left">
                                                Мы занимаемся торговлей с 2005,
                                                делаем это честно и прозрачно!
                                            </p>
                                        </div>
                                    </Row>
                                </Col>
                                <Col md={6} className="border-bottom border-mobile-none">
                                    <Row className="justify-content-center justify-content-lg-end">
                                        <div className="icon revision">
                                        </div>
                                        <div className="span">
                                            <h4 className="text-center text-lg-left">
                                                Тщательная проверка<br />
                                                перед отгрузкой
                                            </h4>
                                            <p className="margin-top-10 max-width-300 text-center text-lg-left">
                                                Все отправляемые екземпляры проходят провреку
                                                перед отгрузкой.
                                            </p>
                                        </div>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="benefits">
                                <Col md={6} className="border-right border-mobile-none">
                                    <Row className="justify-content-center justify-content-lg-end">
                                        <div className="icon delivery">
                                        </div>
                                        <div className="span">
                                            <h4 className="text-center text-lg-left">
                                                Доставка в течении<br />
                                                2-3 дней.
                                            </h4>
                                            <p className="margin-top-10 max-width-300 text-center text-lg-left">
                                                Мы используем "Nova Poshta" или же "Meest Express".
                                                Доверяем им!
                                            </p>
                                        </div>
                                    </Row>
                                </Col>
                                <Col md={6} className="border-mobile-none">
                                    <Row className="justify-content-center justify-content-lg-end">
                                        <div className="icon money">
                                        </div>
                                        <div className="span">
                                            <h4 className="text-center text-lg-left">
                                                Газовые колонки Dion – это<br />
                                                всесезонный товар
                                            </h4>
                                            <p className="margin-top-10 max-width-300 text-center text-lg-left">
                                                У товара нету строка годности, продается как летом,
                                                так и зимой.
                                            </p>
                                        </div>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                </Container>
            </body>
            <Footer/>
        </>
    );
}

export default BusinessPage;