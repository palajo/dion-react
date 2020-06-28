import React from 'react';
import {Row, Col} from 'react-bootstrap';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

import { NavLink } from 'react-router-dom';
import Waterheater from "../../images/products/small/dion-jsd-10-premium-blue.png";

class OffersSlider extends React.Component {

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
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div id="about">
                        <Row className="slider mainpage-slider margin-none">
                            <Col className="align-self-center">
                                <Row className="max-width-1440 m-auto">
                                    <Col xs={12} md={7} lg={7} className="ml-auto align-self-center">
                                        <h1 className="max-width-600">
                                            Газовые колонки качества
                                            люкс по выгодной цене!
                                        </h1>
                                        <p className="margin-top-30 margin-bottom-40 max-width-450">
                                            Dion – это качественный продукт с 12 месяцами гарантии.
                                            Удобство, комфорт в использовании, а также доставка по всей Украинe.
                                        </p>
                                        <NavLink to="/catalog">
                                            <button className="button">Прейти к каталогу</button>
                                        </NavLink>
                                    </Col>

                                    <Col lg={5} md={5} className="d-none d-md-block d-lg-block">
                                        <Row className="justify-content-center">
                                            <div className="slider-waterheater product-background border-left border-bottom">
                                                <img src={Waterheater} alt="waterheater" className="slider-waterheater-image drop-shadow"/>
                                            </div>
                                        </Row>
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


export default OffersSlider;