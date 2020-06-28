import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

import { NavLink } from 'react-router-dom';

import ArrowLeft from "../../images/arrow-left.svg";
import ArrowRight from "../../images/arrow-right.svg";

import PhotopanelImage from "../../images/products/small/dion-jsd-10-sunflower.png";
import VictoriaImage from "../../images/products/small/victoria-jsd-08-summer.png";
import PremiumImage from "../../images/products/small/dion-jsd-10-premium-black.png";
import TurboImage from "../../images/products/small/dion-jsd-10-turbo.png";

class ProductsSlider extends React.Component {

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
                <div className="arrows" id="products">
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
                            <Col xs={12} md={6} lg={6} className="product-slider-background padding-top-100 padding-bottom-100">
                                <Row className="justify-content-center h-100">
                                    <div className="slider-waterheater align-self-center max-width-60-percent">
                                        <img src={PhotopanelImage} alt="waterheater" className="slider-waterheater-image drop-shadow"/>
                                    </div>
                                </Row>
                            </Col>
                            <Col xs={12} md={6} lg={6}
                                 className="ml-auto align-self-center padding-top-100 padding-bottom-100">
                                <Row className="justify-content-center slider-info">
                                    <Col xs={12} md={12} lg={9}>
                                        <Col lg={12} className="d-flex">
                                            <div className="product-type">ДЫМОХОДНАЯ</div>
                                            <div className="hr-100 margin-left-20 align-self-center"></div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="margin-top-15 margin-bottom-15">
                                                <div className="product-vendor">DION JSD-10,</div>
                                                <div className="product-category">Подсолнух</div>
                                            </div>

                                            <div className="hr-150"></div>
                                        </Col>
                                        <Col lg={12} className="margin-top-50 margin-bottom-100 max-width-450">
                                            <p>
                                                Категория «С фото-панелью» отличается лицевой панелью выполненой из стекла
                                                и фотографии в разных вариациях. Отлично подойдет для тех, кто любит
                                                интересный дизайн и желает использвовать водонагреватель «Dion», как
                                                часть интерьера.
                                            </p>
                                        </Col>
                                        <Col xl={10} className="d-flex">
                                            <Col lg={12}>
                                                <Row>
                                                    <NavLink to="/product/Photopanel/dion-jsd-10-sunflower"><button className="button">Перейти к товару</button></NavLink>
                                                    <div className="span price">
                                                        <p>
                                                            Стоимость:
                                                        </p>
                                                        <div className="d-flex">
                                                            <h3 className="amount">
                                                                2 399 <slow>грн.</slow>
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
                            <Col xs={12} md={6} lg={6} className="product-slider-background padding-top-100 padding-bottom-100">
                                <Row className="justify-content-center h-100">
                                    <div className="slider-waterheater align-self-center max-width-60-percent">
                                        <img src={PremiumImage} alt="waterheater" className="slider-waterheater-image drop-shadow"/>
                                    </div>
                                </Row>
                            </Col>
                            <Col xs={12} md={6} lg={6}
                                 className="ml-auto align-self-center padding-top-100 padding-bottom-100">
                                <Row className="justify-content-center slider-info">
                                    <Col xs={12} md={12} lg={9}>
                                        <Col lg={12} className="d-flex">
                                            <div className="product-type">ДЫМОХОДНАЯ</div>
                                            <div className="hr-100 margin-left-20 align-self-center"></div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="margin-top-15 margin-bottom-15">
                                                <div className="product-vendor">DION JSD-10,</div>
                                                <div className="product-category">Премиум (Черная)</div>
                                            </div>

                                            <div className="hr-150"></div>
                                        </Col>
                                        <Col lg={12} className="margin-top-50 margin-bottom-100 max-width-450">
                                            <p>
                                                «Премиум» – это категория для тех, кого интерисует газовая колонка для
                                                максимально простого и интуитивного использования. На лицевой панели
                                                есть два регулятора – напор воды и газа, а также LCD-дисплей для
                                                индицакции температуры.
                                            </p>
                                        </Col>
                                        <Col xl={10} className="d-flex">
                                            <Col lg={12}>
                                                <Row>
                                                    <NavLink to="/product/Premium/dion-jsd-10-premium-black"><button className="button">Перейти к товару</button></NavLink>
                                                    <div className="span price">
                                                        <p>
                                                            Стоимость:
                                                        </p>
                                                        <div className="d-flex">
                                                            <h3 className="amount">
                                                                2 399 <slow>грн.</slow>
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
                            <Col xs={12} md={6} lg={6} className="product-slider-background padding-top-100 padding-bottom-100">
                                <Row className="justify-content-center h-100">
                                    <div className="slider-waterheater align-self-center max-width-60-percent">
                                        <img src={TurboImage} alt="waterheater" className="slider-waterheater-image drop-shadow"/>
                                    </div>
                                </Row>
                            </Col>
                            <Col xs={12} md={6} lg={6}
                                 className="ml-auto align-self-center padding-top-100 padding-bottom-100">
                                <Row className="justify-content-center slider-info">
                                    <Col xs={12} md={12} lg={9}>
                                        <Col lg={12} className="d-flex">
                                            <div className="product-type">ДЫМОХОДНАЯ</div>
                                            <div className="hr-100 margin-left-20 align-self-center"></div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="margin-top-15 margin-bottom-15">
                                                <div className="product-vendor">DION JSD-10,</div>
                                                <div className="product-category">Турбо</div>
                                            </div>

                                            <div className="hr-150"></div>
                                        </Col>
                                        <Col lg={12} className="margin-top-50 margin-bottom-100 max-width-450">
                                            <p>
                                                Водонагреватели «Dion» категории «турбо» нужны в том случае, если нету
                                                возможности подключиться к дымоходу. Благодаря трубе (которая полагается
                                                в комплекте) и закрытой камере сгорания вы обойдете эту проблему.
                                            </p>
                                        </Col>
                                        <Col xl={10} className="d-flex">
                                            <Col lg={12}>
                                                <Row>
                                                    <NavLink to="/product/Turbo/dion-jsd-10-turbo"><button className="button">Перейти к товару</button></NavLink>
                                                    <div className="span price">
                                                        <p>
                                                            Стоимость:
                                                        </p>
                                                        <div className="d-flex">
                                                            <h3 className="amount">
                                                                4 299 <slow>грн.</slow>
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
                            <Col xs={12} md={6} lg={6} className="product-slider-background padding-top-100 padding-bottom-100">
                                <Row className="justify-content-center h-100">
                                    <div className="slider-waterheater align-self-center max-width-60-percent">
                                        <img src={VictoriaImage} alt="waterheater" className="slider-waterheater-image drop-shadow"/>
                                    </div>
                                </Row>
                            </Col>
                            <Col xs={12} md={6} lg={6}
                                 className="ml-auto align-self-center padding-top-100 padding-bottom-100">
                                <Row className="justify-content-center slider-info">
                                    <Col xs={12} md={12} lg={9}>
                                        <Col lg={12} className="d-flex">
                                            <div className="product-type">ДЫМОХОДНАЯ</div>
                                            <div className="hr-100 margin-left-20 align-self-center"></div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="margin-top-15 margin-bottom-15">
                                                <div className="product-vendor">Victoria JSD-08,</div>
                                                <div className="product-category">Лето</div>
                                            </div>

                                            <div className="hr-150"></div>
                                        </Col>
                                        <Col lg={12} className="margin-top-50 margin-bottom-100 max-width-450">
                                            <p>
                                                Водонагреватели «Victoria» аналог газовых колонк «Dion».
                                                Мы сделали упор на простоте и безопасности при эксплуатации продукта.
                                                Главное отличие – выход горячей воды 8 л./мин.
                                            </p>
                                        </Col>
                                        <Col xl={10} className="d-flex">
                                            <Col lg={12}>
                                                <Row>
                                                    <NavLink to="/product/Victoria/victoria-jsd-08-summer"><button className="button">Перейти к товару</button></NavLink>
                                                    <div className="span price">
                                                        <p>
                                                            Стоимость:
                                                        </p>
                                                        <div className="d-flex">
                                                            <h3 className="amount">
                                                                2 199 <slow>грн.</slow>
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


export default ProductsSlider;