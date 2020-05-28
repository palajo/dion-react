import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import Window from './Window';
import Products from './Products';

export const Categories = () => {
     return (
        <Row className="margin-bottom-100">
            <Col lg={12}>
                <Row className="margin-bottom-20 border-bottom">
                    <Col xs={12} md={9} lg={true} className="text-left">
                        <Row className="category-info margin-bottom-10">
                            <p>
                                Категория: <b></b>
                            </p>
                            <p>
                                Тип: <b></b>
                            </p>
                            <p>
                                Стоимость: <b></b>
                            </p>
                        </Row>
                    </Col>
                    <Col xs={12} md={3} lg={true}>
                    </Col>
                </Row>
                <Row className="windows">
                     {
                         Products.map(product =>
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

