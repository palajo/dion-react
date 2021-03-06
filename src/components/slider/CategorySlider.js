import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import Callback from "../popup/Callback";

class CategorySlider extends React.Component {

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
                        <Row className="slider category-slider margin-none">
                            <Col className="align-self-center">
                                <Row className="max-width-1440 m-auto">
                                    <Col xs={12} md={12} lg={12} className="ml-auto align-self-center">
                                        <h1 className="max-width-450">
                                            Dion – продукция высокого
                                            качества.
                                        </h1>
                                        <p className="margin-top-30 margin-bottom-40 max-width-450">
                                            Мы создаем качественный продукт за честные деньги, пытаясь
                                            угодить клиенту во всем! Также мы предлагаем широкий
                                            ассортимент, чтобы вы выбрали именно нас!
                                        </p>
                                        <Callback />
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


export default CategorySlider;