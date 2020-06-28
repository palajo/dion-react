import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Callback from "../components/popup/Callback";
import {Helmet} from "react-helmet";

function ContactsPage() {
    return (
        <>
            <Helmet>
                <title>Контакты – Газовые колонки Dion – от 2399 грн.</title>
                <meta charSet="utf-8" />
                <meta name="description" content={`Звоните! Мы всегда рады ответить на все Ваши вопросы. Dion всегда 
                готов решить все пробелмы с нагреванием воды.`} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="http://dion.lviv.ua/" />
            </Helmet>
            <Header/>
            <body>
                <Container fluid className="background-dark">
                    <Row>
                        <Col lg={6} md={7} xs={12}>
                            <Row className="justify-content-center h-100 contacts-slider">
                                <Col lg={8} className="align-self-center">
                                    <h1 className="white">
                                        Мы будем рады ответить<br/>
                                        на все ваши вопросы!
                                    </h1>
                                    <p className="max-width-400 margin-top-30 margin-bottom-30 light-gray">
                                        Нужна помощь при выборе газовой колонки? Не переживайте,
                                        звоните! По любому интерисующему вопросу связанному с
                                        нами – звоните, мы рады помочь!
                                    </p>
                                    <Callback />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={5} xs={12}>
                            <Row className="justify-content-end h-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1922.2878080879375!2d23.990473325502446!3d49.85298037243729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add959e071897%3A0xa04d6fe34d5a41e6!2z0YPQuy4g0KjQtdCy0YfQtdC90LrQviwgOCwg0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1sru!2sua!4v1586257069400!5m2!1sru!2sua"
                                    className="contacts-map"
                                    frameBorder="0"
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex="0"
                                    title="office"
                                >
                                </iframe>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container className="padding-top-150 padding-bottom-150">
                    <Row className="justify-content-center">
                        <h3 className="text-center">Контактные данные:</h3>
                    </Row>
                    <div className="space">
                    </div>
                    <Row className="justify-content-center">
                        <Col lg={12} className="max-width-900">
                            <table className="table justify-content-center">
                                <tbody>
                                    <tr>
                                        <td>E-mail:</td>
                                        <td><a href="mailto:admin@dion.lviv.ua">sales@dion.lviv.ua</a></td>
                                    </tr>
                                    <tr>
                                        <td>Мобильный телефон:</td>
                                        <td><a href="tel:+38 (050) 330 36 10">+38 (050) 330 36 10</a></td>
                                    </tr>
                                    <tr>
                                        <td>Офисный телефон:</td>
                                        <td><a href="tel:+38 (032) 243 70 64">+38 (032) 243 70 64</a></td>
                                    </tr>
                                    <tr>
                                        <td>Рабочее время:</td>
                                        <td>Пн - Пт: 9:00 - 17:00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>
            </body>
            <Footer/>
        </>
    );
}

export default ContactsPage;