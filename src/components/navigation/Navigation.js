import React, {useState} from 'react';
import { Row, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = (props: any) => {

    const [state, setState] = useState({
        isPressedShowNav: false
    });

    const toggleNav = () => {
        setState({
            isPressedShowNav: !state.isPressedShowNav
        });
    };

    return(
        <>
            <div onClick={toggleNav}>
                <Row className="align-self-center justify-content-end burgermenu-icon-block dark"
                     id={state.isPressedShowNav ? 'active': null}>
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
            {
                state.isPressedShowNav ? (
                        <Nav className="burgermenu">
                            <NavLink to="/" className="nav-link" exact>
                                <div className="d-flex h-100 justify-content-center">
                                    <div className="align-self-center">
                                        <div className="decor">
                                            <div className="menuNumber">01</div>
                                            <div className="d-flex justify-content-center">
                                                <div className="verticalLine "></div>
                                            </div>
                                        </div>
                                        Главная
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to="/catalog" className="nav-link">
                                <div className="d-flex h-100 justify-content-center">
                                    <div className="align-self-center">
                                        <div className="decor">
                                            <div className="menuNumber">02</div>
                                            <div className="d-flex justify-content-center">
                                                <div className="verticalLine "></div>
                                            </div>
                                        </div>
                                        Каталог
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to="/business" className="nav-link">
                                <div className="d-flex h-100 justify-content-center">
                                    <div className="align-self-center">
                                        <div className="decor">
                                            <div className="menuNumber">03</div>
                                            <div className="d-flex justify-content-center">
                                                <div className="verticalLine "></div>
                                            </div>
                                        </div>
                                        Для бизнеса
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to="/clients" className="nav-link">
                                <div className="d-flex h-100 justify-content-center">
                                    <div className="align-self-center">
                                        <div className="decor">
                                            <div className="menuNumber">04</div>
                                            <div className="d-flex justify-content-center">
                                                <div className="verticalLine "></div>
                                            </div>
                                        </div>
                                        Для клиента
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to="/contacts" className="nav-link">
                                <div className="d-flex h-100 justify-content-center">
                                    <div className="align-self-center">
                                        <div className="decor">
                                            <div className="menuNumber">05</div>
                                            <div className="d-flex justify-content-center">
                                                <div className="verticalLine "></div>
                                            </div>
                                        </div>
                                        Контакты
                                    </div>
                                </div>
                            </NavLink>
                        </Nav>
                ) : null
            }
        </>
    );
}

export default Navigation;
