import React from "react";
import Header from "./header";
import ArticleList from "./article-list";
import Counter from "./counter";
import Filters from "./filters";

function App() {
  return (
    <div>
      <Header />
      <Counter />
      <Filters />
      <ArticleList />
    </div>
  );
}

App.propTypes = {};

export default App;
