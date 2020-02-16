import React from 'react';
import { getArticles } from '../API';
import ArticleCard from './ArticleCard';

class ArticlesList extends React.Component {
	state = {
		articles_list: [],
		isLoading: true,
		err: null
	};

	render() {
		const { articles_list, isLoading, err } = this.state;
		const { user, article_id } = this.props;

		if (isLoading === true) return <p>Loading....</p>;
		if (err) return <p id="error">{err.status}: Article not found.</p>;
		return (
			<ArticleCard
				votes={articles_list.votes}
				article_id={article_id}
				articles_list={articles_list}
				user={user}
			/>
		);
	}
	componentDidUpdate(prevProps) {
		const { sort_by, topic } = this.props;
		if (sort_by !== prevProps.sort_by) this.fetchArticles();
		if (topic !== prevProps.topic) this.fetchArticles();
	}

	componentDidMount() {
		this.fetchArticles();
	}

	fetchArticles = () => {
		const { topic, sort_by, article_id } = this.props;
		getArticles(topic, sort_by, article_id)
			.then((articles) => {
				this.setState({ articles_list: articles, isLoading: false });
			})
			.catch((err) => this.setState({ err: err.response, isLoading: false }));
	};
}

export default ArticlesList;
