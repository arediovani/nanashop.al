import React, {useState, useEffect} from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Home from './Home'
import Product from './Product'
import data from '../data.json'
import NoMatch from './NoMatch'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [clothes,setCount] = useState(data)
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home clothes={clothes}/>
        </Route>
        <Route path="/product/:id" children={<Product clothes={clothes}/>}/>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
