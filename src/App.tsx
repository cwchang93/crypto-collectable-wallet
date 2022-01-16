import React from 'react';
import Header from './components/Header/Header'
import { Link, Route, Switch } from "react-router-dom";
import List from './pages/List/List';
import ProductDetail from './pages/ProductDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header name="Crypto Collectable Wallet" />

      <Route path="/" exact>
        <List />
      </Route>
      <Route path="/products/:id">
        <List />
      </Route>

    </div>
  );
}

export default App;
