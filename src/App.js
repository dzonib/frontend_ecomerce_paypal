import React, {Component} from 'react'
import { Switch, Route} from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Details from './Components/Details'
import Cart from './Components/cart'
import NotFound from './Components/NotFound'
import Modal from './Components/Modal'


class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={NotFound} />
        </Switch>
        <Modal />
      </>
    );
  }
}

export default App;
