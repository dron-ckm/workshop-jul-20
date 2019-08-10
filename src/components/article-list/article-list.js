import React, { useState } from "react";
import { connect } from "react-redux";
import Article from "../article";
import accordion from "../../decorators/accordion";
import PropTypes from "prop-types";

@connect(state => ({ articles: state.articles, filters: state.filters }))
@accordion
class ArticleList extends React.Component {
  static propTypes = {
    isOpen: PropTypes.func.isRequired,
    setOpenId: PropTypes.func.isRequired,
    articles: PropTypes.array,
    filters: PropTypes.shape({
      startDate: PropTypes.date,
      endDate: PropTypes.date
    })
  };

  render() {
    let { articles, isOpen, setOpenId, filters } = this.props;

    // Articles should be filtered in reducer ?
    articles = articles.filter(article => {
      return isDateInRange(article.date, filters.startDate, filters.endDate);
    });

    return (
      <div ref={this.setContainerRef}>
        {articles.map(article => (
          <Article
            key={article.id}
            article={article}
            isOpen={isOpen(article.id)}
            onBtnClick={setOpenId(article.id)}
          />
        ))}
      </div>
    );
  }

  setContainerRef = containerRef => console.log("container: ", containerRef);
}

const isDateInRange = (date, from, to) => {
  if (!from || !to) {
    return true;
  }
  const dateTimeStamp = +new Date(date);
  return dateTimeStamp >= +new Date(from) && dateTimeStamp <= +new Date(to);
};

/*
class ArticleList extends Component {
  state = {
    openArticleId: this.props.defaultOpenId
  };

  render() {
    if (this.state.error) {
      return <h3>Some error</h3>;
    }
    return (
      <div>
        {this.props.articles.map(article => (
          <Article
            key={article.id}
            article={article}
            isOpen={article.id === this.state.openArticleId}
            onBtnClick={this.toggleOpenArticle(article.id)}
          />
        ))}
      </div>
    );
  }

  toggleOpenArticle = openArticleId => () => this.setState({ openArticleId });
}
*/

export default ArticleList;
