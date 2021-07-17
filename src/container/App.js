import React, { useState, useEffect } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Home from './Home'
import Product from './Product'
import NoMatch from './NoMatch'
import data from '../data.json'
import categorydata from '../category.json'
import ScrollToTop from './ScrollToTop'
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
  const [orderingStatus, setOrderingStatus] = useState({
    "label": "zbrites"
  })

  const filterChange = (filterChange) => {
    setfilterStatus(filterChange)
  }
  const orderChange = (orderChange) => {
    setOrderingStatus(orderChange)
  }

  let filteredClothes = clothes;

  if (filterStatus.label !== "all") {
    filteredClothes = clothes.filter(value => {
      if (value.category === filterStatus.value) {
        return value
      }
    })
  } else {
    filteredClothes = clothes
  }

  if (orderingStatus.label === "zbrites") {
    filteredClothes.sort((a, b) => {
      return b.price - a.price
    })
  } else {
    filteredClothes.sort((a, b) => {
      return a.price - b.price
    })
  }
  useEffect(() => {
  })

  return (
    <Router>
      <ScrollToTop/>
      <Header />
      <Switch>
        <Route exact path="/">
          {
            <Home clothes={filteredClothes} categories={categories} filterChange={filterChange} orderChange={orderChange} />
          }
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
