import Header from "../../../header/Header";
import ProductInfo from "./PremiumProductInfo";
import ProductSpecs from "../../components/ProductSpecs";
import {Col, Container, Row} from "react-bootstrap";
import Callback from "../../../popup/Callback";
import Footer from "../../../footer/Footer";
import React from "react";
import PremiumApi from "../api/PremiumApi";
import {Helmet} from "react-helmet";

const PremiumProductView = ({match}) => {
    
    const product = PremiumApi.find(item => item.id === match.params.id);
    console.log(PremiumApi, match.params.id)

    return(
        <>
            <Helmet>
                <title>{product.brand} {product.model}, {product.title} – Газовые колонки от 2399 грн.</title>
                <meta charSet="utf-8" />
                <meta name="description" content={`${product.brand} ${product.model}, ${product.title} — газовые проточные
                водонагреватели с открытой камерой сгорания, которые обеспечат производительность горячей воды 10 л/мин,
                чего достаточно для 2-х точек водоразбора`} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="http://dion.lviv.ua/" />
            </Helmet>
            <Header/>
            <body>
            <ProductInfo
                productImage={product.imagesmall}
                productType={product.type}
                productVendor={product.brand + " " + product.model}
                productCategory={product.title}
                productDescription={product.description}
                productPrice={product.price}
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
                            <h2>+38 (050) 330 36 10</h2>
                        </Col>
                    </Row>
                </Container>
            </Container>
            </body>
            <Footer/>
        </>
    );
}

export default PremiumProductView;