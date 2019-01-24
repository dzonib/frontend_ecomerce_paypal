import React, {Component} from 'react'
import Title from './Title'
import Product from './Product.js'
import {ProductConsumer} from '../context'

class ProductList extends Component {

  render() {
    return (
      <div className="py-5">
        <div className="container">
          <Title name="our" title="product"/>
          <div className="row">
            <ProductConsumer>
              {(value) => {
                return value
                  .products
                  .map(product => {
                    return <Product key={product.id} product={product} />
                  })
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    )
  }
}


export default ProductList