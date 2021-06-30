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
  const [filterStatus, setfilterStatus] = useState({
    "label": "all"
  })

  const filterChange = (filterChange) => {
    setfilterStatus(filterChange)
  }

  useEffect(() => { })

  let filteredClothes = clothes;
  if (filterStatus.label != "all") {
    filteredClothes = clothes.filter(value => {
      if (value.category === filterStatus.label) { return value }
    })
  }

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home clothes={filteredClothes} categories={categories} filterChange={filterChange} />
        </Route>
        <Route path="/product/:id" children={<Product clothes={filteredClothes} />} />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
