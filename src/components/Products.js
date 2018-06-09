import React from 'react'
// let data = require('../../data/data.json')

export class Products extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            quantity: 0,
            basket: {
                productName: '',
                productQuantity: 0,
                subtotal: 0
            }
        }
    }

        addOneItem(){
            const price = this.props.p_price
            let formattedPrice = parseFloat(price).toFixed(2)
            this.setState(prevState => {
                    return { quantity: prevState.quantity + 1, basket: { productName: this.props.p_name, productQuantity: prevState.quantity + 1, subtotal: formattedPrice*(prevState.quantity + 1) } }
                }
            )
        }

        removeOneItem(){
            const price = this.props.p_price
            let formattedPrice = parseFloat(price).toFixed(2)
            if (this.state.quantity > 0)
                this.setState(prevState => {
                        return { quantity: prevState.quantity - 1, basket: { productName: this.props.p_name, productQuantity: prevState.quantity - 1, subtotal: formattedPrice*(prevState.quantity - 1) }  }

                }
                )
        }

        updateCart() {
                let updatedState = this.state.basket
                this.props.addToCart(updatedState)
        }

    render(){
        return(
            <div style={ styles.card }>
                <p>
                    <b>Product Name</b> : {this.props.p_name}
                </p>
                <p>
                    <b>Price</b> : {this.props.p_price}
                </p>
                <p>
                    <b>Product Id</b> : {this.props.p_id}
                </p>
                <p>
                    <b>Quantity</b> : {this.state.quantity}
                </p>
                <p>
                    <b>Subtotal</b> : ${this.state.basket.subtotal}
                </p>
                <button onClick={this.addOneItem.bind(this)}>+</button>
                <button onClick={this.removeOneItem.bind(this)}>-</button>
                <button onClick={this.updateCart.bind(this)}>Update Cart</button>
            </div>
        )
    }
}

const styles = {
    card:{
        padding: 20,
        margin: 20,
        marginRight: 10,
        backgroundColor: '#e8ebef',
        borderRadius: 10,
        fontFamily: 'PT Sans Caption',
    }
}