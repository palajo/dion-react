import React from 'react';
import { Col } from 'react-bootstrap';
import {NavLink} from "react-router-dom";


type WindowProps = {
    windowCategory: string,
    windowId: string,
    windowImage: string,
    windowVendor: string,
    windowName: string,
    windowPrice: string,
}


const Window = ({windowCategory, windowId, windowImage, windowVendor, windowName, windowPrice}: WindowProps) => {

    return(

        <Col xs={12} md={6} lg={3}>
            <NavLink to={`products/${windowCategory}/${windowId}`}>
                <div
                    className="product-block background-gray border-bottom padding-top-30 padding-bottom-20 ">
                    <div className="product-image text-center">
                        <img src={windowImage} height="440px" alt="dion-waterheater"/>
                    </div>
                    <div className="product-title margin-top-30 text-center">
                        {windowVendor}, <b>{windowName}</b>
                    </div>
                    <div className="product-price text-center">
                        {windowPrice} грн.
                    </div>
                </div>
            </NavLink>
        </Col>

    );
}

export default Window;
