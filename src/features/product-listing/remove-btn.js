import React from "react";


export default function removeButton(props) {
    return <button
        onClick={() => props.removeFromCart(props.cartItem)}
    >Remove</button>
}