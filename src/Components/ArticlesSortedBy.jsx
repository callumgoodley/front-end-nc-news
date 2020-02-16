import React from 'react';
import ArticlesList from './ArticlesList';
import SortBy from './SortBy';

const ArticlesSortedBy = ({ sort_by, topic, user }) => {
	let sorted_by = sort_by;
	if (sort_by === 'comment_count') sorted_by = 'most commented';
	if (sort_by === 'created_at') sorted_by = 'latest';
	if (sort_by === 'votes') sorted_by = 'top voted';

	return (
		<main id="article_page" key="main article list">
			<h2 id="all_heading" key="articles listed heading">
				Todays top articles listed by {sorted_by}:
			</h2>
			<SortBy topic={topic} sort_by={sort_by} />
			<ul>
				<ArticlesList sort_by={sort_by} user={user} />
			</ul>
			<br />
		</main>
	);
};

export default ArticlesSortedBy;
