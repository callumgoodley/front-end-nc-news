import React from 'react';
import ArticlesList from './ArticlesList';
import SortBy from './SortBy';

const ArticlesSortedBy = (props) => {
	return (
		<main>
			<h2>Todays top articles sorted by {props.sort_by}:</h2>
			<SortBy topic={props.topic} sort_by={props.sort_by} />
			<ul>
				<ArticlesList sort_by={props.sort_by} />
			</ul>
			<br />
		</main>
	);
};

export default ArticlesSortedBy;
