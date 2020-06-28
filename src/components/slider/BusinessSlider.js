import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import Partner from "../popup/Partner";

class BusinessSlider extends React.Component {

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
            slidesToScroll: 1,
        };
        return (
            <>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div>
                        <Row className="slider business-slider margin-none">
                            <Col className="align-self-center">
                                <Row className="max-width-1440 m-auto">
                                    <Col xs={12} md={12} lg={12} className="ml-auto align-self-center">
                                        <h1 className="max-width-450">
                                            Оптовая торговля с Dion
                                            это просто
                                        </h1>
                                        <p className="margin-top-30 margin-bottom-40 max-width-450">
                                            Заполните анкету и мы сразу же ее рассмотрим. Работать с
                                            нами это выгодно, ведь мы лояльны к своим партнерам.
                                            Мы рады сотрудничеству!
                                        </p>
                                        <Partner />
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


export default BusinessSlider;