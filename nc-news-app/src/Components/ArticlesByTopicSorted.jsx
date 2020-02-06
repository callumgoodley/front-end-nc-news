import React from 'react';
import ArticlesList from './ArticlesList';
import SortByInTopics from './SortByInTopics';

const ArticlesByTopicSorted = (props) => {
	let sorted_by = props.sort_by;
	if (props.sort_by === 'comment_count') sorted_by = 'most commented';
	if (props.sort_by === 'created_at') sorted_by = 'latest';
	if (props.sort_by === 'votes') sorted_by = 'top voted';
	return (
		<main id="article_page">
			<h2>
				Todays top {props.topic} articles sorted by {sorted_by}:
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
