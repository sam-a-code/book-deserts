import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import ArticleList from './ArticleList'
import ResourceList from './ResourceList';
import BookList from './BookList'
import Footer from './Footer'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <header>
        <NavBar/>
        <h1 className='page-title'>Book Deserts</h1>
        <h2 className='page-subtitle'>🌧️ and how they're being watered 🌧️</h2>
        <br></br>
        <Switch>
          <Route exact path="/articles">
            <ArticleList />
          </Route>
          <Route exact path="/organizations">
            <ResourceList />
          </Route>
          <Route exact path="/books">
            <BookList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
          </Switch>
      </header>
      <Footer />
    </div>
  );
}

export default App;
