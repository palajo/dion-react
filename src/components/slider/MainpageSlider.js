import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

import Waterheater from "../../images/waterheater.png";
import ArrowLeft from "../../images/arrow-left.svg";
import ArrowRight from "../../images/arrow-right.svg";

class MainpageSlider extends React.Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <>
                <div className="arrows">
                    <div className="arrow align-self-center slick-prev" onClick={this.previous}>
                        <img src={ArrowLeft} width="12px" height="24px" alt="arrow-left" />
                    </div>
                    <div className="arrow align-self-center slick-next" onClick={this.next}>
                        <img src={ArrowRight} width="12px" height="24px" alt="arrow-right" />
                    </div>
                </div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div>
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
                                        <Col lg={12} className="d-flex">
                                            <div className="product-type">ДЫМОХОДНАЯ</div>
                                            <div className="hr-100 margin-left-20 align-self-center"></div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="margin-top-15 margin-bottom-15">
                                                <div className="product-vendor">DION JSD-11,</div>
                                                <div className="product-category">Комфорт</div>
                                            </div>

                                            <div className="hr-150"></div>
                                        </Col>
                                        <Col lg={12} className="margin-top-50 margin-bottom-100 max-width-450">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                                ea commodo consequat.
                                            </p>
                                        </Col>
                                        <Col xl={10} className="d-flex">
                                            <Col lg={12}>
                                                <Row>
                                                    <button className="button">Перейти к товару</button>
                                                    <div className="span price">
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
                                        </Col>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div>
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
                                        <Col lg={12} className="d-flex">
                                            <div className="product-type">ДЫМОХОДНАЯ</div>
                                            <div className="hr-100 margin-left-20 align-self-center"></div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="margin-top-15 margin-bottom-15">
                                                <div className="product-vendor">DION JSD-11,</div>
                                                <div className="product-category">Комфорт</div>
                                            </div>

                                            <div className="hr-150"></div>
                                        </Col>
                                        <Col lg={12} className="margin-top-50 margin-bottom-100 max-width-450">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                                ea commodo consequat.
                                            </p>
                                        </Col>
                                        <Col xl={10} className="d-flex">
                                            <Col lg={12}>
                                                <Row>
                                                    <button className="button">Перейти к товару</button>
                                                    <div className="span price">
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
                                        </Col>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Slider>
            </>
        );
    }
}


export default MainpageSlider;