import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

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
            slidesToScroll: 1
        };
        return (
            <>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div>
                        <Row className="category-slider margin-none">
                            <Col xs={12} lg={6} className="background-white-95">
                                <Row className="justify-content-center h-100">
                                    <Col xs={12} lg={8} className="align-self-center">
                                        <h1>
                                            Dion – продукция высокого
                                            качества.
                                        </h1>
                                        <p className="max-width-400 margin-top-30 margin-bottom-30">
                                            Мы создаем качественный продукт за честные деньги, пытаясь
                                            угодить клиенту во всем! Также мы предлагаем широкий
                                            ассортимент, чтобы вы выбрали именно нас!
                                        </p>
                                        <button className="button" data-toggle="modal" data-target="#callback">
                                            Обратный звонок
                                        </button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className="category-slider margin-none">
                            <Col xs={12} lg={6} className="background-white-95">
                                <Row className="justify-content-center h-100">
                                    <Col xs={12} lg={8} className="align-self-center">
                                        <h1>
                                            Dion – продукция высокого
                                            качества.
                                        </h1>
                                        <p className="max-width-400 margin-top-30 margin-bottom-30">
                                            Мы создаем качественный продукт за честные деньги, пытаясь
                                            угодить клиенту во всем! Также мы предлагаем широкий
                                            ассортимент, чтобы вы выбрали именно нас!
                                        </p>
                                        <button className="button" data-toggle="modal" data-target="#callback">
                                            Обратный звонок
                                        </button>
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