import React from 'react';
import Header from './components/Header/Header'
import { Link, Route, Switch } from "react-router-dom";
import List from './pages/List/List';
import ProductDetail from './pages/ProductDetail/ProductDetail';

function App() {
  return (
    <div className="App">

      <Route path="/" exact>
        <Header name="Crypto Collectable Wallet" />
        <List />
      </Route>
      <Route path="/products/:contractAddress/:tokenId">
        <ProductDetail />
      </Route>

    </div>
  );
}

export default App;
