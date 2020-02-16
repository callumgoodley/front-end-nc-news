import React from 'react';
import { Link } from '@reach/router';
import '../App.css';
import VoteButton from './VoteButton';

const ArticleCard = ({ articles_list, article_id, votes }) => {
	let articleArray = [];

	if (article_id) {
		articleArray = [ articles_list ];
		return articleArray.map((article) => {
			const date = new Date(article.created_at);
			return (
				<ul key={article.article_id}>
					<li id="article_card" key={`${article.article_id} li`}>
						<h2>{article.title}</h2>
						<br />
						<p key={article.article_id}>Author: {article.author}</p>
						<br />
						<p key={article.article_id}>Posted: {date.toString()}</p>
						<br />
						<p key={article.article_id}>{article.body}</p>
						<VoteButton votes={votes} article_id={article_id} key={article.article_id} />
					</li>
				</ul>
			);
		});
	} else {
		articleArray = articles_list;

		return articleArray.map((article) => {
			const date = new Date(article.created_at);
			return (
				<Link id="article_card_home" to={`/article/${article.article_id}`}>
					<label key={article.article_id}>
						<li id="home_article_card">
							<span id="article_heading">{article.title}</span>
							<br />
							<br />
							Posted:{date.toString()} Comments: {article.comment_count} Votes:
							{article.votes}
						</li>
						<br />
					</label>
				</Link>
			);
		});
	}
};

export default ArticleCard;
