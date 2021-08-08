import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ListOfItems from './components/ListOfItems';
import ItemDetails from './components/ItemDetails';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router>
      <SearchBar />
      <Switch>
        <Route exact path="/" render={()=> <></>} />
        <Route exact path="/items" component={ListOfItems} />
        <Route exact path="/items/:id" component={ItemDetails} />
        <Route exact path="/*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
