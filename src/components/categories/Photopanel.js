import React, {useState} from 'react';
import { Row, Col } from 'react-bootstrap';

import {NavLink} from "react-router-dom";
import Waterheater from "../../images/waterheater.png";

const Photopanel = (props: any) => {

    const [state, setState] = useState({
        isPressedShowAll: false
    });

    const toggleWindows = () => {
        setState({
            isPressedShowAll: !state.isPressedShowAll
        });
    };
    return(
        <Row className="margin-bottom-100">
            <Col lg={12}>
                <Row className="margin-bottom-20 border-bottom">
                    <Col xs={12} md={9} lg={true} className="text-left">
                        <Row className="category-info margin-bottom-10">
                            <p>
                                Категория: <b>С фото-панелью</b>
                            </p>
                            <p>
                                Тип: <b>Дымоходные</b>
                            </p>
                            <p>
                                Стоимость: <b>2 399 грн.</b>
                            </p>
                        </Row>
                    </Col>
                    <Col xs={12} md={3} lg={true}>
                        <Row className="justify-content-start justify-content-md-end text-right more">
                            <button onClick={toggleWindows}>
                                <b>Показать все</b>
                            </button>
                            <div className="span margin-left-10">
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path className="arrow-right"
                                          d="M6.91924 5.82725L0.502475 0.0773337C0.419869 0.00360057 0.293402 -0.0203287 0.182877 0.0182488C0.0723522 0.0560997 0 0.148137 0 0.250182V1.25017C0 1.31413 0.0284924 1.37566 0.0797626 1.42204L5.14015 6.00008L0.0797901 10.5781C0.0285199 10.6245 2.71205e-05 10.686 2.71205e-05 10.75V11.75C2.71205e-05 11.852 0.0723798 11.9441 0.182905 11.9819C0.218233 11.9941 0.255257 12 0.291707 12C0.369747 12 0.446092 11.9731 0.502475 11.9228L6.91924 6.17295C7.02692 6.07627 7.02692 5.92393 6.91924 5.82725Z"/>
                                </svg>
                            </div>
                        </Row>
                    </Col>
                </Row>
                <Row className="windows">
                    <Col xs={12} md={6} lg={3}>
                        <NavLink to="/product">
                            <div
                                className="product-block background-gray border-bottom padding-top-30 padding-bottom-20 ">
                                <div className="product-image text-center">
                                    <img src={Waterheater} height="440px" alt="dion-waterheater"/>
                                </div>
                                <div className="product-title margin-top-30 text-center">
                                    Dion JSD-10, <b>Лаванда</b>
                                </div>
                            </div>
                        </NavLink>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <NavLink to="/product">
                            <div
                                className="product-block background-gray border-bottom padding-top-30 padding-bottom-20 ">
                                <div className="product-image text-center">
                                    <img src={Waterheater} height="440px" alt="dion-waterheater"/>
                                </div>
                                <div className="product-title margin-top-30 text-center">
                                    Dion JSD-10, <b>Маки</b>
                                </div>
                            </div>
                        </NavLink>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <NavLink to="/product">
                            <div
                                className="product-block background-gray border-bottom padding-top-30 padding-bottom-20 ">
                                <div className="product-image text-center">
                                    <img src={Waterheater} height="440px" alt="dion-waterheater"/>
                                </div>
                                <div className="product-title margin-top-30 text-center">
                                    Dion JSD-10, <b>Тюльпан</b>
                                </div>
                            </div>
                        </NavLink>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <NavLink to="/product">
                            <div
                                className="product-block background-gray border-bottom padding-top-30 padding-bottom-20 ">
                                <div className="product-image text-center">
                                    <img src={Waterheater} height="440px" alt="dion-waterheater"/>
                                </div>
                                <div className="product-title margin-top-30 text-center">
                                    Dion JSD-10, <b>Мозаика</b>
                                </div>
                            </div>
                        </NavLink>
                    </Col>
                </Row>
                {
                    state.isPressedShowAll ? (
                        <Row className="windows">
                            <Col xs={12} md={6} lg={3}>
                                <NavLink to="/product">
                                    <div
                                        className="product-block background-gray border-bottom padding-top-30 padding-bottom-20 ">
                                        <div className="product-image text-center">
                                            <img src={Waterheater} height="440px" alt="dion-waterheater"/>
                                        </div>
                                        <div className="product-title margin-top-30 text-center">
                                            Dion JSD-10, <b>Лаванда</b>
                                        </div>
                                    </div>
                                </NavLink>
                            </Col>
                            <Col xs={12} md={6} lg={3}>
                                <NavLink to="/product">
                                    <div
                                        className="product-block background-gray border-bottom padding-top-30 padding-bottom-20 ">
                                        <div className="product-image text-center">
                                            <img src={Waterheater} height="440px" alt="dion-waterheater"/>
                                        </div>
                                        <div className="product-title margin-top-30 text-center">
                                            Dion JSD-10, <b>Маки</b>
                                        </div>
                                    </div>
                                </NavLink>
                            </Col>
                            <Col xs={12} md={6} lg={3}>
                                <NavLink to="/product">
                                    <div
                                        className="product-block background-gray border-bottom padding-top-30 padding-bottom-20 ">
                                        <div className="product-image text-center">
                                            <img src={Waterheater} height="440px" alt="dion-waterheater"/>
                                        </div>
                                        <div className="product-title margin-top-30 text-center">
                                            Dion JSD-10, <b>Тюльпан</b>
                                        </div>
                                    </div>
                                </NavLink>
                            </Col>
                            <Col xs={12} md={6} lg={3}>
                                <NavLink to="/product">
                                    <div
                                        className="product-block background-gray border-bottom padding-top-30 padding-bottom-20 ">
                                        <div className="product-image text-center">
                                            <img src={Waterheater} height="440px" alt="dion-waterheater"/>
                                        </div>
                                        <div className="product-title margin-top-30 text-center">
                                            Dion JSD-10, <b>Мозаика</b>
                                        </div>
                                    </div>
                                </NavLink>
                            </Col>
                        </Row>
                    ) : null
                }
            </Col>
        </Row>
    );
}

export default Photopanel;
