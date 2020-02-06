import React from 'react';
import ArticlesList from './ArticlesList';
import SortBy from './SortBy';

const ArticlesSortedBy = (props) => {
	let sorted_by = props.sort_by;
	if (props.sort_by === 'comment_count') sorted_by = 'most commented';
	if (props.sort_by === 'created_at') sorted_by = 'latest';
	if (props.sort_by === 'votes') sorted_by = 'top voted';

	return (
		<main id="article_page">
			<h2>Todays top articles {sorted_by}:</h2>
			<SortBy topic={props.topic} sort_by={props.sort_by} />
			<ul>
				<ArticlesList sort_by={props.sort_by} />
			</ul>
			<br />
		</main>
	);
};

export default ArticlesSortedBy;
