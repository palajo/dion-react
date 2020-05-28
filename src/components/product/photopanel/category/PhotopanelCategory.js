import React from 'react';
import {Row, Col} from 'react-bootstrap';

import Window from '../../components/Window';
import PhotopanelApi from '../api/PhotopanelApi';

export const PhotopanelCategory = () => {
    return (
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
                                Стоимость: <b>2399 грн.</b>
                            </p>
                        </Row>
                    </Col>
                    <Col xs={12} md={3} lg={true}>
                    </Col>
                </Row>
                <Row className="windows">
                    {
                        PhotopanelApi.map(product =>
                            <Window
                                windowCategory={product.categoryId}
                                windowId={product.id}
                                windowImage={product.image}
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

