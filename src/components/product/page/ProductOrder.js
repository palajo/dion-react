import React, {useState} from 'react';
import {Container, Row, Col, Modal} from 'react-bootstrap';

// setting Benefit parameters
type orderProductInfoProps = {
    orderProductImage: string,
    orderProductVendor: string,
    orderProductCategory: string,
    orderProductPrice: number
}

const ProductOrder = ({orderProductImage, orderProductVendor, orderProductCategory, orderProductPrice}:
                   orderProductInfoProps) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className="button" onClick={handleShow}>
                Оформить заказ
            </button>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show} onHide={handleClose}
                dialogClassName="max-width-1440"
            >
                <Container
                    className="h-100 popup background-gray">
                    <Row
                        className="justify-content-between padding-bottom-10 border-bottom">
                        <h4 className="modal-title color-cdcbcb">Оформление
                            заказа:</h4>
                        <button className="align-self-center"
                                onClick={handleClose}>
                            <svg version="1.1"
                                 xmlns="http://www.w3.org/2000/svg"
                                 x="0px" y="0px"
                                 viewBox="0 0 492 492" width="18px"
                                 height="18px"
                                 fill="#cdcbcb"
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
                    <form className="w-100">
                        <Row className="justify-content-between margin-top-50">
                            <Col xl={6}>
                                <div className="form-block">
                                    <div className="d-flex margin-bottom-20">
                                        <div className="icon icon-48 personal-info"></div>
                                        <h4 className="align-self-center margin-left-30">Информация
                                            о покупателе</h4>
                                    </div>
                                    <div className="padding-bottom-70">
                                        <Row className="padding-left-80 row-form">
                                            <Col lg={true} md={6} xs={12}>
                                                <label>Имя:</label>
                                                <input type="name" className="buy-form" id="inputName"
                                                       placeholder="Иван.." required/>
                                            </Col>
                                            <Col lg={true} md={6} xs={12}>
                                                <label>Фамилия:</label>
                                                <input type="surname" className="buy-form" id="inputSurname"
                                                       placeholder="Петров.." required/>
                                            </Col>
                                        </Row>
                                        <Row className="padding-left-80 row-form">
                                            <Col lg={true} md={6} xs={12}>
                                                <label>Контактный телефон:</label>
                                                <input type="phone" className="buy-form" id="inputPhone"
                                                       placeholder="+38 (063) 33 12 565" required/>
                                            </Col>
                                            <Col lg={true} md={6} xs={12}>
                                                <label>E-mail:</label>
                                                <input type="email" className="buy-form" id="inputEmail"
                                                       placeholder="admin@dion.lviv.ua" required/>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <div className="form-block border-none">
                                    <div className="d-flex margin-bottom-20">
                                        <div className="icon icon-48 delivery"></div>
                                        <h4 className="align-self-center margin-left-30">Доставка
                                            и оплата</h4>
                                    </div>
                                    <div className="padding-bottom-50">
                                        <Row
                                            className="row padding-left-80 row-form">
                                            <Col lg={true} md={6} xs={12}>
                                                <label>Ваш город:</label>
                                                <input type="text" className="buy-form" id="inputCity"
                                                       placeholder="Львов.." required/>
                                            </Col>
                                            <Col lg={true} md={6} xs={12}>
                                                <label>Отделение "Новой
                                                    Почты":</label>
                                                <input type="text" className="buy-form" id="inputDeliveryAddress"
                                                       placeholder="Отделение №64.." required/>
                                            </Col>
                                        </Row>
                                        <Row className="padding-left-80">
                                            <Col lg={true} md={6} xs={12}>
                                                <label>Оплата:</label>
                                                <select className="buy-select"
                                                        id="mySelect" required>
                                                    <option>Оплата при получении
                                                    </option>
                                                    <option>Безналичный расчет
                                                        (Privatbank)
                                                    </option>
                                                </select>
                                            </Col>
                                            <Col lg={true} md={6} xs={12}>

                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={5}>
                                <Row className="background-white border-radius">
                                    <Col xl={12}
                                         className="padding-top-40 padding-bottom-40 padding-left-70 padding-right-70 border-bottom">
                                        <Row
                                            className="justify-content-between cart-row">
                                            <Col lg={3} md={3} xs={12}>
                                                <Row className="justify-content-center">
                                                    <img src={orderProductImage} height="96px" alt="waterheater"/>
                                                </Row>
                                            </Col>
                                            <Col lg={5} md={5} xs={12} className="align-self-center">
                                                <Row className="justify-content-center">
                                                    <div className="cart">
                                                        <div className="product-vendor">
                                                            {orderProductVendor},
                                                        </div>
                                                        <div className="product-category">
                                                            {orderProductCategory}
                                                        </div>
                                                    </div>
                                                </Row>
                                            </Col>
                                            <Col lg={4} md={4} xs={12} className="align-self-center">
                                                <Row className="justify-content-center margin-bottom-5">
                                                    <label className="margin-none">Кол-во:</label>
                                                </Row>
                                                <Row className="justify-content-center">
                                                    <input className="number input-number" name="quantity" id="number" type="number"
                                                           min="1" max="10" placeholder="1" required />
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
                                                        {orderProductPrice}
                                                        <low>грн.</low>
                                                    </h3>
                                                </div>
                                            </div>
                                            <button className="button" type="submit" name="submit">Подтвердить
                                                заказ
                                            </button>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </form>
                </Container>
            </Modal>
        </>
    );
}

export default ProductOrder;
