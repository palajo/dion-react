import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import './styles/margins.scss';
import './styles/fonts.scss';
import './styles/icons.scss';


import MainPage from "./pages/MainPage";
import CatalogPage from "./pages/CatalogPage";
import BusinessPage from './pages/BusinessPage';
import ClientsPage from "./pages/ClientsPage";
import ContactsPage from "./pages/ContactsPage";
import ProductPage from './pages/ProductPage';

function App() {
    return (
      <BrowserRouter>
        <Switch>
            <Route component={MainPage} path="/" exact />
            <Route component={CatalogPage} path="/catalog" />
            <Route component={BusinessPage} path="/business" />
            <Route component={ClientsPage} path="/clients" />
            <Route component={ContactsPage} path="/contacts" />
            <Route component={ProductPage} path="/product" />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
