import React, {Component} from 'react'
import {ProductsList} from './ProductsList'
let data = require('../../data/data.json')

class App extends Component{
    render() {
        return (
            <div>
                <ProductsList />
            </div>
        )
    }
}

export default App