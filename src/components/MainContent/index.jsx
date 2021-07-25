import React from 'react';
import Home from '../../pages/Home';
import Clients from '../../pages/Clients';
import Products from '../../pages/Products';

import { Switch, Route } from 'react-router-dom';

const MainContent = () => {
    return (
        <div className="main-content">
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/clientes" exact>
                    <Clients />
                </Route>
                <Route path="/produtos" exact>
                    <Products />
                </Route>
            </Switch>
        </div>
    )
}

export default MainContent;