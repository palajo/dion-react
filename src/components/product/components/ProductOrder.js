import React, {useState} from 'react';
import {Container, Modal} from 'react-bootstrap';

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
                    className="h-100 popup background-gray padding-top-70">
                    <h2>Приносим наши извинения..</h2>
                    <p>
                        <br/>
                        Данная функция на данный момент в разработке, приносим наши извенения.<br/>
                        Звоните нам! В контактах вся необходимая информация.
                    </p>
                    <hr />
                    <h5 class="margin-bottom-10">
                        Вы можете обратится к нам за телефоном:
                    </h5>
                    <a href="tel:+38 (050) 330 36 10">+38 (050) 330 36 10</a><br/>
                    <a href="tel:+38 (032) 243 70 64">+38 (032) 243 70 64</a>
                </Container>
            </Modal>
        </>
    );
}

export default ProductOrder;
