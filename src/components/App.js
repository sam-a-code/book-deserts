//set up routing, add other components 

import React from 'react';
import {books, articles, resources} from '../db'
import NavBar from './NavBar';
import Home from './Home';
import ArticleList from './ArticleList'
import ResourceList from './ResourceList';
import BookList from './BookList'

function App() {

    console.log(books)
    console.log(resources)
    console.log(articles)

  return (
    <div>
      <header>
        <NavBar />
        <h1>Book Deserts - come up with better title</h1>
        <Home />
        <ArticleList />
        <BookList />
        <ResourceList />
      </header>
    </div>
  );
}

export default App;
