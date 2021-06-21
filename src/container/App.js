import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import HomeListItems from '../component/HomeListItems';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <HomeListItems />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
