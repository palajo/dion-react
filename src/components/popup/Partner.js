import React, {useState} from 'react';
import {Modal, Button, Col, Container, Row} from 'react-bootstrap';

const Partner = (props: any) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className="button" onClick={handleShow}>
                Стать партнером
            </button>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show} onHide={handleClose}
                dialogClassName="max-width-900"
            >
                <Container
                    className="h-100 popup background-gray">
                    <div className="row justify-content-end padding-bottom-10 margin-bottom-50 border-bottom">
                        <a className="align-self-center" onClick={handleClose}>
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                 x="0px" y="0px"
                                 viewBox="0 0 492 492"  width="18px" height="18px" fill="#cdcbcb"
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
                    <Row className="justify-content-center">
                        <h3 className="modal-title margin-bottom-20">Стать нашим партнером:</h3>
                    </Row>
                    <form action="index.html" method="post">
                        <Row className="row justify-content-center margin-bottom-20">
                            <Col>
                                <label>Имя:</label>
                                <input type="email" className="buy-form" id="inputEmail4" placeholder="Иван.." />
                            </Col>
                            <Col className="margin-left-30">
                                <label>Контактный телефон:</label>
                                <input type="password" className="buy-form" id="inputPassword4"
                                       placeholder="+38 (000) 00 00 000.." />
                            </Col>
                        </Row>
                        <Row className="row margin-bottom-40">
                            <Col>
                                <label>Что вас интерисует:</label>
                                <textarea className="form-control my-form-input-message"
                                          placeholder="Возможно вы хотели бы что-то уточнить?.." rows="4" />
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <button className="button" name="button">Отправить</button>
                        </Row>
                    </form>
                </Container>
            </Modal>
        </>
    );
}

export default Partner;