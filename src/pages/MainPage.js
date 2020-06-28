import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Helmet} from "react-helmet";


import Footer from "../components/footer/Footer";
import ProductsSlider from "../components/slider/ProductsSlider";
import OffersSlider from "../components/slider/OffersSlider";
import MainpageHeader from "../components/header/MainpageHeader";

function MainPage() {
    return(
        <>
            <Helmet>
                <title>Газовые колонки Dion – Доставка по всей Украине – от 2399 грн.</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Газовые проточные водонагреватели Dion по самым выгодным ценам
                и доставкой по всей Украине от 2399 грн." />
                <meta name="robots" content="index, follow" />

                <link rel="canonical" href="http://dion.lviv.ua/" />
            </Helmet>
            <MainpageHeader />
            <OffersSlider />
            <body>
            <Container className="padding-top-150 padding-bottom-150 container-1200" id="benefits">
                <Row className="justify-content-center">
                    <h3 className="text-center">Безопасность. Вот то, что имеет значение.</h3>
                </Row>
                <div className="space">
                </div>
                <Row>
                    <Container>
                        <Row className="benefits">
                            <Col md={6} className="border-bottom border-right border-mobile-none">
                                <Row className="justify-content-center justify-content-lg-end">
                                    <div className="icon fire">
                                    </div>
                                    <div className="span">
                                        <h4 className="text-center text-lg-left">
                                            Защита от пропажи<br/>
                                            пламени
                                        </h4>
                                        <p className="margin-top-10 max-width-300 text-center text-lg-left">
                                            Если при порывистом мощном ветре пламя
                                            затухнет, то водонагреватель отключиться.
                                        </p>
                                    </div>
                                </Row>
                            </Col>
                            <Col md={6} className="border-bottom border-mobile-none">
                                <Row className="justify-content-center justify-content-lg-end">
                                    <div className="icon pressure">
                                    </div>
                                    <div className="span">
                                        <h4 className="text-center text-lg-left">
                                            Защита от чрезмерного<br/>
                                            давления
                                        </h4>
                                        <p className="margin-top-10 max-width-300 text-center text-lg-left">
                                            При высоких перепадах давления воды газовая
                                            колонка отключиться предотвратив поломку.
                                        </p>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="benefits">
                            <Col md={6} className="border-right border-mobile-none">
                                <Row className="justify-content-center justify-content-lg-end">
                                    <div className="icon temperature">
                                    </div>
                                    <div className="span">
                                        <h4 className="text-center text-lg-left">
                                            Защита от излишнего<br/>
                                            перегрева
                                        </h4>
                                        <p className="margin-top-10 max-width-300 text-center text-lg-left">
                                            Вы можете быть спокойны. Наши газовые
                                            колонки безопсаны и удобны в использовании.
                                        </p>
                                    </div>
                                </Row>
                            </Col>
                            <Col md={6} className="border-mobile-none">
                                <Row className="justify-content-center justify-content-lg-end">
                                    <div className="icon wind">
                                    </div>
                                    <div className="span">
                                        <h4 className="text-center text-lg-left">
                                            Защита от нехватки<br/>
                                            тяги
                                        </h4>
                                        <p className="margin-top-10 max-width-300 text-center text-lg-left">
                                            Если дымоход неисправен или же просто не хватает
                                            тяги, колонка также отключиться.
                                        </p>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
            <Container fluid className="background-gray padding-none" id="product-slider">
                <ProductsSlider />
            </Container>
            <Container className="padding-top-150 padding-bottom-150" id="why-we">
                <Row className="justify-content-center">
                    <h3 className="text-center">Взгляните на статистику!</h3>
                </Row>
                <div className="space">
                </div>
                <Row className="stats">
                    <Col xs={12} md={4} lg={4}>
                        <Row>
                            <Col lg={12} className="d-flex justify-content-center">
                                <div className="icon waterheater margin-bottom-30">
                                </div>
                            </Col>
                            <Col lg={12} className="d-flex justify-content-center">
                                <h4>200 000 в эксплуатации</h4>
                            </Col>
                            <Col lg={12} className="d-flex justify-content-center">
                                <p className="text-center max-width-250 margin-top-10">
                                    Эта цифра доказывает, что наш продукт
                                    надежен и люди выбирают его!
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <Row>
                            <Col lg={12} className="d-flex justify-content-center">
                                <div className="icon clock margin-bottom-30">
                                </div>
                            </Col>
                            <Col lg={12} className="d-flex justify-content-center">
                                <h4>14 лет на рынке</h4>
                            </Col>
                            <Col lg={12} className="d-flex justify-content-center">
                                <p className="text-center max-width-250 margin-top-10">
                                    За это время мы построили крепкий и
                                    надежный бренд. Будьте уверены в нас.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <Row>
                            <Col lg={12} className="d-flex justify-content-center">
                                <div className="icon waterheater margin-bottom-30">
                                </div>
                            </Col>
                            <Col lg={12} className="d-flex justify-content-center">
                                <h4>Гарантия качества</h4>
                            </Col>
                            <Col lg={12} className="d-flex justify-content-center">
                                <p className="text-center max-width-250 margin-top-10">
                                    Мы переживаем за нашу репутацию и
                                    поэтому производим качественное!
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="padding-top-150 padding-bottom-150 background-gray" id="contact-us">
                <Container className="max-width-900">
                    <Row className="justify-content-center">
                        <h3 className="text-center">Есть вопросы? Мы ответим!</h3>
                    </Row>
                    <div className="space">
                    </div>
                    <Row className="justify-content-center">
                        <form className="w-100">
                            <Row>
                                <Col>
                                    <label>Имя:</label>
                                    <input type="text" className="form-control my-form-input-name"
                                           placeholder="Иван..." />
                                </Col>
                                <Col>
                                    <label>E-mail:</label>
                                    <input type="text" className="form-control my-form-input-name"
                                           placeholder="admin@dion.lviv.ua.." />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <label>Ваш вопрос:</label>
                                    <textarea className="form-control my-form-input-message margin-bottom-40"
                                              placeholder="Опишите ваш вопрос вкратце.." rows="5" />
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <button className="button">Отправить</button>
                            </Row>
                        </form>
                    </Row>
                </Container>
            </Container>
            </body>
            <Footer />
        </>
    );
}

export default MainPage;
