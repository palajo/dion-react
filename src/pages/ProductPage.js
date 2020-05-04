import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import Waterheater from "../images/waterheater.png";
import Callback from "../components/popup/Callback";
import Order from "../components/popup/Order";

function ProductPage() {
    return (
        <>
            <Header/>
            <body>
            <Container fluid className="productpage padding-top-100 padding-bottom-100" id="about-product">
                <Container >
                    <Row className="justify-content-between">
                        <Col lg={4} className="align-self-center padding-right-50">
                            <Row className=" justify-content-center border-right border-bottom product-background">
                                <img src={Waterheater} width="60%" className="drop-shadow"/>
                            </Row>
                        </Col>
                        <Col lg={8} className="align-self-center">
                            <Row>
                                <Col lg={8}>
                                    <Row className="justify-content-center">
                                        <Col lg={9}>
                                            <Row>
                                                <div className="product-type">ДЫМОХОДНАЯ</div>
                                                <div className="hr-100 margin-left-20 align-self-center"></div>
                                            </Row>
                                            <Row>
                                                <div className="margin-top-15">
                                                    <div className="product-vendor">DION JSD-10,</div>
                                                    <div className="product-category">Премиум (Синяя)</div>
                                                    <div className="hr-150 margin-top-15"></div>
                                                </div>
                                            </Row>
                                            <Row className="margin-top-50 margin-bottom-100">
                                                <p className="margin-bottom-10 dark">
                                                    <b>Описание:</b>
                                                </p>
                                                <p>
                                                    Водонагреватели «Dion» разработаны в сдержанном стиле.
                                                    Мы сделали упор на простоте и безопасности при эксплуатации
                                                    продукта.
                                                    Газовые колонки оснащены всеми необходимыми функциями безопасности и
                                                    готовы служить вам долгие годы.
                                                </p>
                                            </Row>
                                            <Row>
                                                <Col lg={12}>
                                                    <Row>
                                                        <Order />
                                                        <div className="span margin-left-40">
                                                            <p>
                                                                Стоимость:
                                                            </p>
                                                            <div className="d-flex">
                                                                <h3 className="amount">
                                                                    2 399 <low>грн.</low>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} className="border-left">
                                    <Row className="justify-content-end">
                                        <Col lg={10}>
                                            <Row className="margin-bottom-15">
                                                <p className="dark"><b>Доступные вариации:</b></p>
                                            </Row>
                                            <Row
                                                className="padding-top-10 padding-bottom-10 padding-left-20 padding-right-20 margin-bottom-15 background-white border-bottom variation active">
                                                <img src={Waterheater} height="64px"/>
                                                <div className="align-self-center margin-left-30">
                                                    <div className="product-vendor">DION JSD-10,</div>
                                                    <div className="product-category">Премиум (Синяя)</div>
                                                </div>
                                            </Row>
                                            <Row
                                                className="padding-top-10 padding-bottom-10 padding-left-20 padding-right-20 margin-bottom-15 background-white border-bottom variation">
                                                <img src={Waterheater} height="64px"/>
                                                <div className="align-self-center margin-left-30">
                                                    <div className="product-vendor">DION JSD-10,</div>
                                                    <div className="product-category">Премиум (Синяя)</div>
                                                </div>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className="padding-top-150 padding-bottom-150" id="specs">
                <Row className="justify-content-center">
                    <h3 className="text-center">Технические характеристики</h3>
                </Row>
                <div className="space">
                </div>
                <Row className="justify-content-center">
                    <Col lg={12} className="max-width-900">
                        <table className="table justify-content-center">
                            <tbody>
                            <tr>
                                <td>Модель продукта:</td>
                                <td>JSD-10</td>
                            </tr>
                            <tr>
                                <td>Вид газа:</td>
                                <td>Природный газ</td>
                            </tr>
                            <tr>
                                <td>Номинальное давление:</td>
                                <td>1300 Па</td>
                            </tr>
                            <tr>
                                <td>Ном. тепловая мощность:</td>
                                <td>20 кВт</td>
                            </tr>
                            <tr>
                                <td>Рабочее давление воды:</td>
                                <td>От 0.15 до 6.00</td>
                            </tr>
                            <tr>
                                <td>Выход горячей воды (ΔT=25°C):</td>
                                <td>10 л./мин.</td>
                            </tr>
                            <tr>
                                <td>Габариты:</td>
                                <td>70х35х20</td>
                            </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="padding-top-150 padding-bottom-150 background-gray" id="faq">
                <Row >
                    <Container>
                        <Row>
                            <Col className="border-right">
                                <h2>
                                    Часто задаваемые вопросы:
                                </h2>
                                <ul className="max-width-400 margin-top-50 margin-bottom-50 margin-left-20 faq-list">
                                    <li data-toggle="modal" data-target="#question1">
                                        Сколько времени займет доставка? Когда я смогу
                                        установить водонагреватель?
                                    </li>
                                    <li data-toggle="modal" data-target="#question2">
                                        Какая разница между дымоходной и парапетной
                                        газовыми колонками?
                                    </li>
                                    <li data-toggle="modal" data-target="#question3">
                                        Безопасен ли наш продукт? Какими системами
                                        безопаности он оснащен?
                                    </li>
                                </ul>
                                <Callback />
                            </Col>
                            <Col className="text-center align-self-center">
                                <h2 className="margin-bottom-10">Нужна помощь в выборе?</h2>
                                <h2>+38 (063) 03 16 797</h2>
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

export default ProductPage;