import React, { PropTypes } from "react";
import { Products } from './Products'
import { TitleHeader } from "./TitleHeader";
let data = require('../../data/data.json')

export class ProductsList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            cart: []
        }
    }

    searchForDuplicates(x){
        let found
        for(let i=0;i < this.state.cart.length;i++)   {
            if(this.state.cart[i].productName === x.productName){
                found = i
            }
        }
        return found
    }

    addToCart(product){
            if(this.state.cart.length >= 0 && this.searchForDuplicates(product) === undefined)  {
                this.state.cart.push(product)
            }
            else if(this.state.cart.length > 0 && this.searchForDuplicates(product) !== undefined)  {
                let index = this.searchForDuplicates(product)
                this.state.cart[index].productQuantity = product.productQuantity
                this.state.cart[index].subtotal = product.subtotal
                if(this.state.cart[index].productQuantity === 0){
                    this.state.cart.splice(index, 1)
                }
            }
            this.setState({
                cart: this.state.cart
            })
            console.log(this.state.cart)
    }

    totalCartItems(){
        let total = 0
        for(let i = 0;i<this.state.cart.length;i++){
            total += this.state.cart[i].productQuantity
        }
        return total
    }

    totalCartValue(){
        let sum = 0
        for(let i = 0;i<this.state.cart.length;i++){
            sum+=this.state.cart[i].subtotal
        }
        return sum
    }

    render(){
        let Cart = this.state.cart
        let total = this.totalCartItems()
        let sum = this.totalCartValue()
        return(
            <div>
            <TitleHeader/>
                <div style={styles.container}>
                <div style={styles.wrapper}>
                {
                    data.map((item, index) => {
                    return(
                        <Products key={index} sno={item["sno"]} p_id={item["product_id"]} p_name={item["product_name"]} p_price={item["price"]} addToCart={this.addToCart.bind(this)} />
                        )
                    })
                }
                </div>
                <div style={styles.cart}>
                        <h2>Cart</h2>
                    <div>
                        {
                            Cart.map((item) => {
                                return(
                                    <div key={item.productName} style={styles.cartLayout}>
                                        <div style={styles.cartItemName}>{item.productName}</div>
                                        <div style={styles.valueDiv}>
                                            <div style={styles.cartItems}>Quantity: {item.productQuantity}</div>
                                            <div style={styles.cartItems}>Subtotal: ${item.subtotal}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div style={styles.value}>Total Cart Items: {total}</div>
                    <div style={styles.value}>Total Cart Value: ${parseFloat(sum.toFixed(2))}</div>
                    </div>
                </div>
                </div>
        )
    }
}

const styles = {
    wrapper: {
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        gridTemplateRows: '20% 20%',
        justifyContent: 'center',
    },
    cart:{
        display: 'flex',
        flexDirection: 'column',
        width: '25%',
        backgroundColor: '#e8ebef',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        alignItems: 'center',
        fontFamily: 'PT Sans Caption',
        position: 'sticky',
        top: 125,
        zIndex:100,
        height: 400,
        overflowY: 'scroll'
    },
    container:{
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid black',
        justifyContent: 'center'
    },
    cartLayout:{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #6b27c4',
        borderRadius: 10,
        justifyContent: 'center',
        margin: 10,
    },
    cartItemName:{
        display: 'flex',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '1px solid #6b27c4'
    },
    cartItems:{
        display: 'flex',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
    },
    value:{
        backgroundColor: '#6b27c4',
        color: '#e8ebef',
        borderRadius: 10,
        width: '80%',
        height: 20,
        padding: 10,
        margin: 10,
        textAlign: 'center'
    },
    valueDiv:{
        display: 'flex',
        flexDirection: 'row',
        bottom: 20
    }
}