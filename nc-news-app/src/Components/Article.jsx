import React from 'react';
import ArticlesList from './ArticlesList';

const Article = (props) => {
	console.log(props);
	return <ArticlesList article_id={props.article_id} />;
};

export default Article;
