import React from 'react';
import fetchApi from '../../modules/fetch-api';


class Order extends React.Component{
    state = {
        order:  null
    }

    componentDidMount(){
        fetchApi('get',
        `https://student-example-api.herokuapp.com/v1/orders/${this.props.id}`
        ).then(res =>{
            this.setState({
                order: res
            })
        })
    }

    renderOrder (){
        const {name, email, order_items} = this.state.order

        return <div>
            <h3>Order Info</h3>
            <div>Name : {name}</div>
            <div>Email : {email}</div>

            <h4>Items</h4>

            <ul>
                {
                    order_items && order_items.map(item =>{
                        const { product, qty, product: {name, image, price}} = item
                    
                        return <li>
                            <img src={image} width={32} alt=""/>
                            {name}
                            ({qty} @ ${price} = ${qty*parseFloat(price)})
                        </li>
                    })
                }
            </ul>
        </div>
    }
    render(){
        const {order} =this.state
        return <div>
            {
                order ? this.renderOrder():'Loading...'
            }
        </div>
    }
}

export default Order;