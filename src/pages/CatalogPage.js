import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CategorySlider from "../components/slider/CategorySlider";
import Photopanel from "../components/categories/Photopanel";

function CatalogPage() {
    return (
        <>
            <Header/>
            <body>
                <CategorySlider/>
                <Container className="padding-top-100 padding-bottom-100 categories">
                    <Row className="justify-content-center">
                        <h3 className="text-center">Посмотрите наш ассортимент!</h3>
                    </Row>
                    <div className="space">
                    </div>
                    <Photopanel />
                </Container>
            </body>
            <Footer/>
        </>
    );
}

export default CatalogPage;