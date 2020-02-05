import React from 'react';
import { Link } from '@reach/router';
import ArticleVoteButton from './ArticleVoteButton';

const ArticleCard = (props) => {
	let articleArray = [];

	if (props.article_id) {
		articleArray = [ props.articles_list ];
		return articleArray.map((article) => {
			return (
				<label key={article.article_id}>
					<li>
						<h2>{article.title}</h2> Author: {article.author}
						<br />
						<br />
						Topic: {article.topic}
						<br />
						<p>{article.body}</p>
						<br />
						Created at: {article.created_at}
					</li>
					<br />
					<ArticleVoteButton votes={props.votes} article_id={props.article_id} />
					<br />
				</label>
			);
		});
	} else {
		articleArray = props.articles_list;

		return articleArray.map((article) => {
			return (
				<label key={article.article_id}>
					<li>
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
