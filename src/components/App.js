import React from 'react';
import {books, articles, resources} from './db'
import NavBar from './NavBar';



function App() {

    console.log(books)
    console.log(resources)
    console.log(articles)

  return (
    <div>
      <header>
        <NavBar />
        <h1>Book Deserts - come up with better title</h1>
        {/* <ArticleList /> */}
      </header>
    </div>
  );
}

export default App;
