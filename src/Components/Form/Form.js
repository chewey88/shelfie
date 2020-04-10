import React, {Component} from 'react'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            imgurl: "",
            name: "",
            price: 0
        }
    }

    handleChange(event){
        this.setState({
            imgurl: event.target.value,
            name: event.target.value,
            price: event.target.value
        })
    }

    handleAddProduct(product){
        axios.post('/api/product')
    }

    render(){
        return (
            <div className='form'>
                <input className='image-input' onChange={this.handleChange}/>
                <input className='product-input'  onChange={this.handleChange}/>
                <input className='price-input' type='number' onChange={this.handleChange}/>
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