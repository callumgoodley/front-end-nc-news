import React from 'react';
import ArticlesList from './ArticlesList';
import Comments from './Comments';

const Article = ({ article_id, user }) => {
	return (
		<main id="article_page">
			<ArticlesList article_id={article_id} user={user} />
			<Comments article_id={article_id} user={user} />
		</main>
	);
};

export default Article;
