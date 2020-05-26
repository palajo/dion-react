import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

import Callback from "../../../components/popup/Callback";
import ProductInfo from "../../../components/product/page/ProductInfo"
import ProductSpecs from "../../../components/product/page/ProductSpecs";

import SunflowerNew from "../../../images/products/dion-jsd-10-sunflower-new.png";

function SunflowerNewPage() {
    return (
        <>
            <Header/>
            <body>

            <ProductInfo
                productImage={SunflowerNew}
                productType="ДЫМОХОДНАЯ"
                productVendor="DION JSD-10"
                productCategory="Подсолнух #2"
                productDescription="Водонагреватели «Dion» разработаны в сдержанном стиле. Мы сделали упор на простоте
                и безопасности при эксплуатации продукта. Газовые колонки оснащены всеми необходимыми функциями
                безопасности и готовы служить вам долгие годы."
                productPrice="2399"
            />

            <ProductSpecs
                specsModel="JSD-10"
                specsTypeOfGas="Природный газ"
                specsNominalPressure="1300 Па"
                specsNominalWarmthPower="20 кВт"
                specsWorkingWaterPressure="От 0.15 до 6.00"
                specsWarmWaterOutput="10 л./мин."
                specsSizes="70х35х20"
            />

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

export default SunflowerNewPage;