// will go in App, will contain ArticleCard

import React, {useState, useEffect} from "react";
import ArticleCard from "./ArticleCard";

function ArticleList () {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/articles')
    .then((r) => r.json())
    .then((articles) => setArticles(articles))
    }, [])

  const articleList = articles.map((article) => {
    return (
      <ArticleCard
      key={article.id}
      title={article.title}
      author={article.author}
      source={article.source}
      url={article.url}
      published={article.published}
        />
    ) })
  
  return (
    <div>
      <h2>Articles</h2>
    <ul className="cards">
      {articleList}
    </ul>
    </div>
  )
}

export default ArticleList;
