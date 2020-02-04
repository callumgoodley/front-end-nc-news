import React from 'react';
import { getArticles } from '../API';
import { Link } from '@reach/router';

class ArticlesList extends React.Component {
	state = {
		articles_list: [],
		isLoading: true
	};

	render() {
		if (this.state.isLoading === true) return <p>Loading....</p>;

		let articleArray = [];

		if (this.props.article_id) {
			articleArray = [ this.state.articles_list ];
			return articleArray.map((article) => {
				return (
					<label key={article.article_id}>
						<li>
							{article.title} Author: {article.author} Topic: {article.topic}
							<br />
							<br />
							body: {article.body}
							<br />
							<br />
							votes: {article.votes} comments: {article.comment_count} created at: {article.created_at}
						</li>
						<br />
					</label>
				);
			});
		} else {
			articleArray = this.state.articles_list;

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
	}
	componentDidUpdate(prevProps) {
		if (this.props.sort_by !== prevProps.sort_by) this.fetchArticles();
		if (this.props.topic !== prevProps.topic) this.fetchArticles();
	}

	componentDidMount() {
		this.fetchArticles();
	}

	fetchArticles = () => {
		const { topic, sort_by, article_id } = this.props;
		getArticles(topic, sort_by, article_id).then((articles) => {
			this.setState({ articles_list: articles, isLoading: false });
		});
	};
}

export default ArticlesList;
