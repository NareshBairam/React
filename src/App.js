import React, { Component } from 'react';
import Router from './Router'
import {NavLink} from 'react-router-dom';
import cart from './features/cart';
import { connect } from 'react-redux';


const Navigation = ({cart})=> {
  return (
    <nav>
      <ul className="top-menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart({cart.reduce( (acc, item) =>{
            return acc+ item.quantity
          }, 0)})</NavLink>
        </li>
        <li>
          <NavLink to="/checkout">Checkout</NavLink>
        </li>
      </ul>
     </nav>
  )
}

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <h1>My shopping cart</h1>
        <Navigation {...this.props}/>
        <Router />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      cart: state.cart
  }
}

export default connect(mapStateToProps)(App);
