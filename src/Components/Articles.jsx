import React from 'react';
import ArticlesList from './ArticlesList';
import SortBy from './SortBy';
import '../App.css';

const Articles = ({ topic, sort_by, user }) => {
	return (
		<main id="article_page">
			<h2 id="all_heading">Todays top articles:</h2>
			<SortBy topic={topic} sort_by={sort_by} />
			<ul>
				<ArticlesList user={user} />
			</ul>
			<br />
		</main>
	);
};

export default Articles;
