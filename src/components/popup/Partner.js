import React, {useState} from 'react';
import {Modal, Col, Container, Row} from 'react-bootstrap';

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
                    className="h-100 popup background-gray padding-top-70">
                    <h2>В разработке..</h2>
                    <p>
                        <br/>
                        Данная функция на данный момент в разработке, приносим наши извенения.<br/>
                        Звоните нам! В контактах вся необходимая информация.
                    </p>
                </Container>
            </Modal>
        </>
    );
}

export default Partner;