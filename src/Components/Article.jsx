import React from 'react';
import ArticlesList from './ArticlesList';
import Comments from './Comments';

const Article = (props) => {
	return (
		<main id="article_page">
			<ArticlesList article_id={props.article_id} user={props.user} />
			<Comments article_id={props.article_id} user={props.user} />
		</main>
	);
};

export default Article;
