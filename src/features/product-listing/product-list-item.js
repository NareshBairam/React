import React from 'react';
import AddBtn from './add-btn'
import RemoveBtn from './remove-btn'

export default function ProductListItem(props) {

    return <div className="product-list-item">
        <h3>{props.product.name}</h3>

        <img
            height={100}
            title={props.product.name}
            src={props.product.image}
            alt=""
        >
        </img>

        <div>{props.product.description}</div>
        <div>$ {props.product.price}</div>

        <div>
            <AddBtn
                cartItem={props.cartItem}
                product={props.product}
                addToCart={props.addToCart}
            />
            {
                props.cartItem ?
                    <RemoveBtn
                        cartItem={props.cartItem}
                        removeFromCart={props.removeFromCart}
                    />
                    :
                    null
            }

        </div>
    </div>
}