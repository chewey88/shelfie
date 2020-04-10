import React, {Component} from 'react'
// import axios from 'axios'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            price: 0,
            imgurl: ""
        }
        this.handleAddProduct = this.handleAddProduct.bind(this)
    }

    handleChange(event){}    
    


    handleAddProduct(){
        const newProduct = {
            name: this.state.name,
            price: this.state.price,
            imgurl: this.state.imgurl
        }
        this.props.addProduct(newProduct)
    }

    render(){
        return (
            <div className='form'>
                <input 
                className='image-input'
                value={this.state.imgurl} 
                onChange={(e) => this.setState({imgurl: e.target.value})}
                />
                <input 
                className='product-input'
                value={this.state.name}
                onChange={(e) => this.setState({name: e.target.value})}
                />
                <input 
                className='price-input' type='number'
                value={this.state.price} 
                onChange={(e) => this.setState({price: e.target.value})}
                />
                <button
                className='cancel-button'>
                Cancel
                </button>
                <button className='add-to-inv' onClick={this.handleAddProduct}>
                Add to Inventory
                </button> 

            </div>
        )
    }
}

export default Form