import React from 'react';
import { Nav, Tab, Container, Col, Row } from 'react-bootstrap';
import {Link} from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import GuaranteeImage from '../images/guarantee.jpg';
import NovaPoshta from '../images/companies/novaposhta.png';
import MeestExpress from '../images/companies/meestexpress.png';
import Automobile from '../images/automobile.svg';

function ClientsPage() {
    return (
        <>
            <Header/>
            <body>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <div className="background-blue sidebar">
                        <Nav variant="pills" className="flex-column margin-top-50">
                            <Nav.Item>
                                <Nav.Link eventKey="first" exact>Гарантия</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Доставка и оплата</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Сервисный центр</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="/contacts">Контакты</Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <div className="sidebar-active-content border-top">
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <h3 className="margin-bottom-30">Гарантия:</h3>
                                <div className="margin-bottom-50">
                                    <img src={GuaranteeImage} width="100%"/>
                                </div>
                                <p>
                                    <b className="dark">Официальная гарантия</b><br/><br/>

                                    Вся продукция Dion оригинальная и сертифицированная. На все товары предоставляется
                                    официальная гарантия от производителя. <br/>
                                    В заводской упаковке Вы найдете инструкцию, гарантийный талон и полную предусмотренную
                                    комплектацию Dion.

                                    <br/><br/><br/><b className="dark">Полезная информация</b><br/><br/>

                                    В случае поломки немедленно свяжитесь с нами. Мы проследим чтобы неполадок был устранен
                                    или заменим газовую колонку. <br/>
                                    Право на гарантийное обслуживание дает гарантийный талон. Сохраняйте его.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <h3 className="margin-bottom-50">Доставка:</h3>
                                <Row className="margin-bottom-100">
                                    <Col lg={4} className="company-icon-graphic">
                                        <Row>
                                            <Col lg={12} className="margin-bottom-20">
                                                <img src={NovaPoshta} height="30px"/>
                                            </Col>
                                            <Col lg={12}>
                                                <h4>Nova Poshta</h4>
                                            </Col>
                                            <Col lg={12}>
                                                <p className="max-width-250 margin-top-10">
                                                    Используем все варианты, которые предлагает
                                                    компания-перевозчик.
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={4} className="company-icon-graphic">
                                        <Row>
                                            <Col lg={12} className="margin-bottom-20">
                                                <img src={MeestExpress} height="30px"/>
                                            </Col>
                                            <Col lg={12}>
                                                <h4>Meest Express</h4>
                                            </Col>
                                            <Col lg={12}>
                                                <p className="max-width-250 margin-top-10">
                                                    Используем все варианты, которые предлагает
                                                    компания-перевозчик.
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={4} className="company-icon-graphic">
                                        <Row>
                                            <Col lg={12} className="margin-bottom-20">
                                                <img src={Automobile} height="30px"/>
                                            </Col>
                                            <Col lg={12}>
                                                <h4>Самовывоз</h4>
                                            </Col>
                                            <Col lg={12}>
                                                <p className="max-width-250 margin-top-10">
                                                    Только во Львове, для осуществления
                                                    свяжитесь с менеджером.
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <h3 className="margin-bottom-50">Оплата:</h3>
                                <Row className="margin-bottom-100">
                                    <Col lg={4} className="company-icon-graphic">
                                        <Row className="row">
                                            <Col lg={12} className="margin-bottom-20">
                                                <div className="icon payment">
                                                </div>
                                            </Col>
                                            <Col lg={12}>
                                                <h4>Предоплата</h4>
                                            </Col>
                                            <Col lg={12}>
                                                <p className="max-width-250 margin-top-10">
                                                    Наиболее выгодный вариант, поскольку без
                                                    комисии перевозчику.
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={4} className="company-icon-graphic">
                                        <Row className="row">
                                            <Col lg={12} className="margin-bottom-20">
                                                <div className="icon buy">
                                                </div>
                                            </Col>
                                            <Col lg={12}>
                                                <h4>Оплата при доставке</h4>
                                            </Col>
                                            <Col lg={12}>
                                                <p className="max-width-250 margin-top-10">
                                                    Наложенный платеж. Оплата при получении
                                                    и проверки товара.
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <h3 className="margin-bottom-30">Сервисный центр:</h3>
                                <p className="margin-bottom-50">
                                    Ремонт продукта или просто помощь и советы. У нас есть собственный сервисный центр,
                                    в котором специалисты работают исключительно с нашей продукцией.<br/>
                                    Вы можете быть уверены в
                                    том, что ваша покупка защищена, в надежных руках и будет возвращена настроенной на
                                    длительную работу.
                                </p>
                                <Col lg={12}>
                                    <Row>
                                        <Col lg={5}>
                                            <Row className="margin-bottom-30">
                                                <div className="icon icon-48 phone margin-right-30">
                                                </div>
                                                <div className="span align-self-center">
                                                    <p className="margin-bottom-5">
                                                        Контактный телефон:
                                                    </p>
                                                    <h5>
                                                        +38 (063) 03 16 797
                                                    </h5>
                                                </div>
                                            </Row>
                                            <Row className="margin-bottom-30">
                                                <div className="icon icon-48 mail margin-right-30">
                                                </div>
                                                <div className="span align-self-center">
                                                    <p className="margin-bottom-5">
                                                        Почта:
                                                    </p>
                                                    <h5>
                                                        service@dion.lviv.ua
                                                    </h5>
                                                </div>
                                            </Row>
                                            <Row className="margin-bottom-30">
                                                <div className="icon icon-48 map margin-right-30">
                                                </div>
                                                <div className="span align-self-center">
                                                    <p className="margin-bottom-5">
                                                        Адрес:
                                                    </p>
                                                    <h5>
                                                        г. Львов, ул. Моринецкая 8а
                                                    </h5>
                                                </div>
                                            </Row>
                                        </Col>
                                        <Col lg={7} className="border-bottom">
                                            <Row>
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1922.2878080879375!2d23.990473325502446!3d49.85298037243729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add959e071897%3A0xa04d6fe34d5a41e6!2z0YPQuy4g0KjQtdCy0YfQtdC90LrQviwgOCwg0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1sru!2sua!4v1586257069400!5m2!1sru!2sua"
                                                    width="100%"
                                                    height="300"
                                                    frameBorder="0"
                                                    allowFullScreen=""
                                                    aria-hidden="false"
                                                    tabIndex="0">
                                                </iframe>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </Tab.Container>
            </body>
            <Footer/>
        </>
    );
}

export default ClientsPage;