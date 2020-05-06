import React, {useState} from 'react';
import {Row, Collapse, Col, Nav} from 'react-bootstrap';
import {NavLink} from "react-router-dom";

const MobileNavigation = (props: any) => {

    const [state, setState] = useState({
        isPressedShowMobileNav: false,
        open: false
    });

    const toggleNav = () => {
        setState({
            isPressedShowMobileNav: !state.isPressedShowMobileNav
        });
    };

    const [open, setOpen] = useState(false);

    return(
        <>
            <Col className="align-self-center d-lg-none dark">
                <div
                    onClick={() => setOpen(!open) + toggleNav()}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    <Row className="align-self-center justify-content-end burgermenu-icon-block"
                         id={state.isPressedShowMobileNav ? 'active': null}>
                        <div className="span burgermenu-text z-index-1001">
                            Меню
                        </div>
                        <div className="burgermenu-icon z-index-1001">
                                <span></span>
                                <span></span>
                                <span></span>
                        </div>
                    </Row>
                </div>
            </Col>
            <Col lg={12} className="margin-top-30">
                <Collapse in={open} className="remove-margins">
                    <div id="example-collapse-text">
                        <Nav className="mobile-navigation flex-column">
                            <Nav.Item>
                                <NavLink to="/" className="nav-link" exact>
                                    Главная
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink to="/catalog" className="nav-link">
                                    Каталог
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink to="/business" className="nav-link">
                                    Для бизнеса
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink to="/clients" className="nav-link">
                                    Для клиента
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink to="/contacts" className="nav-link">
                                    Контакты
                                </NavLink>
                            </Nav.Item>

                        </Nav>
                    </div>
                </Collapse>
            </Col>
        </>
    );
}

export default MobileNavigation;
