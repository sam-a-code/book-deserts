//set up routing, add other components 

import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import ArticleList from './ArticleList'
import ResourceList from './ResourceList';
import BookList from './BookList'
import Footer from './Footer'

function App() {

  return (
    <div>
      <header>
        <NavBar />
        <h1 className='page-title'>Book Deserts <br /> and who's helping to end them</h1>
        <Home />
        <ArticleList />
        <BookList />
        <ResourceList />
      </header>
      <Footer />
    </div>
  );
}

export default App;
