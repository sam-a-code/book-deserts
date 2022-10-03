// will go in App, will contain ArticleCard

import React from "react";
import ArticleCard from "./ArticleCard";
import { articles } from "../db"

function ArticleList () {

  const articleList = articles.map((article) => {
    return (
      <ArticleCard
      key={article.title}
      title={article.title}
      source={article.source}
      url={article.url}
      published={article.published}
        />
    ) })
  
  return <div>
    <h1>Articles</h1>
    {articleList}
    </div>;
}

export default ArticleList;
