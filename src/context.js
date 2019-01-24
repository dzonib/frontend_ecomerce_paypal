import React, { Component, createContext } from 'react';

import {storeProducts,  detailProduct} from './data'
const ProductContext = createContext();

// Provider
// Consumer

class ProductProvider extends Component {

  state = {
    products: [],
    detailProduct
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = {...item}
      products = [...products, singleItem]
    })
    this.setState(() => {
      return {products}
    })
  }

  handleDetail = (id) => {
    const product = this.getItem(id)
    this.setState(() => {
      return {detailProduct: product}
    })
  }

  addToCart = (id) => {
    console.log(`Product id is ${id}`)
  }

  getItem = id => {
    const product = this.state.products.find(item => item.id === id)
    return product
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
