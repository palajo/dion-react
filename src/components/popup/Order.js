import React, {useState} from 'react';
import {Modal, Button, Col} from 'react-bootstrap';

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
                <div
                    className="container h-100 padding-top-40 padding-bottom-70 padding-left-100 padding-right-100 background-gray">
                    <div className="row justify-content-between padding-bottom-10 border-bottom">
                        <h4 className="modal-title color-cdcbcb">Оформление заказа:</h4>
                        <a className="align-self-center" data-dismiss="modal" aria-label="Close">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
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
                        </a>
                    </div>
                    <div className="row justify-content-between margin-top-50">
                        <div className="col-6">
                            <div className="form-block">
                                <div className="d-flex margin-bottom-20">
                                    <div className="icon icon-48 personal-info"></div>
                                    <h4 className="align-self-center margin-left-30">Информация о покупателе</h4>
                                </div>
                                <div className="padding-bottom-70">
                                    <div className="row padding-left-80 margin-bottom-20">
                                        <div className="col">
                                            <label>Имя:</label>
                                            <input type="email" className="buy-form" id="inputEmail4"
                                                   placeholder="Иван.." />
                                        </div>
                                        <div className="col">
                                            <label>Фамилия:</label>
                                            <input type="password" className="buy-form" id="inputPassword4"
                                                   placeholder="Петров.."/>
                                        </div>
                                    </div>
                                    <div className="row padding-left-80">
                                        <div className="col">
                                            <label>Контактный телефон:</label>
                                            <input type="email" className="buy-form" id="inputEmail4"
                                                   placeholder="+38 (063) 33 12 565"/>
                                        </div>
                                        <div className="col">
                                            <label>E-mail:</label>
                                            <input type="password" className="buy-form" id="inputPassword4"
                                                   placeholder="admin@dion.lviv.ua"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-block border-none">
                                <div className="d-flex margin-bottom-20">
                                    <div className="icon icon-48 delivery"></div>
                                    <h4 className="align-self-center margin-left-30">Доставка и оплата</h4>
                                </div>
                                <div className="padding-bottom-50">
                                    <div className="row padding-left-80 margin-bottom-20">
                                        <div className="col">
                                            <label>Ваш город:</label>
                                            <input type="email" className="buy-form" id="inputEmail4"
                                                   placeholder="Львов.."/>
                                        </div>
                                        <div className="col">
                                            <label>Отделение "Новой Почты":</label>
                                            <input type="password" className="buy-form" id="inputPassword4"
                                                   placeholder="Отделение №64.."/>
                                        </div>
                                    </div>
                                    <div className="row padding-left-80">
                                        <div className="col">
                                            <label>Оплата:</label>
                                            <select className="buy-select" id="mySelect">
                                                <option>Оплата при получении</option>
                                                <option>Безналичный расчет (Privatbank)</option>
                                            </select>
                                        </div>
                                        <div className="col">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="row background-white border-radius">
                                <div
                                    className="col-12 padding-top-40 padding-bottom-40 padding-left-70 padding-right-70 border-bottom">
                                    <div className="row justify-content-between">
                                        <img src={Waterheater} height="96px"/>
                                        <div className="align-self-center variation">
                                            <div className="product-vendor">DION JSD-10,</div>
                                            <div className="product-category">Премиум (Синяя)</div>
                                        </div>
                                        <div className="align-self-center">
                                            <div className="d-flex">
                                                <span className="input-group-btn">
                                                    <button type="button" className="btn-number minus" disabled="disabled"
                                                    data-type="minus" data-field="quant[1]">
                                                        <img src={Minus} width="8px"/>
                                                    </button>
                                                </span>
                                                <input type="text" name="quant[1]" className="number input-number"
                                                       value="1" min="1" max="10" id="quantity" />
                                                <span className="input-group-btn">
                                                    <button className="btn-number plus" data-type="plus" data-field="quant[1]">
                                                        <img src={Plus} width="8px"/>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-12 padding-top-40 padding-bottom-40 padding-left-70 padding-right-70">
                                    <div className="row justify-content-between">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default Order;