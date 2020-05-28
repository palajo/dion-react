import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

import Callback from "../../../components/popup/Callback";
import ProductInfo from "../../../components/product/page/ProductInfo"
import ProductSpecs from "../../../components/product/page/ProductSpecs";

import Grill from "../../../images/products/dion-jsd-10-grill.png";
import {Page} from "../../../components/categories/Categories";

function GrillPage() {
    return (
        <>
            <Header/>
            <body>

            <Page />

            <Container fluid className="padding-top-150 padding-bottom-150 background-gray">
                <Container>
                    <Row>
                        <Col className="faq">
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
                        <Col className="text-left text-lg-center align-self-center">
                            <h2 className="margin-bottom-10">Нужна помощь в выборе?</h2>
                            <h2>+38 (063) 03 16 797</h2>
                        </Col>
                    </Row>
                </Container>
            </Container>
            </body>
            <Footer/>
        </>
    );
}

export default GrillPage;