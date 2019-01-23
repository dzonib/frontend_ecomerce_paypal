import React, { Component, createContext } from 'react';

import {storeProducts,  detailProduct} from './data'
const ProductContext = createContext();

// Provider
// Consumer

class ProductProvider extends Component {

  state = {
    products: storeProducts,
    detailProduct
  }

  handleDetail = () => {
    console.log('handle detail')
  }

  addToCart = () => {
    console.log('hello from handle cart yoyoyo')
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
