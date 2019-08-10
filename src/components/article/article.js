import React, { useEffect } from "react";
import { connect } from "react-redux";
import styles from "./styles.css";
import CommentList from "../comment-list";
import { deleteArticle } from "../../ac";

function Article({ article, isOpen, onBtnClick }) {
  useEffect(() => {
    //subscribe
    console.log("subscribe for ", article.id);

    return () => console.log("unsubscribe", article.id);
  }, [article.id]);

  const body = isOpen && (
    <section data-id="article-body">
      <p>{article.text}</p>
      <CommentList comments={article.comments} />
    </section>
  );

  return (
    <div>
      <h3 className={styles.header}>{article.title}</h3>
      <button onClick={() => deleteArticle(article.id)}>Delete me</button>
      {body}
      <button onClick={onBtnClick}>{isOpen ? "hide" : "open"} article</button>
    </div>
  );
}

export default connect(
  null,
  { deleteArticle }
)(Article);
