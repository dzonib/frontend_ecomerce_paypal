import React, {Component} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Details from './Components/Details'
import Cart from './Components/Cart'
import NotFound from './Components/NotFound'

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ProductList />
        <Details />
        <Cart />
        <NotFound />
      </>
    );
  }
}

export default App;
