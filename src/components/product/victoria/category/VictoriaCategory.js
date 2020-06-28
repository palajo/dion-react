import React from 'react';
import {Row, Col} from 'react-bootstrap';

import Window from '../../components/Window';
import VictoriaApi from '../api/VictoriaApi';

export const VictoriaCategory = () => {
    return (
        <Row className="margin-bottom-100">
            <Col lg={12}>
                <Row className="margin-bottom-20 border-bottom">
                    <Col xs={12} md={9} lg={true} className="text-left">
                        <Row className="category-info margin-bottom-10">
                            <p>
                                Категория: <b>Виктория</b>
                            </p>
                            <p>
                                Тип: <b>Дымоходные</b>
                            </p>
                            <p>
                                Стоимость: <b>2199 грн.</b>
                            </p>
                        </Row>
                    </Col>
                    <Col xs={12} md={3} lg={true}>
                    </Col>
                </Row>
                <Row className="windows">
                    {
                        VictoriaApi.map(product =>
                            <Window
                                windowCategory={product.categoryId}
                                windowId={product.id}
                                windowImage={product.imagesmall}
                                windowVendor={product.brand + " " + product.model}
                                windowName={product.title}
                                windowPrice={product.price}
                            />
                        )
                    }
                </Row>
            </Col>
        </Row>
    );
}

