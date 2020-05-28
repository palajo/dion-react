import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import './styles/margins.scss';
import './styles/fonts.scss';
import './styles/icons.scss';

import './styles/adaptation/mobile.scss';
import './styles/adaptation/tablet.scss';

import AutoScrolTop from "./components/navigation/AutoScrolTop";

import MainPage from "./pages/MainPage";
import CatalogPage from "./pages/CatalogPage";
import BusinessPage from './pages/BusinessPage';
import ClientsPage from "./pages/ClientsPage";
import ContactsPage from "./pages/ContactsPage";
import PhotopanelProductView from "./components/product/photopanel/page/PhotopanelProductView";
import PremiumProductView from "./components/product/premium/page/PremiumProductView";
import TurboProductView from "./components/product/turbo/page/TurboProductView";
import VictoriaProductView from "./components/product/victoria/page/VictoriaProductView";

function App() {
    return (
      <BrowserRouter>
          <AutoScrolTop>
            <Switch>
                <Route component={MainPage} path="/" exact />
                <Route component={CatalogPage} path="/catalog" />
                <Route component={BusinessPage} path="/business" />
                <Route component={ClientsPage} path="/clients" />
                <Route component={ContactsPage} path="/contacts" />

                <Route component={PhotopanelProductView} path="/product/Photopanel/:id" />
                <Route component={PremiumProductView} path="/product/Premium/:id" />
                <Route component={TurboProductView} path="/product/Turbo/:id" />
                <Route component={VictoriaProductView} path="/product/Victoria/:id" />
            </Switch>
          </AutoScrolTop>
      </BrowserRouter>
  );
}

export default App;
