import React, { useState, useEffect } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Home from './Home'
import Product from './Product'
import NoMatch from './NoMatch'
import data from '../data.json'
import categorydata from '../category.json'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [clothes, setCount] = useState(data)
  const [categories, setCategories] = useState(categorydata)
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home clothes={clothes} categories={categories} />
        </Route>
        <Route path="/product/:id" children={<Product clothes={clothes} />} />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
