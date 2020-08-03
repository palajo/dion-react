import React from 'react';
import {Row, Col} from 'react-bootstrap';

import Window from '../../components/Window';
import TurboApi from '../api/TurboApi';

export const TurboCategory = () => {
    return (
        <Row className="margin-bottom-100">
            <Col lg={12}>
                <Row className="margin-bottom-20 border-bottom">
                    <Col xs={12} md={9} lg={true} className="text-left">
                        <Row className="category-info margin-bottom-10">
                            <p>
                                Категория: <b>Турбо</b>
                            </p>
                            <p>
                                Тип: <b>Парапетные</b>
                            </p>
                            <p>
                                Стоимость: <b>от 140 $.</b>
                            </p>
                        </Row>
                    </Col>
                    <Col xs={12} md={3} lg={true}>
                    </Col>
                </Row>
                <Row className="windows">
                    {
                        TurboApi.map(product =>
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

