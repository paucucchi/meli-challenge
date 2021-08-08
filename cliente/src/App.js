import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ListOfItems from './components/ListOfItems';
import ItemDetails from './components/ItemDetails';
import PageNotFound from './components/PageNotFound';
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Mercado Libre Challenge</title>
        <meta name="description" content="Test práctico para Frontend" />
        <meta name="keywords" content="Buscador de productos, Comprar, Mercado Libre" />
      </Helmet>
      <Router>
        <SearchBar />
        <Switch>
          <Route exact path="/" render={()=> <></>} />
          <Route exact path="/items" component={ListOfItems} />
          <Route exact path="/items/:id" component={ItemDetails} />
          <Route exact path="/*" component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
