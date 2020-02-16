import React from 'react';
import ArticlesList from './ArticlesList';
import SortByInTopics from './SortByInTopics';

const ArticlesByTopic = ({ topic, sort_by, user }) => {
	return (
		<main id="article_page">
			<h2 id="all_heading">Todays top {topic} articles:</h2>
			<SortByInTopics topic={topic} sort_by={sort_by} />
			<ul>
				<ArticlesList topic={topic} user={user} />
			</ul>
			<br />
		</main>
	);
};

export default ArticlesByTopic;
