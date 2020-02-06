import React from 'react';
import ArticlesList from './ArticlesList';
import SortByInTopics from './SortByInTopics';

const ArticlesByTopic = (props) => {
	return (
		<main id="article_page">
			<h2>Todays top {props.topic} articles:</h2>
			<SortByInTopics topic={props.topic} sort_by={props.sort_by} />
			<ul>
				<ArticlesList topic={props.topic} />
			</ul>
			<br />
		</main>
	);
};

export default ArticlesByTopic;
