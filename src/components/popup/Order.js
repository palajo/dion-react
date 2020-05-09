import React, {useState} from 'react';
import {Modal, Container, Row, Col} from 'react-bootstrap';

import Waterheater from '../../images/waterheater.png';
import Minus from '../../images/minus.svg';
import Plus from '../../images/plus.svg';

const Order = (props: any) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className="button" onClick={handleShow}>
                Оформить заказ
            </button>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show} onHide={handleClose}
                dialogClassName="max-width-1440"
            >
                <Container
                    className="h-100 popup background-gray">
                    <Row className="justify-content-between padding-bottom-10 border-bottom">
                        <h4 className="modal-title color-cdcbcb">Оформление заказа:</h4>
                        <button className="align-self-center" onClick={handleClose}>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                 x="0px" y="0px"
                                 viewBox="0 0 492 492" width="18px" height="18px" fill="#cdcbcb"
                                 className="close">
                                <g>
                                    <path d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872
                                        c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872
                                        c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052
                                        L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116
                                        c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952
                                        c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116
                                        c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"/>
                                </g>
                            </svg>
                        </button>
                    </Row>
                    <Row className="justify-content-between margin-top-50">
                        <Col xl={6}>
                            <div className="form-block">
                                <div className="d-flex margin-bottom-20">
                                    <div className="icon icon-48 personal-info"></div>
                                    <h4 className="align-self-center margin-left-30">Информация о покупателе</h4>
                                </div>
                                <div className="padding-bottom-70">
                                    <Row className="padding-left-80 row-form">
                                        <Col lg={true} md={12} xs={12}>
                                            <label>Имя:</label>
                                            <input type="email" className="buy-form" id="inputEmail4"
                                                   placeholder="Иван.." />
                                        </Col>
                                        <Col lg={true} md={12} xs={12}>
                                            <label>Фамилия:</label>
                                            <input type="password" className="buy-form" id="inputPassword4"
                                                   placeholder="Петров.."/>
                                        </Col>
                                    </Row>
                                    <Row className="padding-left-80 row-form">
                                        <Col lg={true} md={12} xs={12}>
                                            <label>Контактный телефон:</label>
                                            <input type="email" className="buy-form" id="inputEmail4"
                                                   placeholder="+38 (063) 33 12 565"/>
                                        </Col>
                                        <Col lg={true} md={12} xs={12}>
                                            <label>E-mail:</label>
                                            <input type="password" className="buy-form" id="inputPassword4"
                                                   placeholder="admin@dion.lviv.ua"/>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className="form-block border-none">
                                <div className="d-flex margin-bottom-20">
                                    <div className="icon icon-48 delivery"></div>
                                    <h4 className="align-self-center margin-left-30">Доставка и оплата</h4>
                                </div>
                                <div className="padding-bottom-50">
                                    <Row className="row padding-left-80 row-form">
                                        <Col lg={true} md={12} xs={12}>
                                            <label>Ваш город:</label>
                                            <input type="email" className="buy-form" id="inputEmail4"
                                                   placeholder="Львов.."/>
                                        </Col>
                                        <Col lg={true} md={12} xs={12}>
                                            <label>Отделение "Новой Почты":</label>
                                            <input type="password" className="buy-form" id="inputPassword4"
                                                   placeholder="Отделение №64.."/>
                                        </Col>
                                    </Row>
                                    <Row className="padding-left-80">
                                        <Col lg={true} md={12} xs={12}>
                                            <label>Оплата:</label>
                                            <select className="buy-select" id="mySelect">
                                                <option>Оплата при получении</option>
                                                <option>Безналичный расчет (Privatbank)</option>
                                            </select>
                                        </Col>
                                        <Col lg={true} md={12} xs={12}>

                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col xl={5}>
                            <Row className="background-white border-radius">
                                <Col xl={12}
                                    className="padding-top-40 padding-bottom-40 padding-left-70 padding-right-70 border-bottom">
                                    <Row className="justify-content-between cart-row">
                                        <Col lg={3} md={12} xs={12}>
                                            <Row className="justify-content-center">
                                                <img src={Waterheater} height="96px" alt="waterheater"/>
                                            </Row>
                                        </Col>
                                        <Col lg={5} md={12} xs={12} className="align-self-center">
                                            <Row className="justify-content-center">
                                                <div className="cart">
                                                    <div className="product-vendor">DION JSD-10,</div>
                                                    <div className="product-category">Премиум (Синяя)</div>
                                                </div>
                                            </Row>
                                        </Col>
                                        <Col lg={4} md={12} xs={12} className="align-self-center">
                                            <Row className="justify-content-center">
                                                <div>
                                                    <span className="input-group-btn">
                                                        <button type="button" className="btn-number minus" disabled="disabled"
                                                                data-type="minus" data-field="quant[1]">
                                                            <img src={Minus} width="8px" alt="minus"/>
                                                        </button>
                                                    </span>
                                                    <input type="text" name="quant[1]" className="number input-number"
                                                           value="1" min="1" max="10" id="quantity" />
                                                    <span className="input-group-btn">
                                                        <button className="btn-number plus" data-type="plus" data-field="quant[1]">
                                                            <img src={Plus} width="8px" alt="plus"/>
                                                        </button>
                                                    </span>
                                                </div>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={12}
                                    className="padding-top-40 padding-bottom-40 padding-left-70 padding-right-70">
                                    <Row className="justify-content-between checkout">
                                        <div className="span">
                                            <p>
                                                Стоимость (шт.):
                                            </p>
                                            <div className="d-flex">
                                                <h3 className="amount">
                                                    2 399 <low>грн.</low>
                                                </h3>
                                            </div>
                                        </div>
                                        <button className="button">Подтвердить заказ</button>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Modal>
        </>
    );
}

export default Order;