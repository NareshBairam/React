
import React from 'react';
import { connect } from 'react-redux';

import Cart from '../cart'
import CheckoutForm from './form'
import fetchApi from '../../modules/fetch-api';

function submitOrder(values, cart) {
    const { email, name } = values.order

    fetchApi('post',
        'https://student-example-api.herokuapp.com/v1/orders.json',
        {
            order: {
                name,
                email,
                order_items_attributes: cart.map(item => ({
                    product_id: item.id,
                    qty: item.quantity
                }))
            }
        }
    ).then(res => {
        if (res.errors) {
            alert("Something wrong")
        } else {
            document.location.href = `/orders/${res.id}`
        }
    })
}

function Checkout(props) {
    const {cart} = props;
    return <div style={{ border: '1px solid black' }}>
        <Cart />
        <CheckoutForm onSubmit={(values) => submitOrder(values, cart)} />
    </div>
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        },
        removeAllFromCart: (item) => {
            dispatch({ type: 'REMOVE ALL', payload: item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);