
import React from "react";
import Order from '../features/order';

function Orderspage(props) {
    return <div>
        <h2>My Order</h2>
        <Order id={props.match.params.id} />
    </div>
}

export default Orderspage;