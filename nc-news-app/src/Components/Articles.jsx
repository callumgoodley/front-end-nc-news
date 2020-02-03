import React from 'react';
import ArticlesList from './ArticlesList';
import SortBy from './SortBy';

const Articles = (props) => {
	return (
		<main>
			<h2>Todays top articles:</h2>
			<SortBy topic={props.topic} sort_by={props.sort_by} />
			<ul>
				<ArticlesList />
			</ul>
			<br />
		</main>
	);
};

export default Articles;
