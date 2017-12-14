import React, { Component } from 'react';
import Searchbar from './component/Searchbar';
import Productstable from './component/Productstable'; 
import './App.css';




const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class App extends Component {
 constructor(props) {
    super(props);
    this.state = {
      filterSearch: '',
      inStock: false
    };
  }

 handleFilterTextChange(filterText){
  this.setState({
    filterSearch:filterText
  })
  
 }

 handleInStockChange(inStockOnly){
  this.setState({
    inStock:inStockOnly
  })
 
 }

  render() {
    return (
      <div className="App">
        <Searchbar
          filterSearch={this.state.filterSearch}
          inStock={this.state.inStock}
          onFilterTextChange={this.handleFilterTextChange.bind(this)}
          onStockChange={this.handleInStockChange.bind(this)}
        />
        <Productstable products={PRODUCTS}
          filterSearch={this.state.filterSearch}
          inStock={this.state.inStock}

        />
      </div>
    );
  }
}

export default App;
