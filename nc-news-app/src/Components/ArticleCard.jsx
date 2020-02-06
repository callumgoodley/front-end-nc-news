import React from 'react';
import { Link } from '@reach/router';
import ArticleVoteButton from './ArticleVoteButton';
import '../App.css';

const ArticleCard = (props) => {
	let articleArray = [];

	if (props.article_id) {
		articleArray = [ props.articles_list ];
		return articleArray.map((article) => {
			return (
				<label key={article.article_id}>
					<li>
						<h2>{article.title}</h2> Author: {article.author} Created at: {article.created_at}
						<br />
						<p>{article.body}</p>
						<ArticleVoteButton votes={props.votes} article_id={props.article_id} />
					</li>
				</label>
			);
		});
	} else {
		articleArray = props.articles_list;

		return articleArray.map((article) => {
			return (
				<label key={article.article_id}>
					<li id="comment_card">
						<Link to={`/${article.article_id}`}>{article.title}</Link> comments: {article.comment_count},
						created at:{article.created_at}, votes:
						{article.votes}
					</li>
					<br />
				</label>
			);
		});
	}
};

export default ArticleCard;
