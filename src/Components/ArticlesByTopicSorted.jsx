import React from 'react';
import ArticlesList from './ArticlesList';
import SortByInTopics from './SortByInTopics';

const ArticlesByTopicSorted = ({ sort_by, topic, user }) => {
	let sorted_by = sort_by;
	if (sort_by === 'comment_count') sorted_by = 'most commented';
	if (sort_by === 'created_at') sorted_by = 'latest';
	if (sort_by === 'votes') sorted_by = 'top voted';
	return (
		<main id="article_page">
			<h2 id="all_heading">
				Todays top {topic} articles sorted by {sorted_by}:
			</h2>
			<SortByInTopics topic={topic} sort_by={sort_by} />
			<ul>
				<ArticlesList topic={topic} sort_by={sort_by} user={user} />
			</ul>
			<br />
		</main>
	);
};

export default ArticlesByTopicSorted;
