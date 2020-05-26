import React from 'react';
import {Row, Col} from 'react-bootstrap';

import Window from './Window';
import Products from './Products';

class Categories extends React.Component{

    render() {
        return (
            <>
                {
                    Products.map(
                        ({category, type, priceFrom, items}) =>
                    <>
                    <Row className="margin-bottom-100">
                        <Col lg={12}>
                            <Row className="margin-bottom-20 border-bottom">
                                <Col xs={12} md={9} lg={true} className="text-left">
                                    <Row className="category-info margin-bottom-10">
                                        <p>
                                            Категория: <b>{category}</b>
                                        </p>
                                        <p>
                                            Тип: <b>{type}</b>
                                        </p>
                                        <p>
                                            Стоимость: <b>{priceFrom}</b>
                                        </p>
                                    </Row>
                                </Col>
                                <Col xs={12} md={3} lg={true}>
                                </Col>
                            </Row>
                            <Row className="windows">
                                 {
                                     items.map(product =>
                                        <Window
                                            windowCategory={product.categoryId}
                                            windowId={product.id}
                                            windowImage={product.img}
                                            windowVendor={product.brand + " " + product.model}
                                            windowName={product.name}
                                            windowPrice={product.price}
                                        />
                                     )
                                 }
                             </Row>
                        </Col>
                    </Row>
                    </>
                )}
            </>
        );
    }

}
export default Categories;
