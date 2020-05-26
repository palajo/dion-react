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
import ProductsApi from './api/ProductsApi.json';

import MainPage from "./pages/MainPage";
import CatalogPage from "./pages/catalog/CatalogPage";
import BusinessPage from './pages/BusinessPage';
import ClientsPage from "./pages/ClientsPage";
import ContactsPage from "./pages/ContactsPage";

import LilyPage from "./pages/products/photopanel/Lily";
import GrillPage from "./pages/products/photopanel/Grill";
import LavenderPage from "./pages/products/photopanel/Lavender";
import MosaicPage from "./pages/products/photopanel/Mosaic";
import MountainsPage from "./pages/products/photopanel/Mountains";
import PoppiesPage from "./pages/products/photopanel/Poppies";
import SakuraPage from "./pages/products/photopanel/Sakura";
import SunflowerPage from "./pages/products/photopanel/SunFlower";
import SunflowerNewPage from "./pages/products/photopanel/SunFlowerNew";
import TulipPage from "./pages/products/photopanel/Tulip";
import WaterfallPage from "./pages/products/photopanel/Waterfall";
import PremiumBlackPage from "./pages/products/premium/PremiumBlack";
import PremiumBluePage from "./pages/products/premium/PremiumBlue";
import VictoriaSummerPage from "./pages/products/victoria/Summer";
import VictoriaWaterfallPage from "./pages/products/victoria/Waterfall";
import TurboPage from "./pages/products/turbo/Turbo";
import HalfTurboPage from "./pages/products/turbo/HalfTurbo";
import ProductPage from "./pages/ProductPage";
import {ProductView} from "./components/categories/Categories";
import AnotherTry from "./components/categories/anotherTry";


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

                <Route component={GrillPage} path="/products/photopanel/dion-jsd-10-grill" />
                <Route component={LavenderPage} path="/products/photopanel/dion-jsd-10-lavender" />
                <Route component={LilyPage} path="/products/photopanel/dion-jsd-10-lily" />
                <Route component={MosaicPage} path="/products/photopanel/dion-jsd-10-mosaic" />
                <Route component={MountainsPage} path="/products/photopanel/dion-jsd-10-mountains" />
                <Route component={PoppiesPage} path="/products/photopanel/dion-jsd-10-poppies" />
                <Route component={SakuraPage} path="/products/photopanel/dion-jsd-10-sakura" />
                <Route component={SunflowerPage} path="/products/photopanel/dion-jsd-10-sunflower" />
                <Route component={SunflowerNewPage} path="/products/photopanel/dion-jsd-10-sunflower-new" />
                <Route component={TulipPage} path="/products/photopanel/dion-jsd-10-tulip" />
                <Route component={WaterfallPage} path="/products/photopanel/dion-jsd-10-waterfall" />

                <Route component={TurboPage} path="/products/turbo/dion-jsd-10-turbo" />
                <Route component={HalfTurboPage} path="/products/turbo/dion-jsd-10-halfturbo" />


                <Route component={PremiumBlackPage} path="/products/premium/dion-jsd-10-premium-black" />
                <Route component={PremiumBluePage} path="/products/premium/dion-jsd-10-premium-blue" />

                <Route component={VictoriaSummerPage} path="/products/victoria/victoria-jsd-08-summer" />
                <Route component={VictoriaWaterfallPage} path="/products/victoria/victoria-jsd-08-waterfall" />

                <Route component={VictoriaWaterfallPage} path="/products/victoria/victoria-jsd-08-waterfall" />
                <Route component={AnotherTry} path="/test" />
                <Route component={ProductsApi} path="/api" />

            </Switch>
          </AutoScrolTop>
      </BrowserRouter>
  );
}

export default App;
