import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import CartPage from './features/cartpage'
import CheckoutPage from './features/checkout'
import OrdersPage from './pages/oderspage'

const Router = () => {
    return <Switch>
        
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route path="/orders/:id" component={OrdersPage} />
    
    </Switch>
}

export default Router;