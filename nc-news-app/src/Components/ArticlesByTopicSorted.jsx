import React from 'react';
import ArticlesList from './ArticlesList';
import SortByInTopics from './SortByInTopics';

const ArticlesByTopicSorted = (props) => {
	return (
		<main>
			<h2>
				Todays top {props.topic} articles sorted by {props.sort_by}:
			</h2>
			<SortByInTopics topic={props.topic} sort_by={props.sort_by} />
			<ul>
				<ArticlesList topic={props.topic} sort_by={props.sort_by} />
			</ul>
			<br />
		</main>
	);
};

export default ArticlesByTopicSorted;
