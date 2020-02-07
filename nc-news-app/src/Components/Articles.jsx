import React from 'react';
import ArticlesList from './ArticlesList';
import SortBy from './SortBy';
import '../App.css';

const Articles = (props) => {
	return (
		<main id="article_page">
			<h2 id="all_heading">Todays top articles:</h2>
			<SortBy topic={props.topic} sort_by={props.sort_by} />
			<ul>
				<ArticlesList user={props.user} />
			</ul>
			<br />
		</main>
	);
};

export default Articles;
