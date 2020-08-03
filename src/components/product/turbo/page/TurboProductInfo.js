import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import ProductOrder from "../../components/ProductOrder";
import Breadcrumbs from "../../../navigation/Breadcrumbs";
import TurboVariationSlider from "../slider/TurboVariationSlider";

// setting Benefit parameters
type ProductInfoProps = {
    productImage: string,
    productType: string,
    productVendor: string,
    productCategory: string,
    productDescription: string,
    productPrice: number
}


export const TurboProductInfo = ({productImage, productType, productVendor, productCategory, productDescription, productPrice}: ProductInfoProps) => {
    return (
        <Container fluid className="productpage" id="about-product">
            <Container>
                <Row className="justify-content-lg-between justify-content-around">
                    <Col xs={12} md={12} lg={4} className="product-image">
                        <Row className="justify-content-center">
                            <div className="slider-waterheater">
                                <img src={productImage} alt="waterheater"
                                     className="slider-waterheater-image drop-shadow"/>
                            </div>
                        </Row>
                    </Col>
                    <Col lg={8} md={12} xs={12} className="align-self-center">
                        <Row>
                            <Col lg={8} md={7} xs={12} className="product-about">
                                <Row className="justify-content-center">
                                    <Col lg={9} xs={12}>
                                        <Row>
                                            <Breadcrumbs />
                                        </Row>
                                        <Row>
                                            <div className="product-type">{productType}</div>
                                            <div className="hr-100 margin-left-20 align-self-center"></div>
                                        </Row>
                                        <Row>
                                            <div className="margin-top-15">
                                                <div className="product-vendor">{productVendor}</div>
                                                <div className="product-category">{productCategory}</div>
                                                <div className="hr-150 margin-top-15"></div>
                                            </div>
                                        </Row>
                                        <Row className="margin-top-50 margin-bottom-100">
                                            <p className="margin-bottom-10 dark">
                                                <b>Описание:</b>
                                            </p>
                                            <p>
                                                {productDescription}
                                            </p>
                                        </Row>
                                        <Row>
                                            <Col lg={12}>
                                                <Row>
                                                    <ProductOrder
                                                        orderProductImage={productImage}
                                                        orderProductCategory={productCategory}
                                                        orderProductVendor={productVendor}
                                                        orderProductPrice={productPrice}
                                                    />
                                                    <div className="span margin-left-40">
                                                        <p>
                                                            Стоимость:
                                                        </p>
                                                        <div className="d-flex">
                                                            <h3 className="amount">
                                                                {productPrice}
                                                                <low>$</low>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={4} md={5} xs={12} className="product-variations">
                                <Row className="justify-content-end">
                                    <Col lg={12}>
                                        <Row className="margin-bottom-15">
                                            <p className="dark"><b>Доступные вариации:</b></p>
                                        </Row>
                                        <TurboVariationSlider />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default TurboProductInfo;