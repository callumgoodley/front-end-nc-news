import React from 'react';
import ArticlesList from './ArticlesList';
import Comments from './Comments';

const Article = (props) => {
	return (
		<main id="article_page">
			<ArticlesList article_id={props.article_id} />
			<Comments article_id={props.article_id} />
		</main>
	);
};

export default Article;
