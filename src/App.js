import React, {Component} from 'react';
import Form from './Components/Form/Form'
import axios from 'axios'

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [],
    }
  }
  
  componentDidMount(){
    axios.get('/api/products').then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }
  addProduct(product){
    axios.post('/api/product', product).then(res => {
    this.setState({
        inventory: res.data
    })
})
}
  render(){
  return (
    <div className="App">
      
      <Form
      addProduct={this.addProduct} 
      />
    </div>
  );
}
}

export default App;
