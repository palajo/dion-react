import React from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import {Col, Row} from "react-bootstrap";
import Waterheater from "../../images/waterheater.png";
import Products from '../categories/Products';
import {NavLink} from "react-router-dom";

class ProductSlider extends React.Component {

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
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            focusOnSelect: false
        };
        return (
            <>
            <Row>
                <Slider ref={c => (this.slider = c)} {...settings} className="ProductSlider">

                    {
                         Products.map(product =>
                             <>
                                <NavLink to={`${product.id}`} key={product.id}>
                                    <div>
                                        <Row className="background-white variation active">
                                            <img src={product.image} height="64px" alt="waterheater"/>
                                            <div className="align-self-center margin-left-30">
                                                <div className="product-vendor">{product.brand + " " + product.model}</div>
                                                <div className="product-category">{product.title}</div>
                                            </div>
                                        </Row>
                                    </div>
                                </NavLink>
                             </>
                         )
                    }
                </Slider>
                <div className="ProductSlider-arrows">
                    <div className="ProductSlider-arrow slick-prev" onClick={this.next}>
                        <div className="ProductSlider-arrow-icon bottom"></div>
                    </div>
                    <div className="ProductSlider-arrow slick-prev" onClick={this.previous}>
                        <div className="ProductSlider-arrow-icon top"></div>
                    </div>
                </div>
            </Row>
            </>
        );
    }
}


export default ProductSlider;