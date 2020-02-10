import React from 'react';
import { Link } from '@reach/router';
import ArticleVoteButton from './ArticleVoteButton';
import '../App.css';

const ArticleCard = (props) => {
	let articleArray = [];

	if (props.article_id) {
		articleArray = [ props.articles_list ];
		return articleArray.map((article) => {
			const date = new Date(article.created_at);
			return (
				<ul key={article.article_id}>
					<li id="article_card">
						<h2>{article.title}</h2>
						<br />
						<p>Author: {article.author}</p>
						<br />
						<p>Posted: {date.toString()}</p>
						<br />
						<p>{article.body}</p>
						<ArticleVoteButton votes={props.votes} article_id={props.article_id} />
					</li>
				</ul>
			);
		});
	} else {
		articleArray = props.articles_list;

		return articleArray.map((article) => {
			console.log(article);
			const date = new Date(article.created_at);
			return (
				<Link id="article_card_home" to={`/${article.article_id}`}>
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
